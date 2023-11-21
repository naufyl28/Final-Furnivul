import { Breadcrumb, Button } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function ListingProduct() {
  return (
    <>
      <div>
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
        >
          <Breadcrumb.Item href="/" icon={FaCartShopping}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
          <Breadcrumb.Item>List Product</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Button>
            <NavLink to={"/category-product/list-product/detail-product"}>
              DetailProduct
            </NavLink>
          </Button>
        </div>
        <div>
          <h1>ListingProduct</h1>
        </div>
      </div>
    </>
  );
}
export default ListingProduct;
