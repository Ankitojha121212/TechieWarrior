"use client"
import React from "react";

export default function Services() {
  return (
    <div className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="bg-white text-center py-20">
        <h1 className="text-4xl font-bold text-red-600 animate-fadeInUp">
          Our Premium Services
        </h1>
        <p className="mt-4 text-lg text-black/80 animate-fadeInUp">
          Delivering innovative solutions with cutting-edge technologies.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 space-y-16 px-6">
        {/* Service 1 */}
        <div className="flex items-center gap-8 animate-fadeInUp">
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold text-red-600">
              Custom Software Development
            </h2>
            <p className="mt-2 text-black/70">
              Build tailored software solutions that perfectly meet your business
              needs using technologies like React, Node.js, Python, and more.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="/softwaredevelopment.jpg"
              alt="Software Development"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex items-center gap-8 flex-row-reverse animate-fadeInUp">
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold text-red-600">
              Web Application Development
            </h2>
            <p className="mt-2 text-black/70">
              We specialize in creating dynamic, user-friendly web applications
              optimized for performance and scalability.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="/webdevelopment.jpg"
              alt="Web Development"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-100 p-10 rounded-lg shadow-lg text-center animate-fadeInUp">
          <h3 className="text-2xl font-bold text-red-600">Why Choose Us?</h3>
          <p className="mt-4 text-black/70">
            Over <span className="font-bold">190+</span> projects delivered
            successfully. Specializing in{" "}
            <span className="font-bold">USA-based projects</span> with
            cutting-edge technologies like AI, Blockchain, and IoT.
          </p>
        </div>
      </section>

      {/* Contact Us Form */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-red-600 text-center">
            Contact Us
          </h2>
          <p className="mt-4 text-center text-black/70">
            We'd love to hear from you! Fill out the form below to get in touch.
          </p>
          <form className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-black">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
