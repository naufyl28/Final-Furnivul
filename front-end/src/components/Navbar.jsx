import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";

function navbar() {
  // const isLoggedIn = JSON.parse(localStorage.getItem("idUser")); // // true or false

  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem("idUser");
  //   window.location.reload();
  // };

  // let component = "";
  // if (isLoggedIn) {
  //   component = (
  //     <>
  //       <div className="text-center">
  //         <Dropdown>
  //           <Dropdown.Toggle id="dropdown-basic">Account&nbsp;</Dropdown.Toggle>

  //           <Dropdown.Menu>
  //             <div className="text-center mx-4">
  //               <img
  //                 height={50}
  //                 className="text-center justify-center"
  //                 src={isLoggedIn.img}
  //               />

  //               <h5 className="ms-auto text-center">{isLoggedIn.name}</h5>

  //               <Button
  //                 onClick={handleLogout}
  //                 // onClick={window.localStorage.clear()}
  //                 className=" text-white py-2"
  //               >
  //                 Logout
  //               </Button>
  //             </div>
  //           </Dropdown.Menu>
  //         </Dropdown>
  //       </div>
  //     </>
  //   );
  // } else {
  //   component = (
  //     <>
  //       <Button className="text-center ">
  //         <NavLink to={"/login"} className="">
  //           Login
  //         </NavLink>
  //       </Button>
  //       <Button>
  //         <NavLink to={"/register"} className=" text-white ">
  //           Register
  //         </NavLink>
  //       </Button>
  //     </>
  //   );
  // }

  return (
    <div className="mt-2 mb-2 mx-4">
      <Navbar fluid rounded>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img
            src={Logo}
            className="mr-3  sm:h-9"
            style={{ height: 35, width: 38 }}
            alt="Flowbite React Logo"
          />
          <span className="text-2xl font-bold dark:text-white">Furnivul</span>
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
            <span>
              {" "}
              <Dropdown.Item>Cart</Dropdown.Item>
            </span>{" "}
          </NavLink>

          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>

        <Navbar.Toggle />
      </Navbar>
      {/* <Navbar className="ms-auto gap-1">{component}</Navbar> */}
    </div>
  );
}

export default navbar;
