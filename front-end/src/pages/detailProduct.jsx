import { Breadcrumb } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "flowbite-react";
import Swal from "sweetalert2";

function detailProduct() {
  const [datas, setData] = useState([]);
  const [addCart, setAddCart] = useState([]);

  useEffect(() => {
    axios("https://furnivul-web-app-production.up.railway.app/products").then(
      (result) => setData(result.data.data)
    );
  }, []);

  const handleAddToCart = () => {
    const id = JSON.parse(localStorage.getItem("idUser"));
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(id);
    console.log(token);
    axios
      .post(
        `https://furnivul-web-app-production.up.railway.app/users/${id}/cart`,
        {
          product_id: datas._id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        new Swal(
          "Success! add to cart",
          "your product has been add to cart.",
          "success",
          {
            timer: 3000,
          }
        );
        console.log(result);
        setAddCart(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="/" icon={FaCartShopping}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">List Product</Breadcrumb.Item>
        <Breadcrumb.Item>Detail Product</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <h1>detailProduct</h1>
      </div>
      {/* detail product */}
      {/* card lisitng product */}
      <div>
        {datas.map((item) => (
          <div
            key={item._id}
            className="border-2 rounded-xl mt-3 mx-8 justify-center lg:flex lg:flex-row gap-8 p-4 md:flex-row sm:flex-col sm:gap-4 sm:p-2"
          >
            <img
              src={item.product_image}
              style={{ height: 400, width: 600 }}
              alt=""
            />
            <div className="text-2xl mt-8 mb-8 ml-8">
              <p className="font-bold">{item.product_name}</p>
              <hr />

              <div className="mt-3">
                <p>{item.product_category}</p>
              </div>
              <div className="mt-3">
                <p>sudah terjual: {item.product_sold}</p>
              </div>
              <div>description : {item.product_category}</div>
              <div className="mt-3">
                <p>Rp {item.product_price.toLocaleString()},-</p>
              </div>
              <Button className="mt-8 text-black bg-yellow-300 border border-gray-800 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <a href="#" className="text-xl" onClick={handleAddToCart}>
                  <span> add to cart </span>
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* ===================== */}
    </>
  );
}
export default detailProduct;
