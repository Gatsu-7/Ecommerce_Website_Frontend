import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // yahan par sign up ka api handle krna h yaad se

    if (email) {
      setSuccessMessage("Thank you for signing up to our newsletter!");
      setEmail("");
    }
  };

  return (
    <section className="bg-gray-900 py-12 ">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-6xl font-extrabold text-gray-100 mb-4">
            Sign Up for Our Newsletter
          </h2>
          <p className="mt-2 text-2xl text-gray-100">
            Get the latest updates on new products and upcoming sales!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          {successMessage && (
            <div className="mb-4 text-green-600 font-bold text-2xl">
              {successMessage}
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Enter your email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
