import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import Main from '../Layout/Main';
import Secondary from '../Layout/Secondary';
import AboutUs from '../Pages/AboutUs/AboutUs';
import AddPost from '../Pages/AddPost/AddPost';
import AllPosts from '../Pages/AllPosts/AllPosts';
import Author from '../Pages/Author/Author';
import UpdatePost from '../Pages/Author/UpdatePost/UpdatePost';
import Category from '../Pages/Category/Category';
import Contact from '../Pages/Contact/Contact';
import AllComments from '../Pages/Dashboard/AllComments/AllComments';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import DashboardAllPost from '../Pages/Dashboard/DashboardAllPost/DashboardAllPost';
import DashboardHome from '../Pages/Dashboard/DashboardHome/DashboardHome';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import PostDetails from '../Pages/PostDetails/PostDetails';
import Registration from '../Pages/Registration/Registration';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-posts',
                loader: () => fetch(`http://localhost:5000/posts`),
                element: <AllPosts />
            },
            {
                path: '/category/:name',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`),
                element: <Category />
            },
            {
                path: '/post/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/post/${params.id}`),
                element: <PostDetails />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <Contact />
            }

        ]
    },
    {
        path: '/author',
        element: <Secondary />,
        children: [
            {
                path: '/author',
                element: <PrivateRoute>
                    <Author />
                </PrivateRoute>
            },
            {
                path: '/author/login',
                element: <Login />
            },
            {
                path: '/author/registration',
                element: <Registration />
            },
            {
                path: '/author/add-post',
                element: <PrivateRoute>
                    <AddPost />
                </PrivateRoute>
            },
            {
                path: '/author/update-post/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/post/${params.id}`),
                element: <PrivateRoute>
                    <UpdatePost />
                </PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard/home',
                element: <DashboardHome />
            },
            {
                path: '/dashboard/all-users',
                element: <AllUsers />
            },
            {
                path: '/dashboard/all-posts',
                element: <DashboardAllPost />
            },
            {
                path: '/dashboard/all-comments',
                element: <AllComments />
            },
            {
                path: '/dashboard/add-newPost',
                element: <AddPost />
            }
        ]
    }

])

export default routes;