import { Breadcrumb } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";

function Payment() {
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
        <Breadcrumb.Item href="#">Payment</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Payment</h1>
    </div>
  );
}

export default Payment;
