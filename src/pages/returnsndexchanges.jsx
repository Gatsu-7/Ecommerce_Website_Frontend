import React from "react";

const ReturnsExchanges = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-[#13547a] via-[#0c3c58] to-[#020111] flex justify-center items-center p-6">
      <div className="max-w-5xl w-full bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-white text-center mb-6">
          <span className="text-red-600 text-7xl">Returns </span> &{" "}
          <span className="text-blue-600 text-7xl">Exchanges</span>
        </h1>
        <div className="space-y-6">
          <div className=" pb-4">
            <h2 className="text-2xl text-white font-semibold">Return Policy</h2>
            <p className="text-white mt-2">
              We offer a 30-day return policy. If you are not satisfied with
              your purchase, you can return it within 30 days of delivery for a
              full refund or exchange. Items must be unused and in their
              original packaging.
            </p>
          </div>

          <div className=" pb-4">
            <h2 className="text-2xl text-white font-semibold">
              Exchange Policy
            </h2>
            <p className="text-white mt-2">
              If you received a defective or incorrect item, we will gladly
              exchange it for you. Please contact our support team within 7 days
              of receiving your order to initiate the exchange process.
            </p>
          </div>

          <div className=" pb-4">
            <h2 className="text-2xl text-white font-semibold">
              Refund Process
            </h2>
            <p className="text-white mt-2">
              Refunds will be processed within 7-10 business days after we
              receive your returned item. Refunds will be issued to the original
              payment method used at checkout.
            </p>
          </div>

          <div className=" pb-4">
            <h2 className="text-2xl text-white font-semibold">
              Non-Returnable Items
            </h2>
            <p className="text-white mt-2">
              Certain items such as gift cards, perishable goods, and
              custom-made products are non-returnable. Please check product
              descriptions for details before purchasing.
            </p>
          </div>

          <div className=" pb-4">
            <h2 className="text-2xl text-white font-semibold">
              How to Initiate a Return?
            </h2>
            <p className="text-white mt-2">
              To initiate a return, please visit our 'Returns & Exchanges' page
              and follow the instructions. You can also contact our support team
              at <span className="text-blue-400">support@dezon.com</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsExchanges;
