import { Breadcrumb, Button, Card, Label, Select } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Checkout() {
  // const [courier, setCourier] = useState([]);

  // useEffect(() => {
  //   axios(
  //     "https://furnivul-web-app-production.up.railway.app/courier-services/"
  //   )
  //     .then((result) => {
  //       setCourier(result.data.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching courier data:", error);
  //     });
  // }, []);

  // console.log(courier);

  // const selectCourier = (event) => {
  //   event.preventDefault();
  //   setCourier(event.target.value);
  // };

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
          {" "}
          <span>payment</span>{" "}
        </NavLink>
      </Button>
      <div>
        <Card className="w-full">
          <h1 className="text-2xl font-semibold">Address</h1>
          <div className="text-md font-semibold my-3 space-y-3">
            <p>Tingkatkan keamanan akun anda!</p>
            <p>
              Tingkatkan keamanan akun anda dengan mengaktifkan autentikasi dua
              faktor. Dengan menggunakan autentikasi dua faktor dapat memberikan
              proteksi terhadap akun anda. Untuk lebih lengkapnya klik disini!.
            </p>
            <Button className="">Mengerti</Button>
          </div>
          select courier
          <div className="max-w-sm">
            <div className="mb-2 block">
              <Label htmlFor="selectCourier" value="Select your courier" />
            </div>
            {/* {courier.map((data) => (
              <div key={data._id}>
                <Select
                  id="countries"
                  required
                  onClick={selectCourier}
                  value={data.courier_name}
                >
                  <option>{data.courier_name}</option>
                </Select>
              </div>
            ))} */}
            <Select id="countries" required>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Checkout;
