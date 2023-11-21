import { Breadcrumb } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";

function detailProduct() {
  return (
    <>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="/" icon={FaCartShopping}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">List Product</Breadcrumb.Item>
        <Breadcrumb.Item>Detail Product</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <h1>detailProduct</h1>
      </div>
    </>
  );
}
export default detailProduct;
