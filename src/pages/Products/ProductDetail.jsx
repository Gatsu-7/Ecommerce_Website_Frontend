// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [pincode, setPincode] = useState("");

//   const handleChange = (e) => {
//     setPincode(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/products");
//         const foundProduct = response.data.find((item) => item.id === id);

//         if (!foundProduct) {
//           setError("Product not found");
//         } else {
//           setProduct(foundProduct);
//         }
//       } catch (err) {
//         setError("Failed to fetch product details.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mx-auto p-6 flex gap-12">
//       <div className="left">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="mt-3 w-full max-w-md hover:scale-105 transition-all ease-in-out rounded-md border-2 border-gray-700"
//         />
//       </div>
//       <div className="right max-w-4xl flex justify-center ">
//         <div>
//           <h1 className="mt-2 text-5xl font-bold mb-2">{product.name}</h1>
//           <p className="text-gray-700 text-xl mb-2">{product.description}</p>
//           <p className="text-3xl font-medium text-red-600 mb-4 text-center ">
//             <span className="line-through mr-4 ">
//               ₹{product.price * Number(Math.random().toFixed(2)) * 10}
//             </span>
//             <span>
//               ₹{product.price} {"{"}"Inclusive of all taxes"{"}"}
//             </span>
//           </p>
//           <div>
//             <input
//               type="text"
//               value={pincode}
//               onChange={handleChange}
//               placeholder="Enter pincode"
//               className="outline-none border-2 p-1 rounded-sm w-48 mr-4"
//             />
//             <button
//               className="bg-gray-600 text-white p-1 rounded-sm hover:bg-gray-700"
//               onClick={handleSubmit}
//             >
//               Check Pincode
//             </button>
//           </div>

//           <div className="links flex justify-center">
//             <Link className="text-xl bg-red-600 text-white p-2 rounded-sm hover:bg-red-700">
//               Add to Cart
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React, { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pincode, setPincode] = useState("");

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

  // Calculate random discount price once and store it
  const discountedPrice = useMemo(() => {
    return product
      ? (product.price * Number(Math.random().toFixed(2)) * 10).toFixed(2)
      : 0;
  }, [product]); // Only recalculate when product changes

  const handleChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checking pincode:", pincode);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-6 flex gap-12">
      <div className="left">
        <img
          src={product.image}
          alt={product.name}
          className="mt-3 w-full max-w-md hover:scale-105 transition-all ease-in-out rounded-md border-2 border-gray-700"
        />
      </div>
      <div className="right max-w-4xl flex justify-center">
        <div>
          <h1 className="mt-2 text-5xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 text-xl mb-2">{product.description}</p>
          <p className="text-3xl font-medium text-red-600 mb-4 text-center">
            <span className="line-through mr-4">₹{discountedPrice}</span>
            <span>
              ₹{product.price} {"{"}"Inclusive of all taxes"{"}"}
            </span>
          </p>
          <div>
            <input
              type="text"
              value={pincode}
              onChange={handleChange}
              placeholder="Enter pincode"
              className="outline-none border-2 p-1 rounded-sm w-48 mr-4"
            />
            <button
              className="bg-gray-600 text-white p-1 rounded-sm hover:bg-gray-700"
              onClick={handleSubmit}
            >
              Check Pincode
            </button>
          </div>

          <div className="links flex justify-center">
            <Link className="text-xl bg-red-600 text-white p-2 rounded-sm hover:bg-red-700">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
