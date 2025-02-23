import React from "react";

const CancellationPolicy = () => {
  return (
    <div
      className="min-h-screen py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#2234ae",
        backgroundImage: "linear-gradient(150deg, #2234ae 0%, #211f1c 74%)",
      }}
    >
      <div className="max-w-6xl mx-auto p-6 rounded-lg shadow-md bg-gray-900">
        <h1 className="text-6xl font-bold text-white mb-6 text-center">
          Cancellation Policy
        </h1>

        <p className="text-white mb-4">
          At Dezon, we understand that plans can change. Our cancellation policy
          is designed to be simple and fair to ensure a smooth experience for
          our customers.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          Order Cancellation
        </h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>
            Orders can be canceled within <strong>12 hours</strong> of placement
            without any charges.
          </li>
          <li>
            If the order has already been processed or shipped, cancellation may
            not be possible.
          </li>
          <li>
            To request a cancellation, contact our support team at
            <strong> support@dezon.com</strong> with your order details.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6">
          Refund for Canceled Orders
        </h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>
            If an order is canceled within the allowed timeframe, a full refund
            will be issued to the original payment method.
          </li>
          <li>
            Refunds may take <strong>5-7 business days</strong> to reflect in
            your account.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6">
          Exceptions to Cancellations
        </h2>
        <p className="text-white mt-2">
          The following orders cannot be canceled once placed:
        </p>
        <ul className="list-disc list-inside text-white">
          <li>
            Customized or personalized massagers and acupressure products.
          </li>
          <li>Final sale or clearance items.</li>
          <li>Orders that have already been shipped.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6">Need Help?</h2>
        <p className="text-gray-400 mt-2">
          If you have any questions, please reach out to our support team at
          <strong> support@dezon.com</strong>. We are happy to assist you!
        </p>
      </div>
    </div>
  );
};

export default CancellationPolicy;
