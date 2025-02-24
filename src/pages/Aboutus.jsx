import React from "react";

const AboutUs = () => {
  return (
    <div className=" mx-auto px-10 py-10 bg-gradient-to-tl from-[#13547a] via-[#0c3c58] to-[#020111] flex justify-center items-center">
      <div className="max-w-[1200px]">
        <section className="text-center mb-12 ">
          <h1 className="text-6xl font-bold text-gray-100 mb-4">
            Welcome to <span className="text-blue-500 text-8xl"> deZon </span>
          </h1>
          <p className="text-lg text-gray-100 leading-relaxed">
            At deZon, we are passionate about helping you feel your best. Our
            mission is to provide innovative, high-quality massagers and
            wellness products that promote relaxation, relief, and rejuvenation.
            We believe in making self-care accessible and effective for
            everyone, so you can enjoy the comfort and convenience of spa-like
            treatments right at home.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-100 mb-4 text-center">
            Our Journey
          </h2>
          <p className="text-lg text-gray-100 leading-relaxed">
            Founded in 2022, deZon began with a simple goal: to create products
            that improve everyday well-being. What started as a small operation
            has grown into a trusted name in the wellness industry, with
            thousands of customers finding relief and relaxation through our
            products. Our team is committed to researching the latest
            innovations and crafting items that cater to the needs of modern
            consumers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-100 mb-4 text-center">
            What We <span className="text-blue-500"> Stand </span> For
          </h2>
          <ul className="list-disc ml-6 text-lg text-gray-100 leading-relaxed">
            <li>
              <strong>Quality & Innovation:</strong> We focus on delivering
              products that are built to last, designed with the latest
              technology to ensure optimal performance.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> Our customers are at the
              heart of everything we do. We listen to your feedback and
              continuously strive to meet and exceed your expectations.
            </li>
            <li>
              <strong>Affordability:</strong> Wellness shouldn’t come at a high
              cost. We offer competitive pricing to ensure that everyone can
              benefit from our products without compromising quality.
            </li>
            <li>
              <strong>Sustainability:</strong> We are committed to reducing our
              environmental footprint by using eco-friendly materials and
              packaging where possible.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-100 mb-4 text-center">
            Why deZon?
          </h2>
          <p className="text-lg text-gray-100 leading-relaxed">
            When you choose deZon, you're choosing a company that genuinely
            cares about your well-being. Whether you're looking for a deep
            tissue massage after a long day or a soothing neck massage while
            traveling, we have a solution for you. Our products are easy to use,
            effective, and come with a satisfaction guarantee.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            A Product for Every Need
          </h2>
          <p className="text-lg text-gray-100 leading-relaxed">
            From handheld massagers to full-body massage chairs, we offer a wide
            range of products designed to fit into your lifestyle. Each product
            is tested for quality and comfort, ensuring you get the best results
            every time. Whether you're dealing with muscle tension, soreness, or
            simply need to relax, we have the perfect product to help you
            unwind.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-100 mb-4 text-center">
            What Our Customers Are Saying
          </h2>
          <div className="space-y-6">
            <blockquote className="p-4 bg-gray-100 rounded">
              <p className="text-lg text-black italic">
                “The best purchase I've ever made! The portable massager has
                become a daily part of my routine, and I can’t imagine life
                without it.”
              </p>
              <footer className="text-right text-sm text-gray-500">
                — Lokesh M. Sharma
              </footer>
            </blockquote>
            <blockquote className="p-4 bg-gray-100 rounded">
              <p className="text-lg text-black italic">
                “I was hesitant at first, but after using their massage chair
                for a month, I feel like a new person. My back pain is gone, and
                I feel so much more relaxed.”
              </p>
              <footer className="text-right text-sm text-gray-500">
                — Dixita Verma
              </footer>
            </blockquote>
            <blockquote className="p-4 bg-gray-100 rounded">
              <p className="text-lg text-black italic">
                “Great customer service, fast shipping, and an amazing product!
                The neck massager is a lifesaver for long workdays.”
              </p>
              <footer className="text-right text-sm text-gray-500">
                — Nitish Garg
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-100 mb-4">
            We're Here For You
          </h2>
          <p className="text-lg text-gray-100 leading-relaxed">
            At deZon, we don’t just sell products—we create experiences. Our
            dedicated support team is always here to answer your questions,
            provide guidance, and ensure you're completely satisfied with your
            purchase. Your wellness is our top priority, and we aim to make
            every interaction with us a positive one.
          </p>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-4xl font-bold text-gray-100 text-center mb-6">
            Join the deZon <span className="text-blue-500"> Community </span>
          </h2>
          <p className="text-lg text-gray-100 mb-6">
            Ready to take the next step in your wellness journey? Explore our
            product collection and find the perfect solution to fit your needs.
            Join our community of happy customers and start feeling the benefits
            of quality massage therapy today.
          </p>
          <a
            href="/products"
            className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition-colors mb-2 mt-8"
          >
            Shop Now
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
