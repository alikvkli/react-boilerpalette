import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';


const root = ReactDOM.createRoot(document.getElementById('root')!);

root!.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
