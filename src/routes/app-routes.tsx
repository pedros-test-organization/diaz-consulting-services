import HomePage from '../pages/home-page';
import ErrorPage from '../pages/error-page';
import { RouteObject } from 'react-router-dom';
import App from '@/app/app';

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
];

export default appRoutes;
