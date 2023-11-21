import { Button } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";

function CategoryProduct() {
  return (
    <div>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="#" icon={FaCartShopping}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
      </Breadcrumb>
      <h1>CategoryProduct</h1>
      <Button>
        <NavLink to={"/category-product/list-product"}>
          <a>ListingProduct</a>
        </NavLink>
      </Button>
    </div>
  );
}
export default CategoryProduct;
