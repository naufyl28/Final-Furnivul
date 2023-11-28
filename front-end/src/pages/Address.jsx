import React, { useEffect, useState } from "react";
import { Breadcrumb, Button } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Footer() {
  const [addressData, setAddressData] = useState(
    JSON.parse(localStorage.getItem("addressData"))
  );

  useEffect(() => {
    if (addressData) {
      document.getElementById("display-full-name").textContent =
        addressData.fullName;
      document.getElementById(
        "display-address-details"
      ).textContent = ` email ${addressData.email}, telephone ${addressData.telephone}, RT ${addressData.rt} RW ${addressData.rw}, Kec. ${addressData.kecamatan}, ${addressData.provinsi}, ${addressData.kodePos}`;
    }
  }, [addressData]);

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch(
        "https://6524bed5ea560a22a4ea0e3b.mockapi.io/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data from the API");
      }

      const data = await response.json();

      console.log("Data from API:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <>
      <div className="mx-auto overflow-hidden">{}</div>

      <div className="p-8">
        <a
          href="add-address"
          className="text-gray-900 bg-white w-full border border-yellow-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm p-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          style={{ display: "block", textAlign: "center" }}
        >
          Tambah alamat baru
        </a>
      </div>

      <div>
        <div className="my-4 flex items-center max-w-screen-xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover-bg-gray-700">
          {}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <button
          type="button"
          className="justify-center items-center text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:focus:ring-yellow-900"
        >
          <a href="address/checkout">Checkout</a>
        </button>
      </div>

      <div className="flex justify-center items-center">
        <button
          id="verifikasiButton"
          type="button"
          className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          style={{ display: "none" }}
        >
          Verifikasi Pembayaran
        </button>
      </div>
      <Address />
    </>
  );
}

function Address() {
  return (
    <div>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="#" icon={FaCartShopping}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Cart</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Address</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Address</h1>
      <Button className="">
        <NavLink to={"checkout"}>
          {" "}
          <span>payment</span>
        </NavLink>
      </Button>
    </div>
  );
}

export default Footer;
