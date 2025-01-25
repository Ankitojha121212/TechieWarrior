"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { DiTechcrunch } from "react-icons/di";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";

const Navbar = () => {
  const [top, setTop] = useState("0");

  // Logic for Navbar Hide and Show on scrolling behaviour
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setTop("0"); // Show the navbar
      } else {
        setTop("-80px"); // Hide the navbar
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div
        className="w-full h-16  px-8 bg-gradient-to-r from-slate-950 via-red-950 to-cyan-950 backdrop-filter backdrop-blur-lg hidden md:flex justify-between items-center gap-4 shadow-sm shadow-gray-300 dark:shadow-gray-800 fixed z-10 transition-all duration-500"
        style={{ top: top }}
      >
        <div className="flex items-center space-x-3">
          <img
            src="/logo.jpg"
            alt="Company Logo"
            className="h-12 w-12 object-contain mr-4 rounded-full"
          />
          <p className="text-gray-400 flex">
            <span className="text-lg font-bold">Techie Warriors</span>{" "}
            <DiTechcrunch />
          </p>
        </div>

        <div className="h-full flex gap-4 justify-center items-center mr-8">
          <Link
            className={
              " bg-gradient-to-tr from-red-400 via-red-600 to-cyan-600 text-white hover:shadow-2xl hover:transform hover:scale-105 shadow-red-700 rounded-md  font-semibold"
            }
            href="/"
          >
            <div className="h-full pb-1  px-2 flex items-center    transition-all">
              Home
            </div>
          </Link>
          <Link
            className={
              " bg-gradient-to-tr from-red-400 via-red-600 to-cyan-600 text-white hover:shadow-2xl hover:transform hover:scale-105 shadow-red-700 rounded-md  font-semibold"
            }
            href="/about"
          >
            <div className="h-full pb-1  px-2 flex items-center   transition-all">
              About us
            </div>
          </Link>

          <Link
            className={
              "bg-gradient-to-tr from-red-400 via-red-600 to-cyan-600 text-white hover:shadow-2xl hover:transform hover:scale-105 shadow-red-700 rounded-md  font-semibold"
            }
            href="/Services"
          >
            <div className="h-full pb-1  px-2 flex items-center   transition-all">
              Services
            </div>
          </Link>
          <Link
            className={
              " bg-gradient-to-tr from-red-400 via-red-600 to-cyan-600 text-white hover:shadow-2xl hover:transform hover:scale-105 shadow-red-700 rounded-md  font-semibold"
            }
            href="/blog"
          >
            <div className="h-full pb-1  px-2 flex items-center   transition-all">
              Blog
            </div>
          </Link>

          <Link
            className={
              " bg-gradient-to-tr from-red-400 via-red-600 to-cyan-600  hover:shadow-2xl hover:transform hover:scale-105 shadow-red-700 rounded-md  font-semibold"
            }
            href="/contact"
          >
            <div className="h-full pb-1  px-2 flex items-center   transition-all">
              Contact us
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
