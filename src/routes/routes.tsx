import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Secondary from '../Layout/Secondary';
import Author from '../Pages/Author/Author';
import Category from '../Pages/Category/Category';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
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
            },

        ]
    },
    {
        path: '/author',
        element: <Secondary />,
        children: [
            {
                path: '/author',
                element: <Author />
            },
            {
                path: '/author/login',
                element: <Login />
            }
        ]
    },
])

export default routes;