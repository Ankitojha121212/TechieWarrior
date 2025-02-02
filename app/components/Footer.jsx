"use client";


export default function Footer() {
 

  return (
    <footer className="relative bg-gradient-to-br from-red-600 to-black text-white">
      {/* Curved Section */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,154.7C672,149,768,139,864,149.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
        <p className="mb-6">
          Let’s work together and make your dream project a reality!
        </p>
        <button
         
          className="animate-pulse glossy-button transition-transform duration-300 transform hover:scale-110"
        >
          Contact Us
        </button>
      </div>

      <div className="mt-8">
        <ul className="flex justify-center text-red-500 space-x-6 text-sm">
          <li className="hover:underline">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="hover:underline">
            <a href="#">Terms of Service</a>
          </li>
          <li className="hover:underline">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
