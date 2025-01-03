"use client";

import React from "react";

const contact = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header */}
      <header className="bg-red-600 text-white py-8 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">We'd love to hear from you!</p>
        </div>
      </header>

      {/* Contact Info Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-red-600">Our Address</h2>
            <p className="mt-4 text-gray-700">
              123 Software Street, Tech City, Code State, 56789
            </p>
            <p className="mt-2 text-gray-700">Email: info@softwarecompany.com</p>
            <p className="mt-2 text-gray-700">Phone: +1 (123) 456-7890</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-red-600">Business Hours</h2>
            <p className="mt-4 text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="mt-2 text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="mt-2 text-gray-700">Sunday: Closed</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
            Send Us a Message
          </h2>
          <form className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>
            <button className="w-full bg-red-600 hover:bg-black text-white py-4 rounded-lg shadow-lg transition-all duration-300">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
            Visit Our Office
          </h2>
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222.2045239623971!2d75.87841869236031!3d26.989932114243857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db0698dc22051%3A0xd18dcdf341e0b005!2sBha%20Niwas%2C%209A%2C%20Kunda%2C%20Amer%2C%20Jaipur%2C%20Rajasthan%20302028!5e0!3m2!1sen!2sin!4v1735910134163!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">How can I reach customer support?</h3>
              <p className="mt-2 text-gray-700">
                You can reach us via email at support@softwarecompany.com or call us at +1
                (123) 456-7890.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">
                Do you offer customized software solutions?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes, we specialize in custom software solutions tailored to your business
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default contact;
