import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import AddCoffee from './Components/AddCoffee/AddCoffee.jsx';
import ViewDetails from './Components/ViewDetails/ViewDetails.jsx';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/viewDetails/:id',
    loader: ({params})=> fetch(`http://localhost:8001/coffee/${params.id}`),
    element: <ViewDetails></ViewDetails>
  },
  {
    path: '/updateCoffee/:id',
    loader: ({params})=> fetch(`http://localhost:8001/coffee/${params.id}`),
    element: <UpdateCoffee></UpdateCoffee>
  }
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
