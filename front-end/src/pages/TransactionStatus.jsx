import { Breadcrumb, Button, Card } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router";

function TransactionStatus() {
  const navigate = useNavigate();

  return (
    <div className="mx-7">
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50  py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item href="#" icon={FaCartShopping}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Cart</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Address</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Checkout</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Payment</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Payment Status</Breadcrumb.Item>
      </Breadcrumb>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 item-center justify-center">
        <Card className="items-center">
          <div className=" justify-center items-center space-y-4">
            <div>
              <h1 className="text-3xl font-bold">Payment Status</h1>
            </div>
            <div className="items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8215/8215539.png"
                width={100}
                className="justify-center items-center  mx-auto"
              />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-semibold">Payment was successful</h1>
              <p className="text-md font-semibold justify-center ">
                Payment has been received successfully. Thank you for your
                payment
              </p>
            </div>
            <div className="flex justify-center gap-3">
              <Button href="/" color="green">
                Back to Home
              </Button>
              <Button color="blue">Download Reicept</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default TransactionStatus;
