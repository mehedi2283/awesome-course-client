import Checkout from "../../components/Checkout/Checkout";
import Courses from "../../components/Courses/Courses";
import Details from "../../components/Details/Details";
import Home from "../../components/Home/Home";
import Main from "../../layout/Main";
import RightSideCourses from "./../../components/RightSideCourses/RightSideCourses";
import Login from './../../components/Login/Login/Login';
import Register from './../../components/Login/Register/Register';
import TermsAndConditions from './../../components/TermsAndConditions/TermsAndConditions';
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
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
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },

      {
        path: "/course",
        loader: () => fetch("http://localhost:5000/course"),
        element: <Courses></Courses>,
        children: [
          {
            path: "/course",
            loader: () => fetch("http://localhost:5000/course"),
            element: <RightSideCourses></RightSideCourses>,
          },
          {
            path: "/course/details/:id",
            loader: ({ params }) =>
              fetch(`http://localhost:5000/details/${params.id}`),
            element: <Details></Details>,
          },
          {
            path: "/course/details/checkout/:id",
            loader: ({ params }) =>
              fetch(`http://localhost:5000/details/checkout/${params.id}`),
            element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
          },
        ],
      },
      
    ],
  },
]);
