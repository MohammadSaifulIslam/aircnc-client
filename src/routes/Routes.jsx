import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'rooms/:id',
        element: <RoomDetails/>
      },
     
    ]
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'signup',
    element: <SignUp/>
  },
  {
    path: 'dashboard',
    element: <DashboardLayout/>
  }
]);

export default router