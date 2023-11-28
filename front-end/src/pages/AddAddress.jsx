import { Breadcrumb, Button, Card, TextInput } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Address() {
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
      </Breadcrumb>
      <h1>Address</h1>
      <Button className="">
        {/* <Card className="bg-gray-50 dark:bg-gray-800">
          <Card.Body>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm">Full Name</label>
                <input
                  type="text"
                  className="border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Phone Number</label>
                <TextInput
                  type="text"
                  className="border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Address</label>
                <TextInput
                  type="text"
                  className="border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">City</label>
                <TextInput
                  type="text"
                  className="border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Postal Code</label>
                <TextInput
                  type="text"
                  className="border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm"
                />
              </div>
            </div>
          </Card.Body>
        </Card> */}
        <NavLink to={"checkout"}>
          <span> payment</span>
        </NavLink>
      </Button>
    </div>
  );
}

export default Address;
