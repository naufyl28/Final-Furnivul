import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";

function navbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img

          src={Logo}
          className="mr-3 mt-8 h-6 sm:h-9"

          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Furnivul
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2"></div>
      <Navbar.Collapse>
        <NavLink to={"/"} className="nav-link">
          <Navbar.Link>
            {" "}
            <a>Home</a>
          </Navbar.Link>
        </NavLink>{" "}
        <NavLink to={"/category-product"} className="nav-link">
          <Navbar.Link>
            <a>Category</a>{" "}
          </Navbar.Link>
        </NavLink>
        <NavLink to={"/our-business"} className="nav-link">
          {" "}
          <Navbar.Link>
            <a>Our Business</a>{" "}
          </Navbar.Link>
        </NavLink>
        <NavLink to={"/article"} className="nav-link">
          <Navbar.Link>
            <a>Article </a>{" "}
          </Navbar.Link>
        </NavLink>{" "}
      </Navbar.Collapse>
      <div className="flex gap-2 md:order-3">
        {" "}
        <NavLink to={"/login"}>
          {" "}
          <Button>
            <a>Login</a>{" "}
          </Button>
        </NavLink>
        <NavLink to={"/register"}>
          {" "}
          <Button>
            <a>Register</a>{" "}
          </Button>
        </NavLink>
      </div>

      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar
            alt="User settings"
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded
          />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">duo naufal</span>
          <span className="block truncate text-sm font-medium">
            duoNaufal@gmail.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <NavLink to={"/cart"}>
          <a>
            {" "}
            <Dropdown.Item>Cart</Dropdown.Item>
          </a>{" "}
        </NavLink>

        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>

      <Navbar.Toggle />
    </Navbar>
  );
}

export default navbar;
