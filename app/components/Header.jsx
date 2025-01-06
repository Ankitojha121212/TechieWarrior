"use client";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-black text-white py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.jpg" // Replace with your logo file in the "public" folder
            alt="Company Logo"
            className="h-10 w-10 object-contain mr-9"
          />
          <h1 className="text-2xl font-bold text-red-500">TechieWarrior</h1>
        </div>

    {/* Navigation Section */}
<nav className="flex items-center space-x-6">
  <Link href="/" className="text-lg font-medium text-white hover:text-red-500 transition duration-300">Home</Link>
  <Link href="/about" className="text-lg font-medium text-white hover:text-red-500 transition duration-300">
    About Us
  </Link>
<Link href="/Services" className="text-lg font-medium text-white hover:text-red-500 transition duration-300">Services</Link>


  <Link
    href="/blog"
    className="text-lg font-medium text-white hover:text-red-500 transition duration-300"
  >
    Blog
  </Link>
  <Link
    href="/contact"
    className="text-lg font-medium text-white hover:text-red-500 transition duration-300"
  >
    Contact
  </Link>
</nav>



        {/* Call to Action Button */}
        <div>
          <a
            href="#get-started"
            className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 shadow-lg hover:shadow-red-500/50 transition duration-500"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
