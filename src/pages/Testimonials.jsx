import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      review:
        "This massager is a life-saver! I use it every day after work, and it has really helped with my back pain.",
      image: "",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      review:
        "Great quality and easy to use. The price is reasonable too. Highly recommend this product!",
      image: "",
    },
    {
      id: 3,
      name: "Mark Wilson",
      rating: 5,
      review:
        "Excellent product! My family loves it, and we all use it regularly. Five stars!",
      image: "",
    },
    {
      id: 4,
      name: "Sarah Lee",
      rating: 4,
      review:
        "I had an issue with delivery, but customer service was very helpful. The product works as described.",
      image: "",
    },
  ];

  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-extrabold text-gray-100">
            What Our <span className="text-blue-500">Customers </span> Say
          </h2>
          <p className="mt-2 text-2xl text-gray-100">
            <span className="text-blue-500"> Real feedback</span> from our happy
            customers!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {review.name}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((star, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 italic mb-4">
                <FaQuoteLeft className="text-blue-500 mr-2 inline" />
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
