// Import necessary modules
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Import necessary routing components and functions
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";

// Import your components/pages
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound";

// Import outlet pages
import LandingPage from "./pages/LandingPage.jsx";

// Import Article pages
import Article from "./pages/Article.jsx";
import DetailArticle from "./pages/detailArticle.jsx";

// Import end-to-end test shopping
import CategoryProduct from "./pages/CategoryProduct.jsx";
import ListingProduct from "./pages/ListingProduct"; // Corrected import
import Product from "./pages/detailProduct.jsx";

// Import Checkout system route
import Cart from "./pages/Cart.jsx";
import Address from "./pages/Address.jsx";
import AddAddress from "./pages/AddAddress.jsx";
import Checkout from "./pages/Checkout.jsx";
import Payment from "./pages/Payment.jsx";
import TransactionStatus from "./pages/TransactionStatus.jsx";

// Create the router and define routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<NotFound />}>
        {/* Routing pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Routing article pages */}
        <Route path="/article" element={<Article />} />
        <Route path="/article/detail-article" element={<DetailArticle />} />

        {/* Routing outlet pages product */}
        <Route path="/category-product" element={<CategoryProduct />} />
        <Route
          path="/category-product/list-product/:productId"
          element={<ListingProduct />}
        />
        <Route
          path="/category-product/list-product/detail-product/:productId"
          element={<Product />}
        />

        {/* Routing checkout system */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/address" element={<Address />} />
        <Route path="/cart/address/add-address" element={<AddAddress />} />
        <Route
          path="/cart/address/add-address/checkout"
          element={<Checkout />}
        />
        <Route path="/cart/address/checkout" element={<Checkout />} />
        <Route
          path="/cart/address/add-address/checkout/payment"
          element={<Payment />}
        />
        <Route
          path="/cart/address/add-address/checkout/payment/transaction-status"
          element={<TransactionStatus />}
        />
      </Route>
    </>
  )
);

// Render the app using createRoot from react-dom/client
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
