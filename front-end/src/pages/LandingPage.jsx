import index1 from "../assets/images/index1.png";
import lowfi1 from "../assets/images/Low-Fi Placeholder.png";
import vector from "../assets/svg/Vector.svg";
import about from "../assets/images/about.png";
import arrow from "../assets/svg/arrow-right.svg";
import lowfi3 from "../assets/images/Low-Fi Placeholder 3.png";
import lowfi2 from "../assets/images/Low-Fi Placeholder 2.png";
import Swiper from "../components/Swiper";
import React from "react";
import { Button } from "flowbite-react";

function LandingPage() {
  return (
    <div className="container-fluid overflow-hidden mx-4">
      <div className=" lg:flex justify-center m-10 lg:mx-auto lg:my-10 lg:rounded-none lg:shadow-none rounded-lg shadow">
        <div className="flex gap-20">
          <div className="relative">
            <img src={index1} className="rounded-md" alt="" />

            <div className="absolute bottom-5 left-4 lg:bottom-10 lg:left-20">
              <h1 className="lg:text-3xl lg:tracking-wide text-white text-lg">
                Bagikan momen dengan orang tersayang
              </h1>
              <a
                href="Article"
                className="lg:text-3xl text-white tracking-wide text-lg"
              >
                Cek inspirasinya &gt;
              </a>
            </div>
          </div>
          <div className="hidden lg:block lg:relative">
            <div className="flex items-center justify-center">
              <img src={lowfi1} className="rounded-md" alt="" />
              <div className="absolute flex flex-col justify-center mx-4">
                <h1 className="text-3xl my-4 px-4 mx-5 text-white font-bold tracking-widest leading-loose">
                  Temukan <br />
                  inspirasimu <br />
                  dirumah
                </h1>
                <h2 className="font-semibold text-sm my-4 px-4 mx-5 text-[#ffb703]">
                  Promo khusus untuk member Furnivul, <br />
                  Daftar sekarang!
                </h2>
                <a
                  href="/register"
                  className="text-3xl my-4 px-4 mx-auto text-white tracking-wide"
                >
                  <img src={vector} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid lg:flex justify-between lg:px-28 m-10 lg:mx-auto lg:my-10 gap-10 lg:rounded-none lg:shadow-none rounded-lg shadow">
        <div className="flex flex-col lg:flex-row mx-auto lg:gap-[120px]">
          <img className="lg:rounded-l-lg" src={about} alt="" />
          <div className="flex flex-col font-semibold lg:p-20 p-4">
            <p className="text-justify tracking-wide">
              <span className="text-[#ffb703]">Furnivul</span> berdiri sejak
              nenek moyang telah lahir menggunakan goresan
              <br />
              tangan sesepuh, dengan kearifan lokal yang mendunia disamping
              <br />
              keadaan manusia yang telah berprasangka baik ke semua.
            </p>
            <Button
              href="category-product"
              className="bg-[#ffb703] text-gray-800 font-semibold rounded-xl border-blue-900 shadow my-4 w-fit "
            >
              <span>Lihat Kategori</span> &nbsp;
              <img src={arrow} alt="" />
            </Button>
          </div>
        </div>
      </div>
      <div className="container-fluid lg:flex justify-center m-10 lg:mx-auto lg:my-10 gap-10 lg:rounded-none lg:shadow-none rounded-lg shadow">
        <div className="flex mx-auto gap-20">
          <div className="hidden lg:block lg:relative">
            <img src={lowfi3} className="rounded-md" alt="" />
          </div>
          <div className="relative">
            <img src={lowfi2} className="rounded-md" alt="" />
            <div className="absolute bottom-5 left-4 lg:bottom-10 lg:left-20">
              <h1 className="lg:text-3xl lg:tracking-wide text-white text-lg">
                Bawa kehangatan di ruang keluarga
              </h1>
              <a
                href="Article"
                className="lg:text-3xl text-white tracking-wide text-lg"
              >
                Cek inspirasinya &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Categ */}
      <div className="container-fluid overflow-x-hidden lg:flex lg:flex-col m-10 lg:mx-auto lg:my-10 gap-10 lg:rounded-none lg:shadow-none rounded-lg shadow">
        <div className="flex flex-col gap-10">
          <div className=" mx-4 p-4 lg:mx-56">
            <h1 className="font-semibold text-2xl p-4 mx-auto lg:text-5xl">
              Produk Teratas
            </h1>
            <a href="#" className="text-blue-500 p-4 hover:text-blue-700">
              Lihat Selengkapnya &gt;
            </a>
          </div>
          <div className="swiper-container ">
            <Swiper />
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
