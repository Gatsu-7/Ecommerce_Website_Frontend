import React from "react";

const faqs = [
  {
    question: "What is Dezon?",
    answer:
      "Dezon is a platform that provides [your service/product details]. We aim to [mission statement or key feature].",
  },
  {
    question: "How do I create an account?",
    answer:
      "Click on the 'Sign Up' button and follow the instructions to create your Dezon account.",
  },
  {
    question: "Is Dezon free to use?",
    answer:
      "Dezon offers both free and premium plans. The free version includes [features], while the premium plan includes additional benefits like [benefits].",
  },
  {
    question: "How can I reset my password?",
    answer:
      "Go to the login page and click on 'Forgot Password' to reset your password via email.",
  },
  {
    question: "Can I use Dezon on my mobile device?",
    answer:
      "Yes! Dezon is fully responsive and can be used on mobile devices, tablets, and desktops.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our support team via the 'Contact Us' page or email us at support@dezon.com.",
  },
  {
    question: "Does Dezon store my personal data securely?",
    answer:
      "Yes! We take security seriously and follow industry best practices to protect user data.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "You can delete your account from the 'Account Settings' page. Once deleted, your data cannot be recovered.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can upgrade or downgrade your plan anytime from the 'Billing' section in your account settings.",
  },
  {
    question: "What payment methods does Dezon accept?",
    answer:
      "We accept payments via credit/debit cards, PayPal, and other popular payment gateways.",
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-[#13547a] via-[#0c3c58] to-[#020111]  flex justify-center items-center p-6">
      <div className="max-w-5xl w-full bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-white text-center mb-6">
          Frequently Asked
          <span className="text-blue-600 text-7xl"> Questions </span>
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h2 className="text-2xl text-white font-semibold">
                {faq.question}
              </h2>
              <p className="text-white mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
