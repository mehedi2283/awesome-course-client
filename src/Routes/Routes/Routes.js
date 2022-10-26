import Checkout from "../../components/Checkout/Checkout";
import Courses from "../../components/Courses/Courses";
import Details from "../../components/Details/Details";
import Home from "../../components/Home/Home";
import Main from "../../layout/Main";
import RightSideCourses from "./../../components/RightSideCourses/RightSideCourses";
import Login from "./../../components/Login/Login/Login";
import Register from "./../../components/Login/Register/Register";
import TermsAndConditions from "./../../components/TermsAndConditions/TermsAndConditions";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import { IoIosWarning } from "react-icons/io";
import Blogs from './../../components/Blogs/Blogs';

const { createBrowserRouter, Link } = require("react-router-dom");

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
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/f&q",
        element: <TermsAndConditions></TermsAndConditions>,
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
            element: (
              <PrivateRoutes>
                <Checkout></Checkout>
              </PrivateRoutes>
            ),
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: (
      <div className="text-center mt-5 d-flex flex-column ">
        <h1 className="fs-1 text-danger">No Route Found!</h1>

        <IoIosWarning className="h-100 w-25 text-center mx-auto mt-5 text-danger"></IoIosWarning>
        <Link
          className="fs-5 px-3 py-2 border border-dark rounded-3 link w-25 mx-auto"
          to="/home"
        >
          Go Back Home
        </Link>
      </div>
    ),
  },
]);
