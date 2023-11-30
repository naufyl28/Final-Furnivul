import { Breadcrumb, Button, Card } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Payment() {
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
      </Breadcrumb>
      <h1 className="text-3xl font-bold">Payment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mt-4 h-full">
            <Card className="flex border-2 border-yellow-400" active>
              <div className="flex items-center justify-center ">
                <img
                  src="https://xendit.co/wp-content/uploads/2020/03/iconQris.png"
                  alt="qris"
                  width={150}
                />
              </div>
            </Card>
            <Card className="flex">
              <div className="flex items-center justify-center">
                <img
                  src="https://image.cermati.com/v1585904886/o81yliwckjhywelnx13a.png"
                  alt="qris"
                  width={150}
                />
              </div>
            </Card>
            <Card className="flex">
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg"
                  alt="qris"
                  width={150}
                />
              </div>
            </Card>
            <Card className="flex">
              <div className="flex items-center justify-center">
                <img
                  src="https://e7.pngegg.com/pngimages/1013/540/png-clipart-mastercard-mastercard.png"
                  alt="qris"
                  width={150}
                />
              </div>
            </Card>
          </Card>
        </div>
        <div>
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mt-4 h-full items-center text-center">
            <div>
              <h1 className="text-3xl font-bold">Scan QRIS</h1>
              <p>Scan QRIS untuk pembayaran</p>
            </div>
            <img
              src="https://tabungwakafumat.org/wp-content/uploads/2021/07/QR-Code.jpg"
              alt="qris"
              width={300}
              height={350}
            />

            <Button>
              {" "}
              <Link to="transaction-status">Transaction Status </Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Payment;
