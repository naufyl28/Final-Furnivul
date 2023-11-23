import React from "react";
import { Breadcrumb, Button, Card } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Cart() {
  return (
    <>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="/" icon={FaCartShopping}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#" className="">
          Cart
        </Breadcrumb.Item>
      </Breadcrumb>
      <Button className="">
        <NavLink to={"address"}> Address </NavLink>
      </Button>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
          <tbody>
            <tr
              id="container"
              className="bg-white border-b dark-bg-gray-800 dark-border-gray-700 hover:bg-gray-50 dark-hover-bg-gray-600"
            >
              {/* ... */}
            </tr>
          </tbody>
        </table>

        <div className="flex flex-wrap justify-between p-3 px-8">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="flex items-center">
              <input
                type="search"
                id="default-search"
                className="block text-sm text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark-border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-ring-blue-500 dark:focus-border-blue-500"
                placeholder="Masukkan Voucher Anda"
                required
              />
              <button
                type="submit"
                className="text-black custom-background bg-yellow-300 focus-ring-4 focus-outline-none focus-ring-blue-300 font-bold rounded-r-lg text-sm px-4 py-2 dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
                style={{ display: "flex", alignItems: "center" }}
              >
                Voucher
                {/* <img
                  src="https://imgur.com/a/k4HbEzE"
                  alt="Voucher"
                  style={{ marginRight: "4px", marginLeft: "8px" }}
                /> */}
              </button>
            </div>
          </form>
          <div className="checkout-container">
            <button
              type="button"
              className="text-black custom-background font-semibold bg-yellow-300 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
              id="checkout-button"
            >
              <svg
                className="w-3.5 h-3.5 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="var(--Fourth-Furnivul, #8ECAE6)"
                viewBox="0 0 18 21"
              >
                {/* ... */}
              </svg>
              <a href="cart/address">Checkout</a>
            </button>
          </div>
        </div>
      </div>

      <div
        id="popup-modal"
        tabIndex="-1"
        className="fixed top-0 left-0 w-full h-full items-center justify-center z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0"
      >
        {/* ... */}
      </div>
    </>
  );
}

export default Cart;
