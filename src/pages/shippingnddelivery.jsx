import React from "react";

const ShippingAndDelivery = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#2234ae",
        backgroundImage: "linear-gradient(150deg, #2234ae 0%, #211f1c 74%)",
      }}
    >
      <div className="max-w-6xl mx-auto p-6 rounded-lg shadow-md bg-gray-900">
        <h1 className="text-6xl font-bold text-white mb-4 text-center">
          Shipping & Delivery Policy
        </h1>

        <p className="text-white mb-4">
          At Dezon, we aim to deliver your orders quickly and efficiently. Below
          are the details of our shipping and delivery policies.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          Shipping Time & Processing
        </h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>Orders are processed within 1-2 business days.</li>
          <li>Delivery time varies based on location and shipping method.</li>
          <li>Standard shipping typically takes 5-7 business days.</li>
          <li>Express shipping options are available at checkout.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6">
          Shipping Charges
        </h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>Standard shipping is free for orders above $50.</li>
          <li>For orders below $50, a flat shipping rate of $5 applies.</li>
          <li>Express shipping charges vary based on location.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6">
          International Shipping
        </h2>
        <p className="text-white mt-2">
          We offer worldwide shipping. International shipping costs and times
          vary based on the destination. Customs duties or taxes (if applicable)
          are the responsibility of the customer.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          Order Tracking
        </h2>
        <p className="text-white mt-2">
          Once your order is shipped, you will receive a tracking number via
          email. You can track your order status on our website under "Track My
          Order."
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          Delivery Issues
        </h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>If your order is delayed, please contact our support team.</li>
          <li>
            If you receive a damaged item, notify us within 48 hours for a
            replacement.
          </li>
          <li>Incorrect addresses may lead to additional shipping charges.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6">Need Help?</h2>
        <p className="text-gray-400 mt-2">
          For any shipping-related inquiries, contact us at
          <strong> support@dezon.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default ShippingAndDelivery;
