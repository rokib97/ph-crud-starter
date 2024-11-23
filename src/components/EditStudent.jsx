import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

const EditStudent = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null || {});

  useEffect(() => {
    const foundStudent = studentsData.find((s) => s.id === parseInt(studentId));
    if (foundStudent) setStudent(foundStudent);
  }, [studentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Student Data:", student);
    // Simulate PUT/PATCH request here
  };

  if (!student) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          Edit Student
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={student.name}
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
              defaultValue={student.age}
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
              defaultValue={student.course}
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
              defaultValue={student.grade}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
