import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const [darkMode] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div
      className={`h-screen shadow-xl p-5 md:p-6 flex flex-col justify-between transition duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Top */}
      <div>

        {/* Logo */}
        <h1
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-12 ${
            darkMode
              ? "text-blue-400"
              : "text-blue-600"
          }`}
        >
             Careers

        </h1>

        {/* Menu */}
        <div className="space-y-3">

          <Link to="/dashboard">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold bg-blue-50 text-blue-600 hover:bg-blue-100 transition">

              ◉ Dashboard

            </button>

          </Link>

          <Link to="/applications">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-gray-100 transition">

              ◈ Applications

            </button>

          </Link>

          <Link to="/saved-jobs">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-gray-100 transition">

              ✦ Saved Jobs

            </button>

          </Link>

          <Link to="/notifications">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-gray-100 transition">

              ⦿ Notifications

            </button>

          </Link>

          <Link to="/resume">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-gray-100 transition">

              ▤ Resume

            </button>

          </Link>

          <Link to="/settings">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-gray-100 transition">

              ⌘ Settings

            </button>

          </Link>

        </div>

      </div>

      {/* Bottom */}
      <div className="mt-6">

        {/* Profile */}
        <div className="rounded-3xl p-5 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-white text-blue-600 flex items-center justify-center text-xl font-bold">

              SJ

            </div>

            <div>

              <h2 className="font-bold text-lg">

                Sumanth

              </h2>

              <p className="text-blue-100 text-sm">

                sumanth@gmail.com

              </p>

            </div>

          </div>

          {/* Progress */}
          <div className="mt-5">

            <div className="flex justify-between text-sm mb-2">

              <span>

                Profile Strength

              </span>

              <span>

                85%

              </span>

            </div>

            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">

              <div className="h-full w-[85%] bg-white rounded-full"></div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;