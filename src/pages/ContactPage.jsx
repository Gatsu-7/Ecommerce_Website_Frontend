import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-900 py-12 min-h-[84vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-gray-100 mb-8">
            Get in <u> Touch</u>
          </h2>
          <p className="mt-2 text-2xl text-gray-100">
            We'd love to hear from you! Send us a message or reach out through
            our contact details below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="bg-gray-400 p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-base font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 outline-none rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-base font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 outline-none rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-base font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                className="mt-1 block w-full px-3 py-2 border border-gray-300 outline-none rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="bg-gray-400 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <p className="mt-4 text-gray-600">
              Feel free to reach out to us using the form or through the
              following contact details:
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <span className="font-semibold text-gray-700">Email:</span>{" "}
                dezon@gmail.com
              </li>
              <li>
                <span className="font-semibold text-gray-700">Phone:</span> +91
                9667016338
              </li>
              <li>
                <span className="font-semibold text-gray-700">Address:</span> 21
                Outer Ring Road, New Delhi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
