import React from "react";
import deli from "../assets/fast-delivery.png";
import genuine from "../assets/authentic.png";
import retu from "../assets/return.png";
import secure from "../assets/secure-payment.png";
const Features = () => {
  const features = [
    {
      desc1: "Free & Fast Delivery",
      desc2: "All India Above ₹ 599*",
      image: deli,
    },
    {
      desc1: "Safe and Sequre",
      desc2: "Payments",
      image: secure,
    },
    {
      desc1: "100% Genuine",
      desc2: "Original Product",
      image: genuine,
    },
    {
      desc1: "Easy Returns*",
      desc2: "7 Days Return Policy ",
      image: retu,
    },
  ];
  return (
    <main className=" bg-gray-900 px-12 py-5 text-center flex flex-col justify-center items-center">
      <h2 className="text-6xl font-bold text-white mb-14">Why Choose Us ?</h2>
      <div className="max-w-7xl  flex justify-center items-center gap-10">
        {features.map((feat, index) => (
          <div
            key={index}
            className="py-8 px-14 rounded-lg text-center w-[250px] h-[300px] "
            style={{
              backgroundColor: "#2234ae",
              backgroundImage:
                "linear-gradient(210deg, #041e7a 0%, #211f1c 74%)",
            }}
          >
            <div className="flex justify-center  mb-4">
              <img
                src={feat.image}
                alt={`${feat.desc1}`}
                className="rounded-lg w-[100px] h-[100px]"
              />
            </div>
            <div className="text-2xl text-gray-200 font-bold mb-2">
              {feat.desc1}
            </div>
            <div className="text-xl  text-gray-200 font-semibold">
              {feat.desc2}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Features;
