import { useState } from "react";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

function JobCard({
  id,
  company,
  logo,
  role,
  location,
  salary,
  skills,
  experience,
  type,
  onSaveJob,
}) {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {/* Job Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
        }}
        className="bg-white rounded-3xl shadow-lg p-7 hover:shadow-2xl transition duration-300"
      >

        {/* Top */}
        <div className="flex items-center justify-between mb-6">

          {/* Company */}
          <div className="flex items-center gap-4">

            {/* Logo */}
            <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center overflow-hidden p-2">

              <img
                src={logo}
                alt={company}
                className="w-full h-full object-contain"
              />

            </div>

            {/* Info */}
            <div>

              <h2 className="text-2xl font-bold text-gray-800">
                {company}
              </h2>

              <p className="text-gray-500">
                {role}
              </p>

            </div>

          </div>

          {/* Match */}
          <div className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
            92% Match
          </div>

        </div>

        {/* Details */}
        <div className="space-y-3 mb-6">

          <p className="text-gray-600">
            📍 {location}
          </p>

          <p className="text-green-600 font-semibold">
            💰 {salary}
          </p>

          <p className="text-gray-600">
            🧠 {experience}
          </p>

          <p className="text-gray-600">
            💼 {type}
          </p>

        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 mb-8">

          {skills.map((skill, index) => (

            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>

          ))}

        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          {/* Apply Now */}
          <button
            onClick={() => setShowDetails(true)}
            className="flex-1 bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
          >

            Apply Now

          </button>

          {/* Save Job */}
          <button
            onClick={() => {

              onSaveJob({
                id,
                company,
                logo,
                role,
                location,
                salary,
                skills,
                experience,
                type,
              });

              toast.success("Job Saved Successfully");

            }}
            className="flex-1 bg-purple-100 text-purple-600 py-3 rounded-2xl font-semibold hover:bg-purple-200 transition"
          >

            Save Job

          </button>

        </div>

      </motion.div>

      {/* Job Details Modal */}
      {showDetails && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

          <div className="bg-white w-full max-w-3xl rounded-3xl p-8 relative max-h-[90vh] overflow-y-auto">

            {/* Close */}
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-5 right-5 bg-red-100 text-red-500 px-4 py-2 rounded-xl"
            >
              X
            </button>

            {/* Company */}
            <div className="flex items-center gap-5 mb-8">

              <div className="w-20 h-20 bg-gray-100 rounded-3xl p-3 flex items-center justify-center">

                <img
                  src={logo}
                  alt={company}
                  className="w-full h-full object-contain"
                />

              </div>

              <div>

                <h1 className="text-4xl font-bold text-gray-800">
                  {company}
                </h1>

                <p className="text-gray-500 text-lg">
                  {role}
                </p>

              </div>

            </div>

            {/* Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">

              <div className="bg-blue-50 p-5 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">
                  Experience
                </h3>

                <p>{experience}</p>
              </div>

              <div className="bg-green-50 p-5 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">
                  Salary
                </h3>

                <p>{salary}</p>
              </div>

              <div className="bg-purple-50 p-5 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">
                  Location
                </h3>

                <p>{location}</p>
              </div>

              <div className="bg-orange-50 p-5 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">
                  Job Type
                </h3>

                <p>{type}</p>
              </div>

            </div>

            {/* Skills */}
            <div className="mb-8">

              <h2 className="text-2xl font-bold mb-5">
                Skills Required
              </h2>

              <div className="flex flex-wrap gap-3">

                {skills.map((skill, index) => (

                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            {/* Job Description */}
            <div className="mb-8">

              <h2 className="text-2xl font-bold mb-5">
                Job Description
              </h2>

              <div className="bg-gray-50 p-6 rounded-2xl leading-8 text-gray-700">

                We are looking for a passionate and skilled {role}
                to join our growing team at {company}. The candidate
                should have strong technical knowledge, problem-solving
                skills, and the ability to work collaboratively in a
                fast-paced environment.

                <br /><br />

                Responsibilities include developing scalable applications,
                improving UI/UX, collaborating with teams, debugging issues,
                and delivering high-quality software solutions.

              </div>

            </div>

            {/* Apply Button */}
            <button
              onClick={() => {
                toast.success("Application Submitted Successfully");
                setShowDetails(false);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold transition"
            >

              Submit Application

            </button>

          </div>

        </div>

      )}

    </>
  );
}

export default JobCard;