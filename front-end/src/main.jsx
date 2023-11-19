import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import framework
import "flowbite-react";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";

// import pages
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound";

// import outlet pages
import LandingPage from "./pages/LandingPage.jsx";
import CategoryProduct from "./pages/CategoryProduct.jsx";
import OurBusiness from "./pages/OurBusiness.jsx";
import Article from "./pages/Article.jsx";
import ListingProduct from "./pages/ListingProduct.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<NotFound />}>
        {/* routing pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/our-business" element={<OurBusiness />} />
        <Route path="/article" element={<Article />} />

        {/* routing outlet pages product */}
        <Route path="/category-product" element={<CategoryProduct />} />
        <Route
          path="/category-product/list-product"
          element={<ListingProduct />}
        />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
