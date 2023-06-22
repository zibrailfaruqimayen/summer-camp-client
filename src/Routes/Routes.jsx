import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Heme/Home";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import AddSelect from "../Pages/Dashboard/AddSelect/AddSelect";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import Instructor from "../Pages/Instructor/Instructor";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import Feedback from "../Pages/Dashboard/Feedback/Feedback";
import MyEnrolled from "../Pages/Dashboard/MyEnrolled/MyEnrolled";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "manageclass",
            element: (
              <AdminRoute>
                <ManageClass></ManageClass>
              </AdminRoute>
            ),
          },
          {
            path: "adminhome",
            element: <AdminHome></AdminHome>,
          },
          {
            path: "manageusers",
            element: (
              <AdminRoute>
                <ManageUsers></ManageUsers>
              </AdminRoute>
            ),
          },
          {
            path: "addclass",
            element: <AddClass></AddClass>,
          },
          {
            path: "myclasses",
            element: <MyClasses></MyClasses>,
          },
          {
            path: "feedback",
            element: <Feedback></Feedback>,
          },
          {
            path: "AddSelect",
            element: <AddSelect></AddSelect>,
          },
          {
            path: "myenrolled",
            element: <MyEnrolled></MyEnrolled>,
          },
          {
            path: "paymenthistory",
            element: <PaymentHistory></PaymentHistory>,
          },
          {
            path: "payment",
            element: <Payment></Payment>,
          },
        ],
      },
    ],
  },
]);
