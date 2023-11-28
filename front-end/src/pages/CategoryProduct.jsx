import { Button, Card } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";

function CategoryProduct() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios(
      "https://furnivul-web-app-production.up.railway.app/product-categories"
    ).then((result) => {
      setData(result.data.data);
      // console.log(result.data.data);
    });
  }, []);

  return (
    <div className="">
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800 ml-1"
      >
        <Breadcrumb.Item href="#" icon={FaCartShopping}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
      </Breadcrumb>

      <div className="my-3 ml-6 text-3xl font-semibold">
        <h1>Category Product</h1>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-4 mb-4">
        {datas.map((datas) => (
          <Card key={datas._id} className=" mt-3  mx-2">
            <img
              src={datas.image_url}
              alt="product"
              style={{ height: 200 }}
              className=" object-cover rounded-t-md"
            />
            <div className="font-semibold text-xl">
              <p>{datas.category}</p>
            </div>
            <div>
              <p>{datas.description}</p>
            </div>
            <div>
              <NavLink to={"/category-product/list-product"}>
                <Button>
                  <a>Listing Product</a>
                </Button>
              </NavLink>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default CategoryProduct;
