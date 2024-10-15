import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold text-gray-100">About Us</h1>
          <p className="mt-4 text-2xl text-gray-100">
            Learn more about our journey, mission, and the values that drive us.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Our History
          </h2>
          <p className="text-gray-600 text-lg">
            We started as a small business with the goal of improving people’s
            well-being by providing the best massagers and wellness products.
            Over the years, we have grown into a trusted brand, offering a wide
            range of products that help customers feel relaxed and rejuvenated
            in their daily lives.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg">
            Our mission is to promote a balanced and stress-free lifestyle
            through innovative products that combine technology with comfort. We
            aim to help people unwind, recharge, and take care of their
            well-being, no matter where they are.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-lg ">
            <li>
              Customer First: We put our customers at the heart of everything we
              do.
            </li>
            <li>
              Quality: We are committed to offering high-quality products that
              deliver real results.
            </li>
            <li>
              Innovation: We believe in the power of innovation to bring
              wellness to everyone.
            </li>
            <li>
              Sustainability: We are dedicated to reducing our environmental
              footprint and promoting responsible business practices.
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Meet the Team
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Our dedicated team of professionals is passionate about delivering
            top-notch products and services to our customers. Meet the people
            who make it all happen.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Satyam Satpathy
              </h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Jayshankar Verma
              </h3>
              <p className="text-gray-500">Marketing Head</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Prakriti Ghosh
              </h3>
              <p className="text-gray-500">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
