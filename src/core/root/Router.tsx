import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { App } from './App';
import { Home } from '../components/pages/Home/Home';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

const Router: React.FC = () => <RouterProvider router={router} />;

export { Router };
