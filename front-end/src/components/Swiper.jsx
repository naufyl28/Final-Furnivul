import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import arrowright from "../assets/svg/arrow-right.svg";
export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        const data = response.data.data;
        setData(data);
        console.log(data); // Log the data to check its structure
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    data &&
    data.length > 0 && (
      <Swiper
        spaceBetween={10}
        slidesPerView={5} // Adjust slidesPerView based on the number of slides
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item, index) => {
          let price = item.product_price;
          let formattedPrice = price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          });
          return (
            <SwiperSlide key={index}>
              <div className="swiper-slide">
                <div className="flex lg:flex-col flex-col p-4 bg-[#023047] border border-black rounded-xl mx-auto w-[400px]">
                  <img
                    src={item.product_image}
                    alt="living room"
                    className="flex bg-white mx-auto rounded-xl w-[200px] h-[182px] object-contain"
                  />
                  <div className="my-2 text-white">
                    <h3 className="text-lg font-semibold my-4">
                      {item.product_name.slice(0, 30) + "..."}
                    </h3>
                    <p className="text-base font-medium my-4">
                      {item._categoryId.category}
                    </p>
                    <h3 className="text-base font-medium my-4">
                      {formattedPrice}
                    </h3>
                    <p className="text-base font-medium my-4">
                      Tersedia banyak pilihan
                    </p>
                    {/* Atur disini */}
                    <a
                      href="/pages/detailproduct/detailproduc-desc.html?id=${
              product.id
            }"
                      className="bg-[#ffb703] mt-8 py-2 px-4 rounded-xl border border-black text-[#023047] shadow w-max flex items-center gap-6 ml-auto"
                      data-product-id={item.id}
                    >
                      <span>Detail Product</span>
                      <img src={arrowright} alt="" />
                    </a>
                    {/* Batas */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
  );
};
