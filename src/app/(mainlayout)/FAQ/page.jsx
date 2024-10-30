'use client';

import React, { useState } from "react";

const faqData = [
  {
    question: "What is Appartali?",
    answer: "Appartali is a platform where you can connect with like-minded individuals and share ideas and experiences.",
  },
  {
    question: "How can I join Appartali?",
    answer: "You can join Appartali by signing up with your email and creating a profile to connect with others.",
  },
  {
    question: "Is there a membership fee?",
    answer: "No, joining Appartali is free. You can access all basic features without any charge.",
  },
  {
    question: "How can I contact support?",
    answer: "You can contact support through our help center or by emailing support@appartali.com.",
  },
  {
    question: "Can I delete my account?",
    answer: "Yes, you can delete your account by going to settings and clicking 'Delete Account'.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#060000] min-h-screen text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="mb-6">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center bg-gray-800 px-6 py-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
              >
                <span className="text-lg">{item.question}</span>
                <span className="text-2xl">{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="bg-gray-700 mt-2 px-6 py-4 rounded-lg transition duration-300 ease-in-out">
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
