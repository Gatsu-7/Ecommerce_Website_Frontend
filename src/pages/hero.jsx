import React from "react";
import { Link } from "react-router-dom";
import Promotions from "./Promotions";
import Features from "./features";
import FeaturedProducts from "./Products";
import Testimonials from "./Testimonials";
import NewsletterSignup from "./Newsletter";
import HotProducts from "./Hotproducts";

const HeroSection = () => {
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">
          <div className="flex flex-col md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Discover Our{" "}
              <span className="text-blue-500">Premium Massagers</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Experience ultimate relaxation with our advanced, easy-to-use, and
              highly effective massagers, designed to relieve stress and promote
              wellness.
            </p>
            <Link
              to="/shop"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 w-[10rem] rounded-md transition duration-300 ease-in-out"
            >
              Shop Now
            </Link>
          </div>

          <div className="mt-10 md:mt-0 md:w-1/2 ">
            <img
              src="https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Massager"
              className="w-full object-cover rounded-lg hover:scale-105 transition-all duration-175 ease-in-out"
            />
          </div>
        </div>
      </section>

      <section>
        <Promotions />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <FeaturedProducts />
      </section>
      <section>
        <HotProducts />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <NewsletterSignup />
      </section>
    </>
  );
};

export default HeroSection;
