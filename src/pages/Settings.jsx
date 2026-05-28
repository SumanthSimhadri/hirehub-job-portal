import Sidebar from "../components/Sidebar";

function Settings() {

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

            ⚙️ Settings

          </h1>

          <p className="text-gray-500 text-xl">

            Manage your profile, security, and preferences

          </p>

        </div>

        {/* Settings Grid */}
        <div className="grid xl:grid-cols-2 gap-8">

          {/* Profile Settings */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-8">

              👤 Profile Settings

            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-4 rounded-2xl"
                defaultValue="Sumanth"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-4 rounded-2xl"
                defaultValue="sumanth@gmail.com"
              />

              <input
                type="text"
                placeholder="Skills"
                className="w-full border p-4 rounded-2xl"
                defaultValue="React, Python, SQL"
              />

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-semibold transition">

                Save Changes

              </button>

            </div>

          </div>

          {/* Notifications */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-8">

              🔔 Notifications

            </h2>

            <div className="space-y-6">

              <div className="flex items-center justify-between bg-gray-50 p-5 rounded-2xl">

                <div>

                  <h3 className="text-xl font-semibold">
                    Job Alerts
                  </h3>

                  <p className="text-gray-500">
                    Receive latest job updates
                  </p>

                </div>

                <button className="bg-green-500 w-16 h-8 rounded-full relative">

                  <div className="w-6 h-6 bg-white rounded-full absolute top-1 right-1"></div>

                </button>

              </div>

              <div className="flex items-center justify-between bg-gray-50 p-5 rounded-2xl">

                <div>

                  <h3 className="text-xl font-semibold">
                    Email Notifications
                  </h3>

                  <p className="text-gray-500">
                    Get interview emails
                  </p>

                </div>

                <button className="bg-green-500 w-16 h-8 rounded-full relative">

                  <div className="w-6 h-6 bg-white rounded-full absolute top-1 right-1"></div>

                </button>

              </div>

            </div>

          </div>

          {/* Resume Upload */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-8">

              📄 Resume

            </h2>

            <div className="space-y-5">

              <div className="border-2 border-dashed border-gray-300 rounded-3xl p-10 text-center">

                <p className="text-gray-500 text-lg mb-5">

                  Upload your latest resume

                </p>

                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-2xl font-semibold transition">

                  Upload Resume

                </button>

              </div>

            </div>

          </div>

          {/* Security */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-8">

              🔒 Security

            </h2>

            <div className="space-y-5">

              <input
                type="password"
                placeholder="Current Password"
                className="w-full border p-4 rounded-2xl"
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full border p-4 rounded-2xl"
              />

              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-2xl font-semibold transition">

                Update Password

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;