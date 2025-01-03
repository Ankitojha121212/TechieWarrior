"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Warrior Software exceeded our expectations! The team was professional, efficient, and delivered on time.",
  },
  {
    name: "Jane Smith",
    feedback: "Amazing experience working with Warrior Software. They transformed our idea into a reality!",
  },
  {
    name: "Michael Brown",
    feedback: "Highly recommended! The best software company we've worked with so far.",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-red-600 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          What Our Clients Say
        </h2>

        <div className="relative">
          {/* Testimonials */}
          <div className="text-xl italic">
            {testimonials[current].feedback}
          </div>
          <p className="mt-4 text-sm font-bold">{testimonials[current].name}</p>

          {/* Navigation */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-black text-white rounded-full p-2 hover:bg-gray-800"
            >
              &#8249;
            </button>
            <button
              onClick={nextSlide}
              className="bg-black text-white rounded-full p-2 hover:bg-gray-800"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
