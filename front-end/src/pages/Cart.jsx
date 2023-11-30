import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Label, Modal, Select } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Checkout() {
  const [openModal, setOpenModal] = useState(false);
  const [courierData, setCourierData] = useState([]);
  const [selectedCourier, setSelectedCourier] = useState("");
  const token = JSON.parse(localStorage.getItem("token"));

  // Additional data from localStorage
  const phone = JSON.parse(localStorage.getItem("phone"));
  const province = JSON.parse(localStorage.getItem("province"));
  const district = JSON.parse(localStorage.getItem("district"));
  const subdistrict = JSON.parse(localStorage.getItem("subdistrict"));
  const zipcode = JSON.parse(localStorage.getItem("zipcode"));

  // Additional product data from localStorage
  const productData = JSON.parse(localStorage.getItem("productData")) || [];

  useEffect(() => {
    axios(
      "https://furnivul-web-app-production.up.railway.app/courier-services",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((result) => {
        setCourierData(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching courier data:", error);
        console.log("Error response data:", error.response.data);
      });
  }, [token]);

  const selectCourier = (event) => {
    setSelectedCourier(event.target.value);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  const calculateTotalPrice = () => {
    return productData.reduce(
      (total, item) => total + (item.quantity || 0) * (item.product_price || 0),
      0
    );
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    // For example, you can send an API request to finalize the order
    console.log("Checkout logic goes here!");
  };

  return (
    <>
      <Breadcrumb
        aria-label="Contoh breadcrumb dengan latar belakang solid"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item key="home" href="/" icon={FaCartShopping}>
          Beranda
        </Breadcrumb.Item>
        <Breadcrumb.Item key="checkout" href="#" className="">
          Checkout
        </Breadcrumb.Item>
      </Breadcrumb>

      <div>
        <Card className="w-full">
          <h1 className="text-2xl font-semibold">Address</h1>

          {/* Display additional data from localStorage */}
          <div className="text-md font-semibold my-3 space-y-3">
            <p>Phone: {phone}</p>
            <p>Province: {province}</p>
            <p>District: {district}</p>
            <p>Subdistrict: {subdistrict}</p>
            <p>Zipcode: {zipcode}</p>
          </div>

          <div className="max-w-sm">
            <div className="mb-2 block">
              <Label htmlFor="selectCourier" value="Select your courier" />
            </div>
            <Select
              id="selectCourier"
              required
              onChange={selectCourier}
              value={selectedCourier}
            >
              <option value="" disabled>
                Select your courier
              </option>
              {courierData.map((data) => (
                <option key={data._id} value={data.name}>
                  {`${data.name} - ${data.description} (${data.etd}, Cost: ${data.cost})`}
                </option>
              ))}
            </Select>
          </div>

          <Card className="mt-3">
            <div>
              Total:{" "}
              <span className="font-semibold">
                {formatCurrency(calculateTotalPrice())}
              </span>
            </div>
            <div>
              <Button className="" onClick={handleCheckout}>
                <span>Checkout</span>
              </Button>
            </div>
          </Card>
        </Card>
      </div>
    </>
  );
}

export default Checkout;
