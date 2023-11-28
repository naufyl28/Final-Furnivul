import { Footer } from "flowbite-react";
import Logo from "../assets/images/logo.png";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function Component() {
  return (
    <Footer container>
      <div className="w-full mx-4">
        <div className="grid lg:grid-cols-3  w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-4">
            <Footer.Brand
              href="#"
              src={Logo}
              alt="Furnivul Logo"
              name="Furnivul"
            />
            <div className="mt-8">
              <span>Furnivul</span> berdiri sejak nenek moyang <br></br> telah
              lahir menggunakan goresan tangan <br></br> sesepuh, dengan
              kearifan lokal yang mendunia.{" "}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Home" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Kitchen</Footer.Link>
                <Footer.Link href="#">Bed Room</Footer.Link>
                <Footer.Link href="#">Living Room</Footer.Link>
                <Footer.Link href="#">Dining Room</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Category" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Work Space</Footer.Link>
                <Footer.Link href="#">OutDoor</Footer.Link>
                <Footer.Link href="#">Child Room</Footer.Link>
                <Footer.Link href="#">Accesories</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Our Business" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Article</Footer.Link>
                <Footer.Link href="#">Investment</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex justify-center gap-4 sm:items-center sm:flex-end">
          <Footer.Copyright
            href="#"
            by="Furnivul™  - 3rd Team @Skilvul 2023. All rights reserved"
            year={2023}
          />
          <div className="mt-4  flex gap-2 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Component;
