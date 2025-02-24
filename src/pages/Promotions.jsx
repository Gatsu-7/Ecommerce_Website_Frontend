import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import percent from "../assets/20percent.jpg";
import shiping from "../assets/shipping.jpg";
import buy from "../assets/b1g1f.jpg";

const Promotions = () => {
  return (
    <section className="bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-7xl font-extrabold text-gray-300">
            Current{" "}
            <span className="text-5xl font-extrabold text-blue-500">
              Promotions
            </span>
          </h2>
          <p className="mt-2 text-2xl text-gray-300">
            Swipe through our latest{" "}
            <span className="border-b-2 border-white text-blue-500">
              {" "}
              offers
            </span>{" "}
            and{" "}
            <span className="border-b-2 border-white text-blue-500">
              {" "}
              discounts!
            </span>
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}
        >
          <SwiperSlide>
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={percent}
                alt="Promotion 1"
                className="w-full h-60 object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-4xl font-bold">20% Off Massagers</h3>
                <p className="mt-2">
                  Get a 20% discount on all massagers this month. Limited stock
                  available!
                </p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={buy}
                alt="Promotion 2"
                className="w-full h-60 object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-4xl font-bold">Buy One Get One Free</h3>
                <p className="mt-2">
                  For a limited time, buy one massager and get a second one
                  absolutely free!
                </p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Grab Offer
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={shiping}
                alt="Promotion 3"
                className="w-full h-60 object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-4xl font-bold">Free Shipping</h3>
                <p className="mt-2">
                  Enjoy free shipping on all orders over ₹500. Don’t miss out!
                </p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Promotions;
