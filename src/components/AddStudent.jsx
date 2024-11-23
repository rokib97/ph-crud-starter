import React, { useState } from "react";
import student from "../assets/student.jpg";
const AddStudent = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    course: "",
    grade: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the studentData to your backend
    console.log(studentData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-6xl flex">
        {/* Left Side Image */}
        <div className="w-1/2 h-full bg-gray-200 rounded-l-lg flex justify-center items-center">
          <img
            src={student}
            alt="Student Image"
            className="w-full h-auto object-cover rounded-l-lg"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-1/2 p-6">
          <h1 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
            Add Student
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={studentData.name}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600">Age</label>
              <input
                type="number"
                name="age"
                value={studentData.age}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600">Course</label>
              <input
                type="text"
                name="course"
                value={studentData.course}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600">Grade</label>
              <input
                type="text"
                name="grade"
                value={studentData.grade}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600">Date</label>
              <input
                type="date"
                name="date"
                value={studentData.date}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all"
              >
                Add Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
