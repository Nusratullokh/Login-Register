// // import { useRoutes, Navigate } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // import { Suspense, lazy } from "react";

// // import { Loading } from "../utils";
// // import Cart from './cart/Cart';
// // import SingleProduct from './single-product/SingleProduct';

// // const Home = lazy(() => import("./home/Home"));
// // const Private = lazy(() => import("./private/private"));

// // const Dashboard = lazy(() => import("./dashboard/Dashboard"));
// // const Products = lazy(() => import("./dashboard/products/products"));
// // const Users = lazy(() => import("./dashboard/users/users"));
// // const Profile = lazy(() => import("./dashboard/profile/profile"));

// // const Auth = lazy(() => import("./auth/Auth"));
// // const Login = lazy(() => import("./auth/login/Login"));
// // const Register = lazy(() => import("./auth/register/Register"));
// // const SingleProduct = lazy(() => import('./single-product/SingleProduct'));

// // const RouteController = () => {
// //    const auth = useSelector(state => state.token);
// //    return useRoutes([

// //       {
// //          path: "",
// //          element: <Suspense fallback={<Loading/>}><Home/></Suspense>
// //       },

// //       {
// //          path: "dashboard",
// //          element: <Suspense fallback={<Loading/>}><Private/></Suspense>,
// //          children: [
// //             {
// //                path: "",
// //                element: <Suspense fallback={<Loading/>}><Dashboard/></Suspense>,
// //                children: [
// //                   {
// //                      path: "",
// //                      element: <Suspense fallback={<Loading/>}><Products/></Suspense>
// //                   },
// //                   {
// //                      path: "users",
// //                      element: <Suspense fallback={<Loading/>}><Users/></Suspense>
// //                   },
               
// //                   {
// //                      path: "profile",
// //                      element: <Suspense fallback={<Loading/>}><Profile/></Suspense>
// //                   }
// //                ]
// //             }
// //          ]
// //       },
      
// //       {
// //          path: "auth",
// //          element: auth.token ? <Navigate to="/dashboard" /> : <Suspense fallback={<Loading/>}><Auth/></Suspense>,
// //          children: [
// //             {
// //                path: "",
// //                element: <Suspense fallback={<Loading/>}><Login/></Suspense>
// //             },
// //             {
// //                path: "register",
// //                element: <Suspense fallback={<Loading/>}><Register/></Suspense>
// //             }
// //          ]
// //       },
// //       {
// //                      path: 'product/single-product/:id',
// //                      element: <Suspense><SingleProduct /></Suspense>,
// //                  },
// //                  {
// //                      path: 'cart',
// //                      element: <Suspense><Cart /></Suspense>,
// //                  }
// //    ]);
// // };

// // export default RouteController


import { Navigate, useRoutes } from 'react-router-dom';
import { lazy } from 'react';

import Suspense from '../utils/index';
import Private from './private/private';
import { useSelector } from 'react-redux';
import Profile from './dashboard/profile/profile';
import Cart from './dashboard/cart/Cart';

// import SingleProduct from './single-product/SingleProduct';
const Home = lazy(() => import('./home/Home'));
const Auth = lazy(() => import('./auth/Auth'));
const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Products = lazy(() => import('./dashboard/products/products'));
const Users = lazy(() => import('./dashboard/users/users'));;
const Login = lazy(() => import('./auth/login/Login'));
const Register = lazy(() => import('./auth/register/Register'));
const SingleProduct = lazy(() => import('./dashboard/single-page/SinglePage'));

const RouteController = () => {
    const auth = useSelector(state => state.token);
    return useRoutes([
        {
            path: '',
            element: <Suspense><Home /></Suspense>,
        },
        {
            path: 'auth',
            element: auth ? <Navigate to='/dashboard' /> : <Suspense><Auth /></Suspense>,
            children: [
                {
                    path: '',
                    element: <Suspense><Login /></Suspense>,
                },
                {
                    path: 'register',
                    element: <Suspense><Register /></Suspense>,
                },
            ],
        },
        {
            path: 'dashboard',
            element: <Suspense><Private /></Suspense>,
            children: [
                {
                    path: '',
                    element: <Suspense><Dashboard /></Suspense>,
                    children: [
                        {
                            path: '',
                            element: <Suspense><Products /></Suspense>,
                        },
                        {
                            path: 'users',
                            element: <Suspense><Users /></Suspense>,
                        },
                        {
                            path: 'profile',
                            element: <Suspense><Profile /></Suspense>,
                        }
                    ]
                }
            ]
        },
        {
            path: 'product/single-product/:id',
            element: <Suspense><SingleProduct /></Suspense>,
        },
        {
            path: 'cart',
            element: <Suspense><Cart /></Suspense>,
        }
    ]);
};

export default RouteController;