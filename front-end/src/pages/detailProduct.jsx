import React, { useState, useEffect } from "react";
import { Breadcrumb, Button } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailProduct() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [activeTab, setActiveTab] = useState("description");

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
  }, [productId]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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
        <Breadcrumb.Item href="/category-product">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="/category-product/list-product">
          List Product
        </Breadcrumb.Item>
        <Breadcrumb.Item>Detail Product</Breadcrumb.Item>
      </Breadcrumb>


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

            {/* Button.Group and Buttons */}
            <div className="mt-4">
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
                <div>
                  <h1 className="mt-6 mb-2 font-bold ">
                    {productData.product_name}
                  </h1>
                  <p className="mt-1 mb-2">{productData.product_description}</p>
                  <p className="mt-4 mb-4">
                    Material: {productData.product_material}
                  </p>
                </div>
              )}

              {activeTab === "review" && (
                <div>
                  <h1 className="mt-6 mb-2 font-bold">Ulasan</h1>
                  {/* Display reviews here */}
                  {reviews.map((review) => (
                    <div key={review.id} className="mt-1 mb-2">
                      <p> {review._userId.fullname}</p>
                      <p>Rating: {review.rating}</p>
                      <p>Ulasan: {review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-2/3 mx-auto">
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

    </>
  );
}

export default DetailProduct;
