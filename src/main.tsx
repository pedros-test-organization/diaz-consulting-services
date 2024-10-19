import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { StrictMode } from 'react';
import Home from './pages/home-page';
import ErrorPage from './pages/error-page';

import appRoutes from './routes/app-routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(appRoutes);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
