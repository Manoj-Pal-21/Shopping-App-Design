import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Activities from '../pages/Activities/Activities';
import App from '../App';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'activities',
                element: <Activities />,
            }
        ],
    }
]);

export default Router;
