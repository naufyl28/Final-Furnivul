import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Label, Select } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Checkout() {
  const [courierData, setCourierData] = useState([]);
  const [selectedCourier, setSelectedCourier] = useState("");

  useEffect(() => {
    axios(
      "https://furnivul-web-app-production.up.railway.app/courier-services",
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
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
  }, []);

  const selectCourier = (event) => {
    setSelectedCourier(event.target.value);
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
        <Breadcrumb.Item href="#">Checkout</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Checkout</h1>
      <Button className="">
        <NavLink to={"payment"}>
          <span>payment</span>
        </NavLink>
      </Button>
      <div>
        <Card className="w-full">
          <h1 className="text-2xl font-semibold">Address</h1>
          <div className="text-md font-semibold my-3 space-y-3">
            {/* ... other content ... */}
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
        </Card>
      </div>
    </div>
  );
}

export default Checkout;
