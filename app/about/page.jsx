"use client";
import { useEffect } from "react";
import "animate.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";



export default function About() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true });
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true });
  const { ref: whyChooseUsRef, inView: whyChooseUsInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    // Custom animations or JavaScript can go here.
  }, []);

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section 
  className="relative w-full min-h-screen flex items-center justify-center text-white text-center px-6"
  style={{
    backgroundImage: "url('/aboutus.jpg')", // Make sure the file exists in /public
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "overlay"
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 opacity-50"></div>

  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-3xl relative z-10"
  >
    <h1 className="text-5xl font-bold mb-4">About Us</h1>
    <p className="text-lg mb-6">
      We are a passionate team dedicated to innovation and excellence. Our mission is to create impactful solutions that drive success.
    </p>
  </motion.div>
</section>


      {/* Button-Like Sections */}
      <section ref={missionRef} className="py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Story */}
          <div
            className={`p-8 rounded-lg shadow-lg bg-gray-100 transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer ${missionInView ? "animate__animated animate__zoomIn" : "opacity-0 scale-90"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="text-2xl font-bold text-center">Our Mission</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To empower businesses worldwide by delivering innovative, user-friendly software solutions that drive growth,
              efficiency, and success.
            </p>
          </div>
          <div
            className={`p-8 rounded-lg shadow-lg bg-gray-100 transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer ${missionInView ? "animate__animated animate__zoomIn" : "opacity-0 scale-90"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-2xl font-bold text-red-600 text-center">Our Vision</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To be a globally recognized software company, renowned for our expertise, quality, and commitment to client success.
            </p>
          </div>
          <div
            className={`p-8 rounded-lg shadow-lg bg-gray-100 transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer ${missionInView ? "animate__animated animate__zoomIn" : "opacity-0 scale-90"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-2xl font-bold text-red-600 text-center">Our Values</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✅ <strong>Innovation:</strong> Embracing creativity and technology.</li>
              <li>✅ <strong>Integrity:</strong> Building trust through honesty.</li>
              <li>✅ <strong>Excellence:</strong> Delivering quality solutions.</li>
              <li>✅ <strong>Collaboration:</strong> Fostering strong partnerships.</li>
            </ul>
          </div>
          {/* Timeline */}
          <div
            className={`p-8 rounded-lg shadow-lg bg-gray-100 transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer ${missionInView ? "animate__animated animate__zoomIn" : "opacity-0 scale-90"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="text-2xl font-bold text-center">Our Timeline</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>📌 <strong>2015:</strong> Company founded with a focus on custom software.</li>
              <li>📌 <strong>2017:</strong> Expanded globally with clients in the USA and Europe.</li>
              <li>📌 <strong>2019:</strong> Launched AI-driven tools and cloud solutions.</li>
              <li>📌 <strong>2022:</strong> Delivered 190+ successful projects.</li>
              <li>📌 <strong>2024:</strong> Recognized as a top software solutions provider.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl text-red-600 font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className={`p-6 bg-white rounded-lg shadow-lg transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer ${teamInView ? "animate__animated animate__fadeInUp" : "opacity-0 translate-y-10"}`}>
              <h3 className="text-xl font-semibold">Roshan Dubey</h3>
              <p className="text-sm text-red-600">CEO & Founder</p>
              <p className="mt-2 text-gray-700">
                Visionary leader with over a decade of experience in software innovation.
              </p>
            </div>
            <div className={`p-6 bg-white rounded-lg shadow-lg transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer ${teamInView ? "animate__animated animate__fadeInUp" : "opacity-0 translate-y-10"}`}>
              <h3 className="text-xl font-semibold">Ankit Ojha</h3>
              <p className="text-sm text-red-600">CTO</p>
              <p className="mt-2 text-gray-700">
                Technology enthusiast spearheading cutting-edge solutions.
              </p>
            </div>
            <div className={`p-6 bg-white rounded-lg shadow-lg transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer ${teamInView ? "animate__animated animate__fadeInUp" : "opacity-0 translate-y-10"}`}>
              <h3 className="text-xl font-semibold">Vivek Tiwari</h3>
              <p className="text-sm text-red-600">Lead Developer</p>
              <p className="mt-2 text-gray-600">
                Expert in crafting efficient systems for global clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyChooseUsRef} className="py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl text-red-600 font-bold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              className={`p-8 bg-gray-100 rounded-lg shadow-lg transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer ${whyChooseUsInView ? "animate__animated animate__fadeInUp" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-xl text-red-600 font-semibold">Global Reach</h3>
              <p className="mt-4 text-gray-700">
                Delivering successful projects to clients across 10+ countries.
              </p>
            </div>
            <div
              className={`p-8 bg-gray-100 rounded-lg shadow-lg transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer ${whyChooseUsInView ? "animate__animated animate__fadeInUp" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-xl text-red-600 font-semibold">Proven Expertise</h3>
              <p className="mt-4 text-gray-700">
                Over 190+ projects completed with a 98% satisfaction rate.
              </p>
            </div>
            <div
              className={`p-8 bg-gray-100 rounded-lg shadow-lg transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer ${whyChooseUsInView ? "animate__animated animate__fadeInUp" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-xl text-red-600 font-semibold">Innovative Solutions</h3>
              <p className="mt-4 text-gray-700">
                Pioneers in integrating AI, IoT, and cloud technologies.
              </p>
            </div>
            <div
              className={`p-8 bg-gray-100 rounded-lg shadow-lg transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer ${whyChooseUsInView ? "animate__animated animate__fadeInUp" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-xl text-red-600 font-semibold">Client-Centric Approach</h3>
              <p className="mt-4 text-gray-700">
                Tailored strategies and 24/7 support for every client.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}