import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage/session';
import app from "../features/app";

const encryptor = encryptTransform({
    secretKey: import.meta.env.VITE_APP_ENCRYPTION_KEY || 'modify-this-secret-key',
    onError: function (error) {
        console.error('An error occurred during encryption:', error);
    },
});

const reducers = combineReducers({
    app
});

export type RootReducerState = ReturnType<typeof reducers>;

const persistConfig: PersistConfig<RootReducerState> = {
    key: 'root',
    storage: storage,
    transforms: [encryptor]
};

const persistedReducer = persistReducer<RootReducerState>(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
    devTools: import.meta.env.DEV
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;