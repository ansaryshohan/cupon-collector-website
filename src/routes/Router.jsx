import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const router= createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element: <div>homepage</div>
      },
      {
        path:"/brands",
        element: <div>brands</div>
      },
      {
        path:"/categories",
        element: <div>categories</div>
      },
      {
        path:"/contact",
        element: <div>contact</div>
      },
      {
        path:"/about-us",
        element: <div>About us</div>
      },
      {
        path:"/login",
        element: <div>login</div>
      },
    ]
  }
])

export default router;