import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AboutUsPage from "../pages/AboutUsPage";
import BrandsPage from "../pages/BrandsPage";
import CategoryPage from "../pages/CategoryPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import BrandDetailsPage from "../pages/BrandDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/brands",
        element: <BrandsPage />,
      },
      {
        path: "/brands/:brandId",
        element: <BrandDetailsPage />,
        loader: ()=> fetch("/couponData.json")
      },
      {
        path: "/categories",
        element: <CategoryPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
