"use client";

import React from "react";

const blog = () => {
  const blogs = [
    {
      title: "The Future of AI in Software Development",
      date: "January 3, 2025",
      description:
        "Discover how AI is revolutionizing the software industry, from automated coding to predictive analytics. Learn how companies are leveraging this technology to enhance productivity and efficiency.",
      image: "/aisoftwaredev.jpg",
    },
    {
      title: "Best Practices for Full Stack Developers",
      date: "December 25, 2024",
      description:
        "Explore the key practices every full-stack developer should follow for optimal performance, scalability, and maintainability in web applications.",
      image: "/bestpractice.jpg",
    },
    {
      title: "How to Use Cloud Computing Effectively",
      date: "November 30, 2024",
      description:
        "Understand the benefits and challenges of cloud computing and how software companies are using it to scale their operations.",
      image: "/cloudcomputing.jpg",
    },
    {
      title: "Top 10 Programming Languages for 2025",
      date: "October 15, 2024",
      description:
        "Find out which programming languages are dominating the software development landscape in 2025 and why you should learn them.",
      image: "/language.jpg",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen py-12 px-6">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Our Blog</h1>
        <p className="text-lg text-gray-600 mt-2">
          Stay updated with the latest insights, trends, and best practices in software development.
        </p>
      </header>

      {/* Blog Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-red-600">{blog.title}</h2>
              <p className="text-sm text-gray-500">{blog.date}</p>
              <p className="mt-4 text-gray-700">{blog.description}</p>
              <button className="mt-6 w-full bg-red-600 hover:bg-black text-white py-2 rounded-lg transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default blog;
