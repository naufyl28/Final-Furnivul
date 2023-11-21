import { Breadcrumb, Button } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="#" icon={FaCartShopping}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Cart</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Address</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Checkout</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Checkout</h1>
      <Button className="">
        <NavLink to={"payment"}> payment </NavLink>
      </Button>
    </div>
  );
}

export default Checkout;
