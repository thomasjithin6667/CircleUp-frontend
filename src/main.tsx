
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './utils/context/store.ts';
import { RouterProvider } from 'react-router-dom';
import appRouter from './routes/UserRouter.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
    
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={appRouter}>
      
      <App />
      </RouterProvider>
    </PersistGate>
  </Provider>

)
