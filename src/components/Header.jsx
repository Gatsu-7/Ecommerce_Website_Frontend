import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import SearchBar from "./Searchbar";

const Header = () => {
  const [search, setSearch] = useState("");
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
            className="relative p-2 group gap-1 text-white text-xl transition duration-150 ease-in-out 
             before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 
             before:h-[2px] before:bg-white before:transition-all before:duration-300 before:ease-in-out 
             hover:before:left-0 hover:before:w-full"
          >
            Shop <MdArrowDropDown className="inline" />
            <div
              className="hidden absolute left-1/2 transform -translate-x-1/2 mt-2 px-4 py-4 
                  transition duration-100 ease-in-out rounded-lg group-hover:block 
                  w-52 bg-blue-950 shadow-lg"
            >
              <ul>
                <li className="relative">
                  <Link to="">Puja Essentials</Link>
                </li>
                <li>
                  <Link to="">Body Massager</Link>
                </li>
                <li>
                  <Link to="">Foot Massager</Link>
                </li>
                <li>
                  <Link to="">Accupressures</Link>
                </li>
                <li>
                  <Link to="">Heat Pump</Link>
                </li>
              </ul>
            </div>
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
          <div>
            <SearchBar />
          </div>

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
