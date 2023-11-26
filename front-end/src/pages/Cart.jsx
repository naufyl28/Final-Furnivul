// Impor dependensi
import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Modal } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Button as FlowbiteButton } from "flowbite-react";

function Cart() {
  // Variabel state
  const [datas, setData] = useState({ message: "", data: [] });
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [voucherModal, setVoucherModal] = useState(false);
  const [voucherData, setVoucherData] = useState(null);

const fetchVoucherData = () => {
  axios
    .get("https://clever-gray-pocketbook.cyclic.app/voucher", {
      headers: {
        Authorization: "Bearer YOUR_ACCESS_TOKEN",
      },
    })
    .then((result) => {
      console.log("Data Voucher:", result.data);
      setVoucherData(result.data);
    })
    .catch((error) => {
      console.error("Error mengambil data voucher:", error);
      if (error.response) {
        console.error("Detail respons:", error.response.data);
      }
    });
};


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
          console.error("Data respons API bukan array:", result.data.data);
        }
      })
      .catch((error) => {
        console.error("Error mengambil data:", error);
      });

    fetchVoucherData();
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
    console.log("Fungsi Hapus Item");
    if (deleteIndex !== null) {
      const updatedData = datas.data.filter(
        (_, index) => index !== deleteIndex
      );
      setData({ ...datas, data: updatedData });
      setDeleteIndex(null);
      setOpenModal(false);
    }
  };

  const handleVoucherClick = () => {
    setVoucherModal(!voucherModal);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  const calculateTotalPrice = () => {
    return datas.data.reduce(
      (total, item) => total + item.quantity * item.product_price,
      0
    );
  };

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        aria-label="Contoh breadcrumb dengan latar belakang solid"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item key="home" href="/" icon={FaCartShopping}>
          Beranda
        </Breadcrumb.Item>
        <Breadcrumb.Item key="cart" href="#" className="">
          Keranjang
        </Breadcrumb.Item>
      </Breadcrumb>

      {/* Tombol Alamat */}
      <Button className="">
        <NavLink to={"address"}> Alamat </NavLink>
      </Button>

      {/* Daftar Produk */}
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
                <p> {formatCurrency(item.product_price)},-</p>
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

      {/* Modal Voucher */}
      <Modal show={voucherModal} onClose={() => setVoucherModal(false)}>
        <Modal.Header>Voucher </Modal.Header>
        <Modal.Body>
          {/* Tampilkan data voucher */}
          {voucherData ? (
            <>
              <p>Kode Voucher: {voucherData.code}</p>
              <p>Diskon: {voucherData.discount}</p>
            </>
          ) : (
            <p>Mengambil data voucher...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          {/* Tombol modal voucher */}
          <FlowbiteButton onClick={() => setVoucherModal(false)}>
            Tutup
          </FlowbiteButton>
        </Modal.Footer>
      </Modal>

      {/* Bagian Checkout */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {/* ... */}
        </table>

        {/* Tampilan Total */}
        <div className="mb-4 text-3xl font-bold text-center">
          Total: {formatCurrency(calculateTotalPrice())}
        </div>

        {/* Tombol Checkout */}
        <div className="flex flex-wrap justify-between p-3 px-8">
          {/* Tombol Voucher */}
          <div className="checkout-container">
            <FlowbiteButton
              type="button"
              className="text-black custom-background font-semibold bg-blue-500 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
              id="voucher-button"
              onClick={handleVoucherClick}
            >
              Voucher
            </FlowbiteButton>
          </div>
          {/* Tombol Checkout */}
          <FlowbiteButton
            type="button"
            className="text-black custom-background font-semibold bg-yellow-300 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
            id="checkout-button"
          >
            <a href="cart/address">Checkout</a>
          </FlowbiteButton>
        </div>
      </div>

      {/* Modal Hapus Item */}
      <Modal
        show={openModal || deleteIndex !== null}
        onClose={() => {
          setOpenModal(false);
          setDeleteIndex(null);
        }}
      >
        <Modal.Header>Hapus Item</Modal.Header>
        <Modal.Body>
          {deleteIndex !== null ? (
            <p>Apakah Anda yakin ingin menghapus item ini?</p>
          ) : (
            <p>Jumlah akan dikurangi menjadi 0. Apakah Anda yakin?</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <FlowbiteButton onClick={handleDeleteItem}>Ya</FlowbiteButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;