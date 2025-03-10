import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Trust Matters
            </h3>
            <p className="text-base text-gray-400">
              deZon – A name of trust built up with years of experience. You
              will find here 100% Genuine and Brand New products.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Quick Links
            </h3>
            <ul>
              <li>
                <a
                  href="/"
                  className="text-base text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="text-base text-gray-400 hover:text-white transition"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-base text-gray-400 hover:text-white transition "
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-base text-gray-400 hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Customer Support
            </h3>
            <ul>
              <li>
                <a
                  href="/faq"
                  className="text-base text-gray-400 hover:text-white transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/returns_and_exchanges"
                  className="text-base text-gray-400 hover:text-white transition"
                >
                  Returns & Exchanges Policy
                </a>
              </li>
              <li>
                <a
                  href="/shipping_and_delivery"
                  className="text-base text-gray-400 hover:text-white transition"
                >
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-base text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/termsofservice"
                  className="text-base text-gray-400 hover:text-white transition"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/cancellation"
                  className="text-base text-gray-400 hover:text-white transition"
                >
                  Cancellation Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-2">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={25} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <FaTwitter size={25} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram size={25} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={25} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2022 deZon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
