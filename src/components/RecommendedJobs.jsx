import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RecommendedJobs({ jobs }) {

  const [savedJobs, setSavedJobs] = useState([]);

  const handleSaveJob = (jobId) => {

    if (savedJobs.includes(jobId)) {

      setSavedJobs(
        savedJobs.filter((id) => id !== jobId)
      );

      toast.info("Job Removed from Saved", {
        position: "top-right",
        autoClose: 2000,
      });

    } else {

      setSavedJobs([...savedJobs, jobId]);

      toast.success("Job Saved Successfully", {
        position: "top-right",
        autoClose: 2000,
      });

    }

  };

  return (

    <>

      <div className="grid md:grid-cols-2 gap-6">

        {jobs.map((job) => (

          <div
            key={job.id}
            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
          >

            {/* Top */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">

              <div className="flex items-center gap-4">

                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-16 h-16 rounded-2xl object-cover shadow"
                />

                <div>

                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">

                    {job.company}

                  </h2>

                  <p className="text-gray-500 text-base md:text-lg">

                    {job.role}

                  </p>

                </div>

              </div>

              <div className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-semibold text-sm w-fit">

                92% Match

              </div>

            </div>

            {/* Details */}
            <div className="space-y-4 text-gray-700">

              <p className="text-base md:text-lg">
                ◉ {job.location}
              </p>

              <p className="text-base md:text-lg font-semibold text-green-600">
                ₹ {job.salary}
              </p>

              <p className="text-base md:text-lg">
                ⌛ {job.experience}
              </p>

              <p className="text-base md:text-lg">
                ◈ {job.type}
              </p>

            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-6">

              {job.skills.map((skill, index) => (

                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium"
                >

                  {skill}

                </span>

              ))}

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              {/* Apply Button */}
              <button
                onClick={() =>
                  document
                    .getElementById(`apply-modal-${job.id}`)
                    .showModal()
                }
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition"
              >

                Apply Now

              </button>

              {/* Save Job Button */}
              <button
                onClick={() => handleSaveJob(job.id)}
                className={`flex-1 py-3 rounded-2xl font-semibold transition ${
                  savedJobs.includes(job.id)
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >

                {savedJobs.includes(job.id)
                  ? "Saved"
                  : "Save Job"}

              </button>

            </div>

            {/* Apply Modal */}
            <dialog
              id={`apply-modal-${job.id}`}
              className="rounded-3xl p-0 backdrop:bg-black/60 w-[90%] max-w-2xl m-auto"
            >

              <div className="bg-white rounded-3xl p-6 md:p-8">

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">

                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-16 h-16 rounded-2xl"
                  />

                  <div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">

                      {job.company}

                    </h2>

                    <p className="text-gray-500 text-lg">

                      {job.role}

                    </p>

                  </div>

                </div>

                {/* Job Details */}
                <div className="space-y-4 text-gray-700 mb-8">

                  <p>

                    <span className="font-semibold">
                      Location:
                    </span>{" "}

                    {job.location}

                  </p>

                  <p>

                    <span className="font-semibold">
                      Salary:
                    </span>{" "}

                    ₹ {job.salary}

                  </p>

                  <p>

                    <span className="font-semibold">
                      Experience:
                    </span>{" "}

                    {job.experience}

                  </p>

                  <p>

                    <span className="font-semibold">
                      Job Type:
                    </span>{" "}

                    {job.type}

                  </p>

                  <p>

                    <span className="font-semibold">
                      Required Skills:
                    </span>{" "}

                    {job.skills.join(", ")}

                  </p>

                </div>

                {/* Job Description */}
                <div className="bg-gray-100 rounded-2xl p-5 mb-8">

                  <h3 className="text-xl font-bold text-gray-800 mb-4">

                    Job Description

                  </h3>

                  <p className="text-gray-600 leading-8">

                    We are looking for a passionate{" "}
                    {job.role} to join our team at{" "}
                    {job.company}. The candidate should
                    have strong problem-solving skills,
                    good communication, and hands-on
                    experience with modern technologies.
                    You will collaborate with teams,
                    develop scalable solutions, and
                    contribute to innovative projects.

                  </p>

                </div>

                {/* Application Form */}
                <div className="space-y-5">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400"
                  />

                  {/* Upload Resume */}
                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-3">

                      Upload Resume

                    </label>

                    <input
                      type="file"
                      className="w-full border border-gray-300 p-3 rounded-2xl bg-white outline-none focus:ring-2 focus:ring-blue-400"
                    />

                  </div>

                </div>

                {/* Modal Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">

                  <button
                    onClick={() => {

                      toast.success(
                        `Applied for ${job.role} at ${job.company}`,
                        {
                          position: "top-right",
                          autoClose: 3000,
                        }
                      );

                      document
                        .getElementById(`apply-modal-${job.id}`)
                        .close();

                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition"
                  >

                    Submit Application

                  </button>

                  <button
                    onClick={() =>
                      document
                        .getElementById(`apply-modal-${job.id}`)
                        .close()
                    }
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-2xl font-semibold transition"
                  >

                    Cancel

                  </button>

                </div>

              </div>

            </dialog>

          </div>

        ))}

      </div>

      {/* Toast */}
      <ToastContainer />

    </>

  );
}

export default RecommendedJobs;