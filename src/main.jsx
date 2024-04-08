import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Root';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './Components/AuthProvider';
import Error from './Components/Error';
import ProtectedRoute from './Components/ProtectedRoute';
import About from './Components/About';
import DetailsItem from './Components/DetailsItem';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <ProtectedRoute>
          <About></About>
        </ProtectedRoute>
      },
      {
        path: "/error",
        element: <ProtectedRoute>
          <Error></Error>
        </ProtectedRoute>
      },
      {
        path: "/itemdetails/:id",
        element: <ProtectedRoute>
          <DetailsItem></DetailsItem>
        </ProtectedRoute>,
        loader: () => fetch("Residential.json")
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
