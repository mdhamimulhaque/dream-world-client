import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Category from '../Pages/Category/Category';
import Home from '../Pages/Home/Home';
import PostDetails from '../Pages/PostDetails/PostDetails';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/category/:id',
                element: <Category />
            },
            {
                path: '/post/:id',
                element: <PostDetails />
            }
        ]
    }
])

export default routes;