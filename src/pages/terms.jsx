import React from "react";

const TermsOfService = () => {
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
          Terms of Service
        </h1>

        <p className="text-white mb-4">
          Welcome to Dezon! These terms and conditions outline the rules and
          regulations for the use of our website and services.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          1. Acceptance of Terms
        </h2>
        <p className="text-white mt-2">
          By accessing and using Dezon, you agree to abide by these Terms of
          Service. If you do not agree with any part of these terms, please do
          not use our services.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          2. User Accounts
        </h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>
            You must provide accurate and complete information when creating an
            account.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials.
          </li>
          <li>
            Dezon reserves the right to suspend or terminate accounts that
            violate our policies.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6">
          3. Orders and Payments
        </h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>
            All purchases made through Dezon are subject to product
            availability.
          </li>
          <li>Prices and availability are subject to change without notice.</li>
          <li>
            We accept payments via credit/debit cards, PayPal, and other
            accepted payment methods.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6">
          4. Returns & Refunds
        </h2>
        <p className="text-white mt-2">
          Please refer to our{" "}
          <a href="/returns" className="text-blue-500">
            Returns & Exchanges Policy
          </a>{" "}
          for details on returning items and requesting refunds.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          5. Limitation of Liability
        </h2>
        <p className="text-white mt-2">
          Dezon shall not be liable for any indirect, incidental, special, or
          consequential damages arising out of or in connection with the use of
          our website or services.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          6. Changes to Terms
        </h2>
        <p className="text-white mt-2">
          We reserve the right to modify these Terms of Service at any time.
          Changes will be effective immediately upon posting to our website.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">7. Contact Us</h2>
        <p className="text-gray-400 mt-2">
          If you have any questions regarding our Terms of Service, feel free to
          contact us at <strong>support@dezon.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
