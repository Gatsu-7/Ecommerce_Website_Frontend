import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "./CartContext";
const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("priceLowToHigh");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");
  const { dispatch } = useCart();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) =>
        console.error("Error while fetching the products:", error)
      );
  }, []);

  const categories = [
    "All",
    "Massagers",
    "Accupressures",
    "Heat Pump",
    "Puja Essentials",
  ];

  let filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  if (searchQuery) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  // ye yahan pr mene search k beech me agar koi refresh kr de toh window.location se forceful reload ho jata h to shop pr hi land krega

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "F5") {
        e.preventDefault(); // Prevents default refresh
        window.location.href = "/shop"; // Redirect to shop route
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown); // Cleanup listener
    };
  }, []);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "priceLowToHigh") return a.price - b.price;
    if (sortOption === "priceHighToLow") return b.price - a.price;
    if (sortOption === "nameAZ") return a.name.localeCompare(b.name);
    if (sortOption === "nameZA") return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10 bg-gradient-to-tl from-[#13547a] via-[#0c3c58] to-[#020111]">
      <div className="container mx-auto px-4 flex">
        <div className="w-96">
          <div className="mb-6">
            <label className="text-2xl font-semibold mr-4 text-white">
              Category:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mt-2 w-48 border border-gray-300 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="text-2xl font-semibold mr-4 text-white">
              Sort by:
            </label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-48 mt-2 border border-gray-300 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <option value="default">Default</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="nameAZ">Name: A to Z</option>
              <option value="nameZA">Name: Z to A</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-center"
              >
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-4 rounded"
                  />
                </Link>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                </Link>

                <p className="text-gray-600">₹{product.price.toFixed(2)}</p>
                <button
                  className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: product })
                  }
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-white text-xl">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
