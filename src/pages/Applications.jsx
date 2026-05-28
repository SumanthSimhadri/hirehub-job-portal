import Sidebar from "../components/Sidebar";

function Applications() {

  const applications = [

    {
      company: "Google",
      role: "Frontend Developer",
      status: "Under Review",
      location: "Hyderabad",
      salary: "₹10 LPA",
    },

    {
      company: "Amazon",
      role: "React Developer",
      status: "Interview Scheduled",
      location: "Bangalore",
      salary: "₹12 LPA",
    },

    {
      company: "Microsoft",
      role: "UI/UX Designer",
      status: "Selected",
      location: "Remote",
      salary: "₹9 LPA",
    },

  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-[320px]">

        <Sidebar />

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        {/* Heading */}
        <div className="mb-12">

          <h1 className="text-6xl font-bold text-gray-800 mb-4">

            💼 My Applications

          </h1>

          <p className="text-gray-500 text-xl">

            Track your applied jobs and application status

          </p>

        </div>

        {/* Cards */}
        <div className="grid xl:grid-cols-2 gap-8">

          {applications.map((app, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition"
            >

              {/* Top */}
              <div className="flex items-center justify-between mb-8">

                <div>

                  <h2 className="text-4xl font-bold text-gray-800">

                    {app.company}

                  </h2>

                  <p className="text-gray-500 text-lg mt-2">

                    {app.role}

                  </p>

                </div>

                <span
                  className={`px-5 py-3 rounded-2xl font-semibold
                  
                  ${
                    app.status === "Selected"
                      ? "bg-green-100 text-green-600"
                      : app.status === "Interview Scheduled"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-600"
                  }
                  
                  `}
                >

                  {app.status}

                </span>

              </div>

              {/* Details */}
              <div className="space-y-4">

                <div className="flex items-center gap-3 text-gray-600 text-lg">

                  📍 {app.location}

                </div>

                <div className="flex items-center gap-3 text-green-600 text-lg font-semibold">

                  💰 {app.salary}

                </div>

                <div className="flex items-center gap-3 text-gray-600 text-lg">

                  🕒 Applied 3 days ago

                </div>

              </div>

              {/* Bottom Buttons */}
              <div className="flex gap-5 mt-10">

                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition">

                  View Details

                </button>

                <button className="flex-1 bg-red-50 hover:bg-red-100 text-red-500 py-4 rounded-2xl font-semibold transition">

                  Withdraw

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Applications;