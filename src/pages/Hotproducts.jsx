import React from "react";
import video from "../assets/1101187_Burning_Fire_1280x720.mp4";
const HotProducts = () => {
  const products = [
    {
      id: 1,
      name: "Portable Neck Massager",
      price: "₹249.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Foot Reflexology Machine",
      price: "₹279.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Deep Tissue Massager",
      price: "₹239.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Eye Massager with Heat",
      price: "₹259.99",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-6xl font-bold text-gray-100">
            <div className="relative inline-block group">
              <span className="text-6xl text-white px-2 py-1 relative z-10">
                Hot
              </span>
              <video
                className="absolute rounded-full top-0 left-0 w-full h-full object-cover transition-opacity duration-300 z-0 "
                loop
                muted
                autoPlay
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>{" "}
            Products This Month
          </h2>
          <p className="mt-2 text-2xl text-gray-100">
            Discover the{" "}
            <span className="text-blue-500 font-bold"> top-selling</span>{" "}
            products this month!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="mt-2 text-xl font-bold text-gray-900">
                  {product.price}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotProducts;
