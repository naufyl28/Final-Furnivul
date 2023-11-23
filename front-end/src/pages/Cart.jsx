import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Modal } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Cart() {
  const [datas, setData] = useState({ message: "", data: [] });
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios("https://clever-gray-pocketbook.cyclic.app/products")
      .then((result) => {
        if (Array.isArray(result.data.data)) {
          const initialData = result.data.data.map((item) => ({
            ...item,
            quantity: 1,
          }));
          setData({ message: "", data: initialData });
        } else {
          console.error("API response data is not an array:", result.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleIncrement = (index) => {
    const updatedData = [...datas.data];
    updatedData[index].quantity = (updatedData[index].quantity || 0) + 1;
    setData({ ...datas, data: updatedData });
  };

  const handleDecrement = (index) => {
    const updatedData = [...datas.data];

    if ((updatedData[index].quantity || 0) === 1) {
      setDeleteIndex(index);
    } else {
      updatedData[index].quantity = Math.max(
        (updatedData[index].quantity || 0) - 1,
        0
      );
      setData({ ...datas, data: updatedData });
    }
  };

  const handleDeleteItem = () => {
    console.log("Delete Item Function");
    if (deleteIndex !== null) {
      const updatedData = datas.data.filter(
        (_, index) => index !== deleteIndex
      );
      setData({ ...datas, data: updatedData });
      setDeleteIndex(null);
      setOpenModal(false);
    }
  };

  return (
    <>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item key="home" href="/" icon={FaCartShopping}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item key="cart" href="#" className="">
          Cart
        </Breadcrumb.Item>
      </Breadcrumb>
      <Button className="">
        <NavLink to={"address"}> Address </NavLink>
      </Button>

      <div className="mt-3 mx-8 justify-center">
        {datas.data.map((item, index) => (
          <div key={index} className="flex items-center">
            <img
              src={item.product_image}
              style={{ height: 200, width: 200 }}
              alt=""
            />
            <div className="text-1xl ml-2 flex-grow">
              <div className="flex justify-between items-center">
                <p className="font-bold">{item.product_name}</p>
                <div className="flex items-center">
                  <button
                    style={{ fontSize: "1.5em", padding: "0.2em 0.5em" }}
                    onClick={() => handleDecrement(index)}
                  >
                    -
                  </button>
                  <span
                    className="mx-2 font-bold"
                    style={{ fontSize: "1.2em" }}
                  >
                    {item.quantity || 0}
                  </span>
                  <button
                    style={{ fontSize: "1.5em", padding: "0.2em 0.5em" }}
                    onClick={() => handleIncrement(index)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <p>{item.product_category}</p>
              </div>
              <div className="mt-3 ">
                <p>Rp {item.product_price},-</p>
                <span
                  className="mx-2 font-bold flex items-center mt-6 "
                  style={{ fontSize: "1.2em" }}
                >
                  {item.quantity || 0} <p className="ml-3"> Barang </p>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {/* ... */}
        </table>

        <div className="flex flex-wrap justify-between p-3 px-8">
          <form>{/* ... */}</form>
          <div className="checkout-container">
            <button
              type="button"
              className="text-black custom-background font-semibold bg-yellow-300 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
              id="checkout-button"
            >
              <a href="cart/address">Checkout</a>
            </button>
          </div>
        </div>
      </div>

      <Modal
        show={openModal || deleteIndex !== null}
        onClose={() => {
          setOpenModal(false);
          setDeleteIndex(null);
        }}
      >
        <Modal.Header>Delete Item</Modal.Header>
        <Modal.Body>
          {deleteIndex !== null ? (
            <p>Are you sure you want to delete this item?</p>
          ) : (
            <p>Quantity will be reduced to 0. Are you sure?</p>
          )}
        </Modal.Body>
        <Modal.Footer >
          <Button onClick={handleDeleteItem}>Yes</Button>
          {/* <Button type="button" onClick={() => setOpenModal(false)}>
            No
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
