
import Image from "next/image";
export default function Home() {
  return (
   
 
       <>
                {/* // Middle Section JSX */}
<section className="bg-black text-white py-16 px-4">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeInUp">Welcome to Our Software Company</h2>
    <p className="text-lg mb-4 animate__animated animate__fadeInUp animate__delay-1s">
      We have successfully delivered 190+ projects across various industries, from web development to AI solutions.
      Our expertise lies in providing high-quality, scalable, and efficient software solutions tailored to your business needs.
    </p>
    <p className="text-xl mb-8 animate__animated animate__fadeInUp animate__delay-2s">
      <span className="text-red-600">Technologies:</span> React, Node.js, Express, MongoDB, Python, Django, Cloud Computing, AI, and more.
    </p>
    <p className="text-xl mb-8 animate__animated animate__fadeInUp animate__delay-3s">
      <span className="text-red-600">Over 50+ USA-based projects delivered!</span>
    </p>
    <button className="bg-red-600 text-white py-2 px-6 rounded-full shadow-md hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-4s">
      Contact Us Now
    </button>
  </div>
</section>
       </>
  
      );
    }
    


