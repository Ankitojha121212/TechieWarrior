"use client";
 import React from "react";
import Image from "next/image";

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
    <>
      <div className="bg-white text-black">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center px-8">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-6xl font-extrabold tracking-tight text-black animate__animated animate__fadeInDown">
              Crafting Software Excellence
            </h1>
            <p className="text-xl font-light text-gray-600 animate__animated animate__fadeInUp">
              Delivering innovative solutions to empower your business. Partner
              with us today.
            </p>
            <button className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition animate__animated animate__pulse animate__infinite">
              Get a Free Consultation
            </button>
          </div>
        </section>
        {/* Services Overview */}
      
        <div
          id="services"
          className=" flex flex-col justify-center items-center px-8"
        >
          <div>
            <h2 className="mt-24 text-center  text-4xl font-bold">
              <span className="border-2 border-black px-4 py-1 rounded-md shadow-sm shadow-black">
                Services Overview
              </span>
            </h2>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-2 mt-8">
              {ServiceData.map((item, index) => (
                <div
                  key={index}
                  className="hover:cursor-pointer mt-4 hover:z-50 md:mb-0 mb-4 p-2  flex flex-col gap-5 h-72 justify-center m-auto text-start  bg-blue-500 bg-opacity-10 hover:shadow-2xl 
           rounded-lg hover:transition hover:duration-700 shadow-md shadow-black hover:indent-10 hover:shadow-black hover:ease-in-out hover:bg-gradient-to-tr from-red-100 via-white to-cyan-100 hover:text-black transform hover:-translate-y-1 hover:scale-110   "
                >
                  <p className="text-center text-xl font-bold">
                    {item.title.split(" ")[0]}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-red-700 to-cyan-700">
                      {" "}
                      {item.title.split(" ")[1]}{" "}
                    </span>
                  </p>
                  <p className="pt-2 font-sans hover:font-semibold">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Key Statistics */}
        <section className="py-16 px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 animate__animated animate__fadeInDown">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="animate__animated animate__fadeInUp">
                <h3 className="text-5xl font-bold text-red-600">190+</h3>
                <p className="mt-2 text-gray-600">Projects Delivered</p>
              </div>
              <div className="animate__animated animate__fadeInUp">
                <h3 className="text-5xl font-bold text-red-600">150+</h3>
                <p className="mt-2 text-gray-600">Satisfied Clients</p>
              </div>
              <div className="animate__animated animate__fadeInUp">
                <h3 className="text-5xl font-bold text-red-600">8+</h3>
                <p className="mt-2 text-gray-600">Years of Experience</p>
              </div>
              <div className="animate__animated animate__fadeInUp">
                <h3 className="text-5xl font-bold text-red-600">10+</h3>
                <p className="mt-2 text-gray-600">Global Markets</p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Preview */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 animate__animated animate__fadeInDown">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition transform animate__animated animate__fadeInUp">
                <p className="text-gray-700 italic">
                  "Their team delivered exactly what we needed. Professional and
                  efficient!"
                </p>
                <h3 className="mt-4 text-red-600 font-bold">- John Doe, CEO</h3>
              </div>
              <div className="p-8 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition transform animate__animated animate__fadeInUp">
                <p className="text-gray-700 italic">
                  "Great experience! They turned our vision into reality with
                  their expertise."
                </p>
                <h3 className="mt-4 text-red-600 font-bold">
                  - Jane Smith, Founder
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action */}
        {/* <section className="py-16 px-8 bg-red-600 text-white">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg">
              Let’s turn your ideas into impactful software solutions. Contact
              us today!
            </p>
            <button className="px-6 py-3 bg-white text-red-600 rounded-lg shadow-lg hover:bg-gray-100 transition">
              Contact Us Now
            </button>
          </div>
        </section> */}
      </div>
    </>
  );
}
