function RecommendedJobs({ jobs }) {

  return (

    <div className="grid md:grid-cols-2 gap-6">

      {jobs.map((job) => (

        <div
          key={job.id}
          className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
        >

          {/* Top */}
          <div className="flex items-start justify-between mb-6">

            <div className="flex items-center gap-4">

              <img
                src={job.logo}
                alt={job.company}
                className="w-16 h-16 rounded-2xl object-cover shadow"
              />

              <div>

                <h2 className="text-2xl font-bold text-gray-800">

                  {job.company}

                </h2>

                <p className="text-gray-500 text-lg">

                  {job.role}

                </p>

              </div>

            </div>

            <div className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-semibold text-sm">

              92% Match

            </div>

          </div>

          {/* Details */}
          <div className="space-y-4 text-gray-700">

            <p className="text-lg">
              ◉ {job.location}
            </p>

            <p className="text-lg font-semibold text-green-600">
              ₹ {job.salary}
            </p>

            <p className="text-lg">
              ⌛ {job.experience}
            </p>

            <p className="text-lg">
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

          {/* Button */}
          <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition">

            Apply Now

          </button>

        </div>

      ))}

    </div>

  );
}

export default RecommendedJobs;