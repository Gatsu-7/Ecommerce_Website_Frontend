import React from "react";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>

        <p className="text-white mb-4">
          Welcome to Dezon. We value your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, and safeguard your data.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>
            Personal details (name, email, phone number, shipping address).
          </li>
          <li>
            Payment information (processed securely through third-party
            providers).
          </li>
          <li>
            Browsing and device information (cookies, IP address, location
            data).
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>To process and fulfill your orders.</li>
          <li>To provide customer support and respond to inquiries.</li>
          <li>To improve our website and services based on user behavior.</li>
          <li>
            To send promotional emails and offers (you can opt out anytime).
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6">
          3. Sharing Your Information
        </h2>
        <p className="text-white mt-2">
          We do not sell your personal information. However, we may share data
          with:
        </p>
        <ul className="list-disc list-inside text-white">
          <li>
            Trusted third-party service providers (payment processors, shipping
            partners).
          </li>
          <li>Legal authorities if required by law.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6">
          4. Cookies & Tracking Technologies
        </h2>
        <p className="text-white mt-2">
          We use cookies and similar tracking technologies to enhance your
          experience. You can adjust your cookie settings in your browser.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          5. Data Security
        </h2>
        <p className="text-white mt-2">
          We implement industry-standard security measures to protect your data
          from unauthorized access and breaches.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6">
          6. Your Rights & Choices
        </h2>
        <ul className="list-disc list-inside text-white mt-2">
          <li>
            You can update or delete your personal information by contacting us.
          </li>
          <li>You can opt out of marketing communications at any time.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-6">7. Contact Us</h2>
        <p className="text-gray-400 mt-2">
          If you have any questions regarding this Privacy Policy, please reach
          out to us at <strong>support@dezon.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
