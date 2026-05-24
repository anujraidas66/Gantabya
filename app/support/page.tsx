"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How far can be Gantabya bikes goes on single charge?",
    answer:
      "Our bikes range 300km on a full charge, depending on riding conditions and terrain.",
  },
  {
    question: "How long does it take to charge?",
    answer:
      "Charging usually takes around 4-6 hours depending on the battery capacity.",
  },
  {
    question: "What warranty do you offer?",
    answer:
      "We provide a 2-year warranty on battery and motor components.",
  },
  {
    question: "Where can I get my bike serviced?",
    answer:
      "You can service your bike at any authorized Gantabya service center.",
  },
  {
    question: "Is financing available?",
    answer:
      "Yes, easy EMI and financing options are available through our partners.",
  },
  {
    question: "Can I ride in rain?",
    answer:
      "Yes, our bikes are designed with water-resistant components for rainy conditions.",
  },
];

function FAQCard({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="bg-[#111111] rounded-xl overflow-hidden border border-transparent hover:border-[#00E676]/20 transition-all duration-300">
      {/* Question */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <h3 className="text-sm md:text-base text-gray-300 font-medium">
          {item.question}
        </h3>

        <div className="min-w-24px min-h-6 rounded bg-[#00E676] flex items-center justify-center">
          {isOpen ? (
            <ChevronUp size={16} className="text-black" />
          ) : (
            <ChevronDown size={16} className="text-black" />
          )}
        </div>
      </button>

      {/* Answer */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm md:text-base text-gray-300 leading-7">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-black min-h-screen text-white px-6 md:px-12 lg:px-20 py-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00E676]">
          Support
        </h1>
      </div>

      {/* FAQ Title */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          {faqs.slice(0, 3).map((item, index) => (
            <FAQCard
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {faqs.slice(3).map((item, index) => {
            const actualIndex = index + 3;

            return (
              <FAQCard
                key={actualIndex}
                item={item}
                isOpen={openIndex === actualIndex}
                onClick={() => handleToggle(actualIndex)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}