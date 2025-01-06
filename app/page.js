"use client";
import Image from "next/image";
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
            Delivering innovative solutions to empower your business. Partner with us today.
          </p>
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition animate__animated animate__pulse animate__infinite">
            Get a Free Consultation
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-8 animate__animated animate__fadeInDown">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition transform animate__animated animate__fadeInUp">
              <h3 className="text-xl font-bold text-red-600">Web Development</h3>
              <p className="mt-4 text-gray-700">
                Building responsive, fast, and secure websites tailored to your needs.
              </p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition transform animate__animated animate__fadeInUp">
              <h3 className="text-xl font-bold text-red-600">Mobile App Development</h3>
              <p className="mt-4 text-gray-700">
                Crafting intuitive and user-friendly apps for iOS and Android.
              </p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition transform animate__animated animate__fadeInUp">
              <h3 className="text-xl font-bold text-red-600">AI & Machine Learning</h3>
              <p className="mt-4 text-gray-700">
                Leveraging AI to provide data-driven insights and automation.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                "Their team delivered exactly what we needed. Professional and efficient!"
              </p>
              <h3 className="mt-4 text-red-600 font-bold">- John Doe, CEO</h3>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition transform animate__animated animate__fadeInUp">
              <p className="text-gray-700 italic">
                "Great experience! They turned our vision into reality with their expertise."
              </p>
              <h3 className="mt-4 text-red-600 font-bold">- Jane Smith, Founder</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold">Ready to Build Something Amazing?</h2>
          <p className="text-lg">
            Let’s turn your ideas into impactful software solutions. Contact us today!
          </p>
          <button className="px-6 py-3 bg-white text-red-600 rounded-lg shadow-lg hover:bg-gray-100 transition">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>


        
       </>
  
      );
    }
    


