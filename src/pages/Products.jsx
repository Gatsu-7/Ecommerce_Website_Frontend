import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Handheld Massager",
      price: "₹249.99",
      image: "",
    },
    {
      id: 2,
      name: "Neck & Shoulder Massager",
      price: "₹279.99",
      image: "",
    },
    {
      id: 3,
      name: "Foot Massager",
      price: "₹299.99",
      image: "",
    },
    {
      id: 4,
      name: "Full Body Massage Chair",
      price: "₹2299.99",
      image: "",
    },
    {
      id: 5,
      name: "Full Body Massage Chair",
      price: "₹2299.99",
      image: "",
    },
    {
      id: 6,
      name: "Full Body Massage Chair",
      price: "₹2299.99",
      image: "",
    },
    {
      id: 7,
      name: "Full Body Massage Chair",
      price: "₹2299.99",
      image: "",
    },
    {
      id: 8,
      name: "Full Body Massage Chair",
      price: "₹2299.99",
      image: "",
    },
  ];

  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-extrabold text-gray-100">
            Featured <span className="text-blue-500"> Products </span>
          </h2>
          <p className="mt-2 text-xl text-gray-100">
            Explore our top-rated products and bestsellers!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-xl font-bold text-gray-800">
                  {product.price}
                </p>

                <div className="flex justify-center items-center">
                  <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
