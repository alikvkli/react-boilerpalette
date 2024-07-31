import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialStateProps } from "./types"


const initialState: InitialStateProps = {
    login: false
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<InitialStateProps['login']>) => {
            state.login = action.payload;
        },
    }
})
    ;

export const {
    setLogin,
} = appSlice.actions;

export default appSlice.reducer;