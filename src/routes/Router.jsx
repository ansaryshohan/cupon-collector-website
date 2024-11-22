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
import CouponDetailsPage from "../pages/CouponDetailsPage";
import PrivateRoute from "./PrivateRoute";
import MyProfilePage from "../pages/MyProfilePage";
import UpdateProfilePage from "../pages/UpdateProfilePage";
import ProtectedRoute from "./ProtectedRoute";

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
        loader: ()=> fetch("/couponData.json")
      },
      {
        path: "/brand/:brandId",
        element: <PrivateRoute><BrandDetailsPage /></PrivateRoute>,
        loader: ()=> fetch("/couponData.json")
      },
      {
        path: "/brand/coupon/:couponCode",
        element: <PrivateRoute><CouponDetailsPage /></PrivateRoute>,
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
        path: "/my-profile",
        element: <PrivateRoute><MyProfilePage /></PrivateRoute>,
      },
      {
        path: "/update-profile",
        element: <PrivateRoute><UpdateProfilePage /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <ProtectedRoute><LoginPage /></ProtectedRoute>,
      },
      {
        path: "/register",
        element: <ProtectedRoute><RegisterPage /></ProtectedRoute>,
      },
    ],
  },
]);

export default router;
