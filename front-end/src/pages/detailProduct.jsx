import React, { useState, useEffect } from "react";
import { Breadcrumb, Button } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FaBeer } from "react-icons/fa";

function DetailProduct() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [activeTab, setActiveTab] = useState("description");
  const [discusses, setDiscusses] = useState([]);

  const Avatar = JSON.parse(localStorage.getItem("image"));

  useEffect(() => {
    // Fetch product data
    axios(
      `https://furnivul-web-app-production.up.railway.app/products/${productId}`
    )
      .then((result) => {
        setProductData(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });

    // Fetch reviews data
    axios(`https://furnivul-web-app-production.up.railway.app/reviews`)
      .then((result) => {
        setReviews(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });

    // Fetch discusses data
    axios(`https://furnivul-web-app-production.up.railway.app/discusses`)
      .then((result) => {
        setDiscusses(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [productId]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 ml-3 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="/" icon={FaCartShopping}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/category-product">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="/category-product/list-product">
          List Product
        </Breadcrumb.Item>
        <Breadcrumb.Item>Detail Product</Breadcrumb.Item>
      </Breadcrumb>
      <div className="mx-6  ">
        {productData ? (
          <div className="flex mt-6 mx-4">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold mb-4">
                {productData.product_name}
              </h1>
              <p className="mb-2 text-lg">Rating: {productData.product_rate}</p>
              <p className="mb-2 text-lg">Sold: {productData.product_sold}</p>

              <p className="mb-4 text-2xl font-bold">
                Price: Rp {productData.product_price.toLocaleString()},-
              </p>
              <Link to={`/cart`}>
                {" "}
                <Button>
                  Checkout &nbsp;
                  <FaCartShopping />
                </Button>
              </Link>

              {/* Button.Group and Buttons */}
              <div className="mt-6 w-full ">
                <Button.Group>
                  <Button
                    color={activeTab === "description" ? "blue" : "gray"}
                    onClick={() => handleTabChange("description")}
                  >
                    Deskripsi
                  </Button>
                  <Button
                    color={activeTab === "review" ? "blue" : "gray"}
                    onClick={() => handleTabChange("review")}
                  >
                    Ulasan
                  </Button>
                  <Button
                    color={activeTab === "discussion" ? "blue" : "gray"}
                    onClick={() => handleTabChange("discussion")}
                  >
                    Diskusi
                  </Button>
                </Button.Group>
              </div>
              {/* End of Button.Group and Buttons */}

              {/* Content based on activeTab */}
              <div className="mt-4">
                {activeTab === "description" && (
                  <div className="">
                    <h1 className="mt-6 mb-2 font-bold ">
                      {productData.product_name}
                    </h1>
                    <div className="font-bold">Deskripsi :</div>
                    <p className="mt-1 mb-2">
                      {productData.product_description}
                    </p>
                    <div className="font-bold"> Material:</div>
                    <p className=" mb-4">{productData.product_material}</p>
                  </div>
                )}

                {activeTab === "review" && (
                  <div>
                    <h1 className="mt-6 mb-2 font-bold">Ulasan</h1>
                    {/* Display reviews here */}
                    {reviews.map((review) => (
                      <div key={review.id} className="mt-1 mb-2 space-y-2">
                        <div className="flex items-center gap-2">
                          {" "}
                          <img
                            src={Avatar}
                            className="w-10 h-10 rounded-full"
                          />
                          {review._userId.fullname}
                        </div>
                        <p>Rating: {review.rating}</p>
                        <p>Ulasan: {review.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-2/3 mx-auto ">
                <img
                  src={productData.product_image}
                  alt={productData.product_name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        {activeTab === "discussion" && (
          <div className="mx-4 mb-8">
            <h1 className=" mb-2  font-bold">Diskusi</h1>
            {/* Display reviews here */}
            {discusses.map((discusses) => (
              <div key={discusses.id} className=" mb-2">
                <p>Anonim "{discusses.comment}"</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default DetailProduct;
