import { Avatar, Button, Card, Dropdown, Navbar } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";

// ... (your existing imports)

function NavbarComponent() {
  const isLoggedIn = JSON.parse(localStorage.getItem("idUser"));
  const profileUser = JSON.parse(localStorage.getItem("image"));
  const nameUser = JSON.parse(localStorage.getItem("name"));
  const emailUser = JSON.parse(localStorage.getItem("email"));

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  let component = "";
  if (isLoggedIn) {
    component = (
      <>
        {" "}
        <div className="flex">
          <div className="mt-2 mx-3 ">{nameUser}</div>
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={profileUser} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{nameUser}</span>
              <span className="block truncate text-sm font-medium">
                {emailUser}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <NavLink to={"/cart"}>
              <span>
                {" "}
                <Dropdown.Item>Cart</Dropdown.Item>
              </span>{" "}
            </NavLink>

            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </>
    );
  } else {
    component = (
      <>
        <div className="flex gap-1 mx-auto">
          <Button className=" ">
            <NavLink to={"/login"} className="">
              <span>Login</span>
            </NavLink>
          </Button>
          <Button>
            <NavLink to={"/register"} className=" text-white ">
              <span> Register</span>
            </NavLink>
          </Button>
        </div>
      </>
    );
  }

  return (
    <div className=" justify-center  my-2  mx-4">
      <Navbar fluid>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img
            src={Logo}
            className=" mr-3  sm:h-9 flex-start"
            style={{ height: 35, width: 38 }}
            alt="Flowbite React Logo"
          />
          <span className="text-2xl font-bold dark:text-white">Furnivul</span>
        </Navbar.Brand>

        <Navbar.Collapse className="">
          <NavLink to={"/"} className="mt-1">
            <Navbar.Link>
              <span>Home</span>
            </Navbar.Link>
          </NavLink>
          <NavLink to={"/category-product"} className="mt-1">
            <Navbar.Link>
              <span>Category</span>
            </Navbar.Link>
          </NavLink>

          <NavLink to={"/article"} className="mt-1">
            <Navbar.Link>
              <span>Article</span>
            </Navbar.Link>
          </NavLink>
        </Navbar.Collapse>

        <div className="">{component}</div>

        <Navbar.Toggle />
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
