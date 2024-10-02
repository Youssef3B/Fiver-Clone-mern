import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We have a 30-day return policy for all products purchased from our website.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order by logging into your account and checking the order status. We will also send you an email with the tracking information once your order has been shipped.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="px-64 py-8">
      <h2 className="text-center font-bold text-2xl">COMMON QUESTIONS</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          onClick={() => handleToggle(index)}
          className="border bg-slate-100 px-5 py-3 rounded-md transition-all cursor-pointer my-4"
        >
          <div className="flex justify-between items-center relative">
            <h4 className="font-bold">{faq.question}</h4>
            <span>
              <FaPlus />
            </span>
          </div>
          {openIndex === index && (
            <div className="py-4 transition-all">
              <p className="font-semibold">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;
