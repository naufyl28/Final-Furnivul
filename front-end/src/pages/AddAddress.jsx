import { Breadcrumb, Button, Card, TextInput } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AddAddress() {
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
        <Breadcrumb.Item href="#">Add Address</Breadcrumb.Item>
      </Breadcrumb>

      <Card className="w-full">
        <h1 className="text-2xl font-semibold">Address</h1>
        <div className="text-3xl font-semibold my-3 space-y-3">
          <div>
            <TextInput label="Name" placeholder="Name" className="" />
          </div>

          <div>
            <TextInput label="Address" placeholder="Address" className="" />
          </div>
          <div>
            <TextInput label="City" placeholder="City" className="" />
          </div>
          <div>
            <TextInput
              label="Postal Code"
              placeholder="Postal Code"
              className=""
            />{" "}
          </div>
          <div>
            <TextInput label="Country" placeholder="Country" className="" />
          </div>
          <div>
            <TextInput label="Phone" placeholder="Phone" className="" />
          </div>
        </div>
        <Button className="">
          <Link to={"/cart/address"}>
            <span> Add Address</span>
          </Link>
        </Button>
      </Card>
    </div>
  );
}

export default AddAddress;
