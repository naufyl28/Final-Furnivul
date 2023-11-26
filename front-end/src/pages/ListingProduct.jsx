import { Breadcrumb, Button } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ListingProduct() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios("https://clever-gray-pocketbook.cyclic.app/products").then((result) =>
      setData(result.data.data)
    );
  }, []);

  return (
    <>
      <div>
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 px-5 py-3 mx-4 dark:bg-gray-800"
        >
          <Breadcrumb.Item href="/" icon={FaCartShopping}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/category-product">Category</Breadcrumb.Item>
          <Breadcrumb.Item>List Product</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          {/* button dropdown */}
          <div className="mt-8"></div>

          <section className="flex gap-4 mb-4 mx-8 ">
            <div className="justify-start align-center w-full ">
              <h3>Temukan produk yang sesuai dengan kebutuhan Anda!</h3>
              <h4>
                Gunakan Filter berikut untuk mempermudah dalam pencarian Anda!
              </h4>
            </div>
            <div className="flex w-full h-8 justify-end gap-2">
              <Button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-black bg-yellow-300 border border-gray-800 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Termurah
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" d="m1 1 4 4 4-4" />
                </svg>
              </Button>

              <Button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className=" text-black bg-yellow-300 border border-gray-800 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Terdekat
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" d="m1 1 4 4 4-4" />
                </svg>
              </Button>
            </div>
          </section>

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
                  <div className="mt-3">
                    <p>Rp {item.product_price.toLocaleString()},-</p>
                  </div>
                  <Button className="mt-8 text-black bg-yellow-300 border border-gray-800 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <a href="#" className="text-xl">
                      Detail Product
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {/* ==================================== */}

          <Button>
            <NavLink to={"/category-product/list-product/detail-product"}>
              DetailProduct
            </NavLink>
          </Button>
        </div>
        <div>
          <h1>ListingProduct</h1>
        </div>
      </div>
    </>
  );
}
export default ListingProduct;
