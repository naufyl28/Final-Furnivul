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
import OurBusiness from "./pages/OurBusiness.jsx";

// import Article pages
import Article from "./pages/Article.jsx";
import DetailArticle from "./pages/detailArticle.jsx";

// End-to-end test shopping
import CategoryProduct from "./pages/CategoryProduct.jsx";
import ListingProduct from "./pages/ListingProduct.jsx";
import Product from "./pages/detailProduct.jsx";

// Checkout system route
import Cart from "./pages/Cart.jsx";
import Address from "./pages/Address.jsx";
import AddAddress from "./pages/AddAddress.jsx";
import Checkout from "./pages/Checkout.jsx";
import Payment from "./pages/Payment.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<NotFound />}>
        {/* routing pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/our-business" element={<OurBusiness />} />

        {/* routing article pages */}
        <Route path="/article" element={<Article />} />
        <Route path="/article/detail-article" element={<DetailArticle />} />

        {/* routing outlet pages product */}
        <Route path="/category-product" element={<CategoryProduct />} />
        <Route
          path="/category-product/list-product"
          element={<ListingProduct />}
        />
        <Route
          path="/category-product/list-product/detail-product"
          element={<Product />}
        />

        {/* routing checkout system */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/address" element={<Address />} />
        <Route path="/cart/address/add-address" element={<AddAddress />} />
        <Route
          path="/cart/address/add-address/checkout"
          element={<Checkout />}
        />
        <Route
          path="/cart/address/add-address/checkout/payment"
          element={<Payment />}
        />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
