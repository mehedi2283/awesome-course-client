import Courses from "../../components/Courses/Courses";
import Main from "../../layout/Main";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([

    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path: "/",
                loader: () => fetch ('http://localhost:5000/catagories'),
                element:<Courses></Courses>
    }
        ]
    }

])