import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative min-h-[700px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/src/assets/school.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-gray-100 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white-800">
          Welcome to Our School
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Empowering students with knowledge and skills for a brighter future.
        </p>
        <Link
          to="/all-student"
          className="px-6 py-3 rounded-lg shadow-sm font-medium text-lg transition duration-300 bg-blue-600 hover:bg-blue-700 text-white"
        >
          View All Students
        </Link>
      </div>
    </div>
  );
};

export default Banner;
