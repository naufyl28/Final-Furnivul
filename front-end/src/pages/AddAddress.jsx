// AddAddress.jsx
import React, { useState } from "react";
import { Breadcrumb, Button, Card, TextInput } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AddAddress() {
  const [addressData, setAddressData] = useState({
    fullName: "",
    phone: "",
    province: "",
    country: "",
    district: "",
    zipCode: "",
  });

  const handleInputChange = (name, value) => {
    setAddressData({
      ...addressData,
      [name]: value,
    });
  };

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
        <Breadcrumb.Item href="#">Add Address</Breadcrumb.Item>
      </Breadcrumb>

      <Card className="w-full">
        <h1 className="text-2xl font-semibold">Add Address</h1>
        <div className="text-3xl font-semibold my-3 space-y-3">
          <div>
            <TextInput
              label="Full name"
              placeholder="Full name"
              value={addressData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
            />
          </div>

          <div>
            <TextInput
              label="Phone"
              placeholder="Phone"
              value={addressData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>
          <div>
            <TextInput
              label="Province"
              placeholder="Province"
              value={addressData.province}
              onChange={(e) => handleInputChange("province", e.target.value)}
            />
          </div>
          <div>
            <TextInput
              label="Country"
              placeholder="Country"
              value={addressData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
            />
          </div>
          <div>
            <TextInput
              label="District"
              placeholder="District"
              value={addressData.district}
              onChange={(e) => handleInputChange("district", e.target.value)}
            />
          </div>
          <div>
            <TextInput
              label="Zip code"
              placeholder="Zip code"
              value={addressData.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
            />
          </div>
        </div>
        <Button className="">
          <Link
            to={`/cart/address?${new URLSearchParams(addressData).toString()}`}
          >
            <span> Add Address</span>
          </Link>
        </Button>
      </Card>
    </div>
  );
}

export default AddAddress;
