import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

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
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    data &&
    data.length > 0 && (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
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
                <div className="flex lg:flex-col flex-col p-4 bg-[#023047] border border-black rounded-xl mx-auto my-2 w-[300px] lg:w-[350px]">
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
