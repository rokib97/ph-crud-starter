import React from "react";
import { Link } from "react-router-dom";

const studentsData = [
  {
    id: 1,
    name: "John Doe",
    age: 21,
    course: "Web Development",
    grade: "A",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 22,
    course: "Data Science",
    grade: "B",
  },
  {
    id: 3,
    name: "Emily Johnson",
    age: 20,
    course: "Machine Learning",
    grade: "A+",
  },
  {
    id: 4,
    name: "Michael Brown",
    age: 23,
    course: "Cybersecurity",
    grade: "B+",
  },
];

const StudentTable = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
          Student Information
        </h1>
        <table className="min-w-full table-auto text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-600">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Course</th>
              <th className="px-4 py-2">Grade</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student) => (
              <tr
                key={student.id}
                className="border-b border-gray-300 hover:bg-gray-50"
              >
                <td className="px-4 py-2 text-gray-700">{student.id}</td>
                <td className="px-4 py-2 text-gray-700">{student.name}</td>
                <td className="px-4 py-2 text-gray-700">{student.age}</td>
                <td className="px-4 py-2 text-gray-700">{student.course}</td>
                <td className="px-4 py-2 text-gray-700">{student.grade}</td>
                <td className="px-4 py-2">
                  <Link to={`/students/${student.id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">
                      Edit
                    </button>
                  </Link>
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
