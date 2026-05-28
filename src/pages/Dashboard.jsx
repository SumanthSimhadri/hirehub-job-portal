import { useState } from "react";

import Sidebar from "../components/Sidebar";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import { Menu, X } from "lucide-react";

function Dashboard() {

  const [showSidebar, setShowSidebar] = useState(false);

  const [showApplications, setShowApplications] = useState(false);

  const applications = [
    {
      company: "Google",
      role: "Frontend Developer",
      status: "Interview",
    },

    {
      company: "Amazon",
      role: "React Developer",
      status: "Applied",
    },

    {
      company: "Microsoft",
      role: "UI/UX Designer",
      status: "Selected",
    },
  ];

  const savedJobs = [
    "AI Engineer",
    "Cloud Engineer",
    "Python Developer",
  ];

  const analyticsData = [

    {
      month: "Jan",
      applications: 4,
      interviews: 1,
    },

    {
      month: "Feb",
      applications: 7,
      interviews: 2,
    },

    {
      month: "Mar",
      applications: 10,
      interviews: 4,
    },

    {
      month: "Apr",
      applications: 14,
      interviews: 5,
    },

    {
      month: "May",
      applications: 18,
      interviews: 6,
    },

  ];

  return (
    <div className="min-h-screen bg-gray-100 flex relative">

      {/* Mobile Menu Button */}
      <button
        onClick={() => setShowSidebar(true)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-blue-600 text-white p-3 rounded-2xl shadow-lg"
      >
        <Menu size={28} />
      </button>

      {/* Desktop Sidebar */}
      <div className="w-[320px] hidden lg:block">

        <Sidebar />

      </div>

      {/* Mobile Sidebar */}
      {showSidebar && (

        <div className="fixed inset-0 z-50 flex">

          {/* Overlay */}
          <div
            onClick={() => setShowSidebar(false)}
            className="absolute inset-0 bg-black/40"
          ></div>

          {/* Sidebar */}
          <div className="relative w-[320px] bg-white h-full shadow-2xl animate-slide-in-left">

            {/* Close Button */}
            <button
              onClick={() => setShowSidebar(false)}
              className="absolute top-5 right-5 bg-red-100 text-red-500 p-2 rounded-xl z-50"
            >
              <X size={24} />
            </button>

            <Sidebar />

          </div>

        </div>

      )}

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">

        {/* Welcome */}
        <div className="mb-10 mt-16 lg:mt-0">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Welcome Back, Sumanth 👋
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Track your applications and career progress
          </p>

        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-3xl p-6 shadow-lg hover:scale-105 transition">

            <h2 className="text-lg">
              Applied Jobs
            </h2>

            <h1 className="text-5xl font-bold mt-4">
              24
            </h1>

          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-3xl p-6 shadow-lg hover:scale-105 transition">

            <h2 className="text-lg">
              Saved Jobs
            </h2>

            <h1 className="text-5xl font-bold mt-4">
              12
            </h1>

          </div>

          <div className="bg-gradient-to-r from-green-600 to-emerald-400 text-white rounded-3xl p-6 shadow-lg hover:scale-105 transition">

            <h2 className="text-lg">
              Interviews
            </h2>

            <h1 className="text-5xl font-bold mt-4">
              5
            </h1>

          </div>

          <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-3xl p-6 shadow-lg hover:scale-105 transition">

            <h2 className="text-lg">
              Profile Strength
            </h2>

            <h1 className="text-5xl font-bold mt-4">
              85%
            </h1>

          </div>

        </div>

        {/* Analytics Charts */}
        <div className="grid xl:grid-cols-2 gap-8 mb-10">

          {/* Applications Chart */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="mb-8">

              <h2 className="text-3xl font-bold text-gray-800">
                Applications
              </h2>

              <p className="text-gray-500 mt-2">
                Monthly applications overview
              </p>

            </div>

            <div className="h-[350px]">

              <ResponsiveContainer width="100%" height="100%">

                <LineChart data={analyticsData}>

                  <XAxis dataKey="month" />

                  <YAxis />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="applications"
                    stroke="#2563eb"
                    strokeWidth={4}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* Interview Chart */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="mb-8">

              <h2 className="text-3xl font-bold text-gray-800">
                Interviews
              </h2>

              <p className="text-gray-500 mt-2">
                Interview performance analytics
              </p>

            </div>

            <div className="h-[350px]">

              <ResponsiveContainer width="100%" height="100%">

                <BarChart data={analyticsData}>

                  <XAxis dataKey="month" />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="interviews"
                    fill="#9333ea"
                    radius={[10, 10, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

        {/* Main Grid */}
        <div className="grid xl:grid-cols-3 gap-8">

          {/* Applications */}
          <div className="xl:col-span-2 bg-white rounded-3xl shadow-lg p-8">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold text-gray-800">
                Recent Applications
              </h2>

              <button
                onClick={() => setShowApplications(true)}
                className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-xl transition"
              >

                View All

              </button>

            </div>

            <div className="space-y-5">

              {applications.map((app, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-5 rounded-2xl hover:bg-blue-50 transition"
                >

                  <div>

                    <h3 className="text-xl font-bold text-gray-800">
                      {app.company}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      {app.role}
                    </p>

                  </div>

                  <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                    {app.status}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-8">

            {/* Saved Jobs */}
            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                ❤️ Saved Jobs
              </h2>

              <div className="space-y-4">

                {savedJobs.map((job, index) => (

                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-2xl hover:bg-purple-50 transition"
                  >

                    <h3 className="font-semibold text-gray-700">
                      {job}
                    </h3>

                  </div>

                ))}

              </div>

            </div>

            {/* Notifications */}
            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                🔔 Notifications
              </h2>

              <div className="space-y-5">

                <div className="bg-blue-50 p-4 rounded-2xl">
                  Google viewed your profile
                </div>

                <div className="bg-green-50 p-4 rounded-2xl">
                  Amazon shortlisted you
                </div>

                <div className="bg-purple-50 p-4 rounded-2xl">
                  New internships available
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Applications Popup */}
      {showApplications && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl p-8 relative">

            {/* Close */}
            <button
              onClick={() => setShowApplications(false)}
              className="absolute top-5 right-5 bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-xl"
            >

              X

            </button>

            <h1 className="text-4xl font-bold text-gray-800 mb-10">

              My Applications

            </h1>

            <div className="space-y-6">

              {applications.map((app, index) => (

                <div
                  key={index}
                  className="border border-gray-100 rounded-3xl p-6 hover:shadow-xl hover:bg-blue-50 transition"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h2 className="text-2xl font-bold text-gray-800">
                        {app.company}
                      </h2>

                      <p className="text-gray-500 mt-2">
                        {app.role}
                      </p>

                    </div>

                    <span className={`px-5 py-3 rounded-2xl text-sm font-bold
                      
                      ${
                        app.status === "Selected"
                          ? "bg-green-100 text-green-600"
                          : app.status === "Interview"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-600"
                      }
                    
                    `}>

                      {app.status}

                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Dashboard;