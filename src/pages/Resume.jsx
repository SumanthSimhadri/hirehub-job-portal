import Sidebar from "../components/Sidebar";

function Resume() {

  const skills = [
    "React",
    "JavaScript",
    "Python",
    "UI/UX",
    "SQL",
    "Node.js",
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
            📄 Resume
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Manage your professional profile and resume
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid xl:grid-cols-3 gap-8">

          {/* Left Side */}
          <div className="xl:col-span-2 space-y-8">

            {/* Resume Upload */}
            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Upload Resume
              </h2>

              <div className="border-2 border-dashed border-blue-300 rounded-3xl p-10 text-center bg-blue-50">

                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Drag & Drop Resume
                </h3>

                <p className="text-gray-500 mb-6">
                  Upload PDF or DOC files
                </p>

                <input
                  type="file"
                  className="mb-6"
                />

                <div className="flex flex-wrap justify-center gap-4">

                  <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition">
                    Upload Resume
                  </button>

                  <button className="bg-green-600 text-white px-6 py-3 rounded-2xl hover:bg-green-700 transition">
                    Download Resume
                  </button>

                </div>

              </div>

            </div>

            {/* Skills */}
            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Skills
              </h2>

              <div className="flex flex-wrap gap-4">

                {skills.map((skill, index) => (

                  <div
                    key={index}
                    className="bg-blue-100 text-blue-600 px-5 py-3 rounded-full font-semibold"
                  >
                    {skill}
                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-8">

            {/* Resume Score */}
            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Resume Score
              </h2>

              <div className="flex items-center justify-center">

                <div className="w-44 h-44 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-xl">
                  85%
                </div>

              </div>

              <p className="text-center text-gray-500 mt-6">
                Your resume is optimized for most frontend roles
              </p>

            </div>

            {/* Profile Summary */}
            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Profile Summary
              </h2>

              <p className="text-gray-600 leading-8">
                Passionate frontend developer skilled in React,
                JavaScript, UI/UX, and responsive web design.
                Interested in building scalable and modern web
                applications.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Resume;