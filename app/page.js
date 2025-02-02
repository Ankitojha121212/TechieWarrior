"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // For animations

import Particles from "react-tsparticles";


// Service Data
const ServiceData = [
  {
    title: "Web Development",
    description:
      "Ignite your online presence with Floppy Technology. We specialize in sleek, user-friendly websites, blending innovation and creativity for a distinctive digital experience. Elevate with style!",
  },
  {
    title: "Software Development",
    description:
      "Simplified Database, Latest Frameworks, Standard Development are the signs expertise to success used by our experienced software programmers.",
  },
  {
    title: "Digital Marketing",
    description:
      "We are leading best digital marketing services, specializing in SEO, SMO, PPC, Social media marketing, Web analytics and e-mail marketing.",
  },
  {
    title: "Mobile App Development",
    description:
      "We are a creative team of website designers as well as developers that loves turning complex problems into simple, stunning and intuitive designs.",
  },
  {
    title: "Hosting Services",
    description:
      "Here at Floppy Technology offer domain registration in India at very reasonable price with no hidden costs. Our belief is that a lasting relation can just be built on faith and trust.",
  },
  {
    title: "Graphic Design",
    description:
      "Floppy Technology is a professional graphic design and web marketing to boost traffic as well as increase customer base. Our designing team has the expertise to offer a complete range of graphic design.",
  },
  {
    title: "Bulk SMS Services",
    description:
      "Elevate your communication strategy with our cutting-edge Bulk SMS Service. Seamlessly reach your target audience, whether it's for promotions, announcements, or personalized messages.",
  },
  {
    title: "Website Deployment",
    description:
      "Launch your online presence seamlessly with us. We handle the technical intricacies, ensuring a smooth transition from development to live deployment. Trust us to optimize performance, enhance security, and provide a flawless user experience.",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-black">
    {/* Hero Section */}
    <section className="relative h-screen flex items-center justify-between px-8 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/tech-background.jpg" // Replace with your background image
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20" // Adjust opacity as needed
          />
        </div>

        {/* Left Side: Text Content */}
        <div className="max-w-2xl space-y-6 text-left ml-16 z-10">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold tracking-tight text-black"
          >
            Crafting Software Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl font-light text-gray-600"
          >
            Delivering innovative solutions to empower your business. Partner
            with us today.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition"
          >
            Get a Free Consultation
          </motion.button>

          {/* Running Text Animation */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-0 whitespace-nowrap text-2xl font-bold text-red-600"
          >
            Transforming Ideas into Reality • Building Scalable Solutions •
            Innovating for the Future •
          </motion.div>
        </div>

      {/* Right Side: Tech Illustration */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="relative w-1/3  flex items-center justify-center z-10"
>
  <Image
    src="/undraw_programmer_raqr.svg" // Replace with your tech illustration
    alt="Tech Illustration"
    width={400} // Adjusted width
    height={400} // Adjusted height
    className="z-10"
  />
</motion.div>
      </section>

     {/* Services Overview */}
     <section
        id="services"
        className="flex flex-col justify-center items-center px-8 py-16 bg-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="border-2 border-black px-4 py-1 rounded-md shadow-sm shadow-black">
            Services Overview
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 max-w-6xl mx-auto">
          {ServiceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 flex flex-col gap-4 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-center text-xl font-bold">
                {item.title.split(" ")[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                  {" "}
                  {item.title.split(" ")[1]}
                </span>
              </p>
              <p className="text-gray-600 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

     {/* Key Statistics */}
     <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-black mb-16"
          >
            Our Achievements
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "190+", label: "Projects Delivered" },
              { value: "150+", label: "Satisfied Clients" },
              { value: "8+", label: "Years of Experience" },
              { value: "10+", label: "Global Markets" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-5xl font-bold text-red-600">{item.value}</h3>
                <p className="mt-2 text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-black mb-16"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Their team delivered exactly what we needed. Professional and efficient!",
                name: "Kishan, CEO of Kedia",
              },
              {
                quote:
                  "Great experience! They turned our vision into reality with their expertise.",
                name: "Vivek Tiwari, Founder of TheGrowFood",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <p className="text-gray-700 italic">{item.quote}</p>
                <h3 className="mt-4 text-red-600 font-bold">- {item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  </div>
  );
}