function LandingPage() {
  return (
    <>
      <div className="mx-auto">
        <nav className="">
          <div className="container flex items-center justify-between mx-auto px-6 py-5">
            {/* <!-- Desktop --> */}
            <div className="flex items-center">
              <a href="#">
                <img
                  src="assets/images/logo.png"
                  className="mr-20"
                  alt="Furnivul logo"
                />
              </a>
              <div className="block">
                <a className="text-white hover:text-gray-200 mx-4" href="#">
                  {" "}
                  Home{" "}
                </a>
                <a className="text-white hover:text-gray-200 mx-4" href="#">
                  Category
                </a>
                <a className="text-white hover:text-gray-200 mx-4" href="#">
                  Article
                </a>
                <a className="text-white hover:text-gray-200 mx-4" href="#">
                  Our Business
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <a className="text-white hover:text-gray-200 mx-4" href="#">
                {" "}
                Login{" "}
              </a>
              <a
                className="bg-[#ffb703] text-gray-800 font-semibold py-2 px-4 rounded shadow mx-4"
                href="#"
              >
                Register
              </a>
            </div>
          </div>
        </nav>
        <div className="lg:flex justify-center mx-auto lg:my-10 gap-10">
          <div className="relative">
            <img src="assets/images/index1.png" alt="" />
            <div className="absolute bottom-5 left-10 lg:bottom-10 lg:left-20">
              <h1 className="lg:text-3xl lg:tracking-wide text-white text-lg">
                Bagikan momen dengan orang tersayang
              </h1>
              <a
                href="#"
                className="lg:text-3xl text-white tracking-wide text-lg"
              >
                Cek inspirasinya
              </a>
            </div>
          </div>
          <div className="hidden lg:block lg:relative">
            <img src="assets/images/Low-Fi Placeholder.png" alt="" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left">
              <h1 className="text-3xl text-white tracking-wide leading-loose">
                Temukan inspirasimu dirumah
              </h1>
              <a href="#" className="text-3xl text-white tracking-wide">
                Cek inspirasinya
              </a>
            </div>
          </div>
        </div>
        <footer className="bg-[#023047] p-4 text-white">
          <div className="flex w-4/5 border-t-2 border-b-2 mt-20 mx-auto">
            <div className="mx-auto my-8 py-10">
              <img src="assets/images/logo-text.png" alt="" />
              <p className="tracking-widest py-10 font-bold mt-4">
                <span>Furnivul</span> berdiri sejak nenek moyang <br />
                telah lahir menggunakan goresan <br />
                tangan sesepuh, dengan kearifan lokal yang mendunia.
              </p>
            </div>
            <div className="flex justify-center my-8 mx-auto">
              <div className="grid grid-cols-3 gap-32">
                <div className="flex flex-col my-4">
                  <a className="mb-8 w-max" href="#home">
                    Home
                  </a>
                  <a className="my-4" href="#">
                    Bedroom
                  </a>
                  <a className="my-4" href="#">
                    Livingroom
                  </a>
                  <a className="my-4" href="#">
                    Kitchen
                  </a>
                  <a className="my-4" href="#">
                    Diningroom
                  </a>
                </div>
                <div className="flex flex-col my-4">
                  <a className="mb-8 w-max" href="#category">
                    Category
                  </a>
                  <a className="my-4" href="#">
                    Workspace
                  </a>
                  <a className="my-4" href="#">
                    Outdoor
                  </a>
                  <a className="my-4" href="#">
                    Children
                  </a>
                  <a className="my-4" href="#">
                    Accessories
                  </a>
                </div>
                <div className="flex flex-col my-4">
                  <a className="mb-8 w-max" href="#business">
                    Our Business
                  </a>
                  <a className="my-4" href="#">
                    Article
                  </a>
                  <a className="my-4" href="#">
                    Investment
                  </a>
                  <a className="my-4" href="#">
                    Resources
                  </a>
                  <a className="my-4" href="#">
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-4/5 mt-4 mx-auto">
            <p>
              &copy; Full-Stack Web Development - 3rd Team 2023. All rights
              reserved.
            </p>
            <div className="socials flex justify-between">
              <div>
                <a
                  href="https://www.instagram.com/afalupanama/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/naufal-alief/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-youtube"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://github.com/naufalalief" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
export default LandingPage;
