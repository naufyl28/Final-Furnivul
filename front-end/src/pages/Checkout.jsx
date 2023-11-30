import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Label, Modal, Select } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import axios from "axios";

const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

function Checkout(props) {
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
  const productData = props?.location?.state?.cart || [];

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

  // Log productData and the first item
  console.log("Product Data:", productData);
  console.log("First Product:", productData[0]);

  return (
    <div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
      <Card className="w-full">
        <Card>
          <h1 className="text-2xl font-semibold">
            Tingkatkan keamanan akun anda!
          </h1>
          <p>
            Tingkatkan keamanan akun anda dengan mengaktifkan autentikasi dua
            faktor. Dengan menggunakan autentikasi dua faktor dapat memberikan
            proteksi terhadap akun anda. Untuk lebih lengkapnya klik disini!.
          </p>
          <div>
            <Button className="" onClick={() => setOpenModal(true)}>
              Mengerti
            </Button>{" "}
          </div>
        </Card>

        <h1 className="text-2xl font-semibold">Address</h1>

        {/* Display additional data from localStorage */}
        <div className="text-md font-semibold my-3 space-y-3">
          <p>Phone: {phone}</p>
          <p>Province: {province}</p>
          <p>District: {district}</p>
          <p>Subdistrict: {subdistrict}</p>
          <p>Zipcode: {zipcode}</p>
        </div>

        {/* Display product data */}
        <div className="mt-3 mx-8 justify-center">
          {productData.map((item, index) => (
            <div key={index} className="flex items-center">
              <img
                src={item.product_image}
                style={{ height: 200, width: 200 }}
                alt=""
              />
              <div className="text-1xl ml-2 flex-grow">
                <div className="flex justify-between items-center">
                  <p className="font-bold">{item.product_name}</p>
                </div>
                <div className="mt-3">
                  <p>{item.product_category}</p>
                </div>
                <div className="mt-3">
                  <p>{formatCurrency(item.product_price)},-</p>
                  <span
                    className="mx-2 font-bold flex items-center mt-6"
                    style={{ fontSize: "1.2em" }}
                  >
                    {item.quantity || 0} <p className="ml-3"> Barang </p>
                  </span>
                </div>
              </div>
            </div>
          ))}
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
            Total: <span className="font-semibold">Rp. 100.000</span>
          </div>
          <div>
            <Button className="">
              <NavLink to={"payment"}>
                <span>payment</span>
              </NavLink>
            </Button>
          </div>
        </Card>
      </Card>
    </div>
  );
}

export default Checkout;
