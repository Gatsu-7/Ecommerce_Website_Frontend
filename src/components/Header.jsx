import React from "react";
import { FaUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="bg-white shadow-md "
      style={{
        backgroundColor: "#2234ae",
        backgroundImage: "linear-gradient(150deg, #2234ae 0%, #211f1c 74%)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 ">
        <Link to="/" className="text-5xl font-bold text-white">
          deZon
        </Link>

        <nav className="hidden md:flex space-x-16">
          <Link
            to="/"
            className="relative p-2  text-white text-xl transition duration-150 ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white  before:transition-all before:duration-300 before:ease-in-out hover:before:left-0 hover:before:w-full"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="relative p-2 text-white text-xl transition duration-150 ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:left-0 hover:before:w-full"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="relative p-2 text-white text-xl transition duration-150 ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:left-0 hover:before:w-full"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="relative p-2 text-white text-xl transition duration-150 ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:left-0 hover:before:w-full"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-14">
          <input
            type="text"
            className=" px-4 py-2 border rounded-lg w-[17rem]  outline-none "
            placeholder="What we can Help you Find?"
          />

          <Link
            to="/cart"
            className="relative p-2 text-white text-xl transition duration-150 ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:left-0 hover:before:w-full"
          >
            <BsCart4 />
          </Link>
          <Link
            to="/register"
            className="relative p-2 text-white text-xl transition duration-150 ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:left-0 hover:before:w-full"
          >
            <FaUser />
          </Link>
        </div>

        <button className="md:hidden text-white focus:outline-none ml-6">
          <IoMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
