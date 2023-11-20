import { Button } from "flowbite-react";
import { NavLink } from "react-router-dom";

function CategoryProduct() {
  return (
    <div>
      <h1>CategoryProduct</h1>
      <Button>
        <NavLink to={"/category-product/list-product"}>ListingProduct</NavLink>
      </Button>
    </div>
  );
}
export default CategoryProduct;
