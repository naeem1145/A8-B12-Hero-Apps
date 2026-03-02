import Home from "../Pages/Home"
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import AllApplication from "../Pages/AllApplication";
import Installation from "../Pages/Installation";
import ProductDetails from "../Pages/ProductDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />, // ✅ This will show when route not found
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "allApplication",
        element: <AllApplication />,
      },
      {
        path: "installation",
        element: <Installation />,
      },
      {
        path: "allApplication/:id",
        element: <ProductDetails />,
      },

    ],
  },
]);


export default router;