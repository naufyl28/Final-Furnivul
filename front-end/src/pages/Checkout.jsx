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

      <div>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
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
            <diV>
              <Button className="" onClick={() => setOpenModal(true)}>
                Mengerti
              </Button>{" "}
            </diV>
          </Card>

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
    </div>
  );
}

export default Checkout;
