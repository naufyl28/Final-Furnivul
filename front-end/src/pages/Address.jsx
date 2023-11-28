import React, { useEffect, useState } from "react";
import { Breadcrumb, Button } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

function Address() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simulasikan ID pengguna yang login (ganti dengan cara yang sesuai di aplikasi Anda)
    const userId = "65637386175952881b8a0e78";

    // Panggil API sesuai ID pengguna
    axios(`https://furnivul-web-app-production.up.railway.app/users/${userId}`)
      .then((result) => {
        setUserData(result.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <>
      <div className="mx-auto overflow-hidden">{/* Tampilkan data di sini */}</div>

      <div className="p-8">
        <a
          className="text-gray-900 bg-white w-full border border-yellow-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm p-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          style={{ display: "block", textAlign: "center" }}
        >
          <Link to={"add-address"}>Tambah alamat baru</Link>
        </a>
      </div>

      <div>
        <div className="my-4 flex items-center max-w-screen-xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover-bg-gray-700">
          {/* Tampilkan data di sini */}
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
    </>
  );
}

function AddressPage() {
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
        <NavLink to={"/cart/address/add-address/checkout"}>
          {" "}
          <span>payment</span>
        </NavLink>
      </Button>
      <Address />
    </div>
  );
}

export default AddressPage;
