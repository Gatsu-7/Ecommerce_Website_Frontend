import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/products");
        const foundProduct = response.data.find((item) => item.id === id);

        if (!foundProduct) {
          setError("Product not found");
        } else {
          setProduct(foundProduct);
        }
      } catch (err) {
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-xl font-semibold text-red-500">₹{product.price}</p>
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md hover:scale-105 transition-all ease-in-out rounded-md"
      />
    </div>
  );
};

export default ProductDetails;
