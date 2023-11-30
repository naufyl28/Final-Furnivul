import { Breadcrumb, Button, Card, Modal } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Payment() {
  const [showQrisModal, setShowQrisModal] = useState(false);
  const [showUnderMaintenanceModal, setShowUnderMaintenanceModal] = useState(false); // Memperbaiki nama variabel
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Retrieve data from local storage
    const storedTotalPrice = localStorage.getItem("totalPrice");
    if (storedTotalPrice) {
      setTotalPrice(parseInt(storedTotalPrice, 10));
    }
  }, []);

  const openQrisModal = () => {
    setShowQrisModal(true);
  };

  const closeQrisModal = () => {
    setShowQrisModal(false);
  };

  const openUnderMaintenanceModal = () => {
    setShowUnderMaintenanceModal(true);
  };

  const closeUnderMaintenanceModal = () => {
    setShowUnderMaintenanceModal(false);
  };

  return (
    <div className="mx-7">
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 py-3 dark:bg-gray-800"
      >
        {/* Breadcrumb items */}
      </Breadcrumb>

      <h1 className="flex items-center justify-center text-3xl font-bold">
        Payment
      </h1>
      <div className="flex items-center justify-center">
        <div>
          <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mt-4 h-full">
            <Button onClick={openQrisModal}>
              <div className="flex items-center justify-center">
                <img
                  src="https://xendit.co/wp-content/uploads/2020/03/iconQris.png"
                  alt="Qrisbutton"
                  width={150}
                />
              </div>
            </Button>
            <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mt-4 h-full">
              <Button onClick={openUnderMaintenanceModal}>
                <div className="flex items-center justify-center">
                  <img
                    src="https://image.cermati.com/v1585904886/o81yliwckjhywelnx13a.png"
                    alt="gambar2"
                    width={150}
                  />
                </div>
              </Button>
            </Card>
            <Card className="flex">
              <Button onClick={openUnderMaintenanceModal}>
                <div className="flex items-center justify-center">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg"
                    alt="gambar3"
                    width={150}
                  />
                </div>
              </Button>
            </Card>
            <Card className="flex">
              <Button onClick={openUnderMaintenanceModal}>
                <div className="flex items-center justify-center">
                  <img
                    src="https://e7.pngegg.com/pngimages/1013/540/png-clipart-mastercard-mastercard.png"
                    alt="gambar4"
                    width={150}
                  />
                </div>
              </Button>
            </Card>
          </Card>
        </div>
      </div>

      {/* Modal for Qris */}
      <Modal
        show={showQrisModal}
        onClose={closeQrisModal}
        className="modal-container"
      >
        <Modal.Header className="">Scan QRIS</Modal.Header>
        <Modal.Body className="modal-content">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-2xl mt-4">
              Total Price:{" "}
              {totalPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <p className="mt-3 mb-3">Scan QRIS for payment</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src="https://tabungwakafumat.org/wp-content/uploads/2021/07/QR-Code.jpg"
              alt="qris"
              width={300}
              height={350}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="flex items-center justify-center">
          <Button>
            <Link to="transaction-status">Transaction Status</Link>
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Under Maintenance */}
      <Modal
        show={showUnderMaintenanceModal}
        onClose={closeUnderMaintenanceModal}
        className="modal-container"
      >
        <Modal.Header className="">Under Maintenance</Modal.Header>
        <Modal.Body className="modal-content">
          <p>Sorry, this payment is currently under maintenance.</p>
        </Modal.Body>
        <Modal.Footer className="flex items-center justify-center">
          <Button onClick={closeUnderMaintenanceModal}>Accept</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Payment;
