import Sidebar from "../components/Sidebar";

function SavedJobs() {

  const jobs = [

    {
      company: "Google",
      role: "Frontend Developer",
      location: "Hyderabad",
      salary: "₹8 LPA",
    },

    {
      company: "Amazon",
      role: "React Developer",
      location: "Bangalore",
      salary: "₹10 LPA",
    },

    {
      company: "Microsoft",
      role: "UI/UX Designer",
      location: "Remote",
      salary: "₹7 LPA",
    },

  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-[320px] hidden lg:block">

        <Sidebar />

      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">

        {/* Heading */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-gray-800">
            ❤️ Saved Jobs
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Manage your saved opportunities
          </p>

        </div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {jobs.map((job, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-7 hover:shadow-2xl transition"
            >

              {/* Top */}
              <div className="flex items-center gap-4 mb-6">

                {/* Logo */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center text-2xl font-bold">
                  {job.company.charAt(0)}
                </div>

                {/* Info */}
                <div>

                  <h2 className="text-2xl font-bold text-gray-800">
                    {job.company}
                  </h2>

                  <p className="text-gray-500">
                    {job.role}
                  </p>

                </div>

              </div>

              {/* Details */}
              <div className="space-y-3 mb-8">

                <p className="text-gray-600">
                  📍 {job.location}
                </p>

                <p className="text-green-600 font-semibold">
                  💰 {job.salary}
                </p>

              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <button className="flex-1 bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:bg-blue-700 transition">
                  Apply
                </button>

                <button className="flex-1 bg-red-50 text-red-500 py-3 rounded-2xl font-semibold hover:bg-red-100 transition">
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default SavedJobs;