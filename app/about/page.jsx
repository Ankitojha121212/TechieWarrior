"use client";
import { useEffect } from "react";
import "animate.css";
import Link from "next/link";

export default function About() {
  useEffect(() => {
    // You can initialize any additional JavaScript or animations here if needed.
  }, []);

  return (
    <div className="overflow-hidden bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-r from-red-600 via-black to-red-600 flex items-center justify-center text-center px-8 animate__animated animate__fadeIn">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight animate__animated animate__fadeIn animate__delay-1s">
            Welcome to Our Company
          </h1>
          <p className="text-xl font-light animate__animated animate__fadeIn animate__delay-2s">
            We specialize in creating innovative software solutions for businesses of all sizes. With over 190+ projects delivered globally, we are your trusted partner in growth.
          </p>
          <Link href="#our-story">
            <button className="mt-8 px-8 py-4 bg-black text-red-600 rounded-lg shadow-xl hover:scale-110 transition-all duration-300">
              Learn More About Us
            </button>
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="h-screen bg-black flex flex-col items-center justify-center text-center space-y-4 px-8 animate__animated animate__fadeIn animate__delay-3s">
        <h2 className="text-4xl font-semibold">Our Story</h2>
        <p className="max-w-3xl text-lg font-light">
          Founded in 2015, we have successfully delivered over 190+ projects worldwide. Our team is passionate about crafting user-friendly, impactful solutions that drive success for our clients.
        </p>
        <div className="space-x-6">
          <Link href="#technologies">
            <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              Explore Our Technologies
            </button>
          </Link>
          <Link href="#achievements">
            <button className="mt-6 px-6 py-3 bg-black text-red-600 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              Our Achievements
            </button>
          </Link>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="h-screen bg-gradient-to-r from-red-600 via-black to-red-600 flex flex-col items-center justify-center space-y-6 px-8 animate__animated animate__fadeIn animate__delay-4s">
        <h2 className="text-4xl font-semibold">Technologies We Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-black rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 animate__animated animate__zoomIn">
            <h3 className="text-2xl font-bold">React</h3>
            <p>Building modern and dynamic user interfaces with React, ensuring fast and responsive experiences.</p>
          </div>
          <div className="p-6 bg-black rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 animate__animated animate__zoomIn">
            <h3 className="text-2xl font-bold">Node.js</h3>
            <p>Building scalable backend systems and APIs using the power of Node.js to handle high traffic loads efficiently.</p>
          </div>
          <div className="p-6 bg-black rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 animate__animated animate__zoomIn">
            <h3 className="text-2xl font-bold">MongoDB</h3>
            <p>Efficiently managing and storing data with MongoDB’s NoSQL database solutions, ensuring flexibility and scalability.</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="h-screen bg-black flex flex-col items-center justify-center space-y-4 px-8 animate__animated animate__fadeIn animate__delay-5s">
        <h2 className="text-4xl font-semibold">Our Achievements</h2>
        <p className="max-w-3xl text-lg font-light text-center">
          Over the years, we’ve delivered 190+ successful projects, including more than 50 projects for clients in the USA. Our impact on global businesses is undeniable.
        </p>
      </section>

      {/* Client Testimonials Section */}
      <section id="testimonials" className="h-screen bg-gradient-to-r from-red-600 via-black to-red-600 flex flex-col items-center justify-center text-center px-8 animate__animated animate__fadeIn animate__delay-6s">
        <h2 className="text-4xl font-semibold">Client Testimonials</h2>
        <div className="space-y-6 mt-8">
          <p className="italic text-xl">
            "The team at [Company Name] transformed our business with their innovative solutions!"
          </p>
          <p className="italic text-xl">
            "Working with them was a great experience. Highly professional and reliable!"
          </p>
          <p className="italic text-xl">
            "The best software development team we've ever worked with!"
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-6 text-center">
        <p>&copy; 2025 [Company Name]. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
