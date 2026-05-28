import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Menu, X } from "lucide-react";

function Navbar({ setActiveSection }) {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const [showLanguage, setShowLanguage] = useState(false);

  const [showPrivacy, setShowPrivacy] = useState(false);

  const [showTerms, setShowTerms] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="bg-white shadow-md px-4 md:px-8 lg:px-12 py-4 sticky top-0 z-50">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <div
            onClick={() => setActiveSection("home")}
            className="cursor-pointer"
          >

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">

              HireHub

            </h1>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8">

            <button
              onClick={() => setActiveSection("home")}
              className="text-[16px] font-semibold text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </button>

            <button
              onClick={() => setActiveSection("jobs")}
              className="text-[16px] font-semibold text-gray-700 hover:text-blue-600 transition"
            >
              Jobs
            </button>

            <button
              onClick={() => setActiveSection("companies")}
              className="text-[16px] font-semibold text-gray-700 hover:text-blue-600 transition"
            >
              Companies
            </button>

            <button
              onClick={() => setActiveSection("about")}
              className="text-[16px] font-semibold text-gray-700 hover:text-blue-600 transition"
            >
              About
            </button>

            <button
              onClick={() => setActiveSection("contact")}
              className="text-[16px] font-semibold text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </button>

          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">

            {/* Profile Dropdown */}
            <div className="relative group">

              {/* User Button */}
              <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-2xl text-[14px] font-semibold transition flex items-center gap-3 shadow-sm">

                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shadow-md">

                  SJ

                </div>

                <div className="flex flex-col items-start leading-tight">

                  <span className="text-sm font-semibold text-gray-800">

                    Sumanth

                  </span>

                  <span className="text-[11px] text-gray-500">

                    sumanth@gmail.com

                  </span>

                </div>

              </button>

              {/* Dropdown */}
              <div className="absolute right-0 mt-4 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

                {/* User Info */}
                <div className="flex items-center gap-4 pb-5 border-b">

                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">

                    SJ

                  </div>

                  <div>

                    <h2 className="font-bold text-gray-800 text-xl">

                      Sumanth

                    </h2>

                    <p className="text-sm text-gray-500">

                      sumanth@gmail.com

                    </p>

                    <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">

                      Active Now

                    </span>

                  </div>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-5">

                  <div className="bg-blue-50 rounded-2xl p-4">

                    <p className="text-sm text-gray-500 mb-1">

                      Profile Strength

                    </p>

                    <h3 className="text-2xl font-bold text-blue-600">

                      85%

                    </h3>

                  </div>

                  <div className="bg-indigo-50 rounded-2xl p-4">

                    <p className="text-sm text-gray-500 mb-1">

                      Applied Jobs

                    </p>

                    <h3 className="text-2xl font-bold text-indigo-600">

                      12

                    </h3>

                  </div>

                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-4">

                  <Link to="/dashboard">

                    <button className="w-full bg-gray-100 hover:bg-blue-50 hover:text-blue-600 py-3.5 rounded-2xl text-sm font-semibold transition border border-transparent hover:border-blue-200 shadow-sm">

                      Open Dashboard

                    </button>

                  </Link>

                  <button
                    onClick={() => setShowLanguage(true)}
                    className="w-full bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 py-3.5 rounded-2xl text-sm font-semibold transition border border-transparent hover:border-indigo-200 shadow-sm"
                  >

                    Language Preferences

                  </button>

                  <button
                    onClick={() => setShowPrivacy(true)}
                    className="w-full bg-gray-100 hover:bg-green-50 hover:text-green-600 py-3.5 rounded-2xl text-sm font-semibold transition border border-transparent hover:border-green-200 shadow-sm"
                  >

                    Privacy & Security

                  </button>

                  <button
                    onClick={() => setShowTerms(true)}
                    className="w-full bg-gray-100 hover:bg-orange-50 hover:text-orange-600 py-3.5 rounded-2xl text-sm font-semibold transition border border-transparent hover:border-orange-200 shadow-sm"
                  >

                    Terms & Policies

                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-100 hover:bg-red-200 text-red-600 py-3.5 rounded-2xl text-sm font-semibold transition shadow-sm"
                  >

                    Logout

                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >

            {menuOpen
              ? <X size={28} />
              : <Menu size={28} />}

          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (

          <div className="md:hidden mt-5 bg-white rounded-2xl shadow-lg p-5 space-y-5">

            <button
              onClick={() => {
                setActiveSection("home");
                setMenuOpen(false);
              }}
              className="block w-full text-left text-[15px] font-medium text-gray-700 hover:text-blue-600"
            >

              Home

            </button>

            <button
              onClick={() => {
                setActiveSection("jobs");
                setMenuOpen(false);
              }}
              className="block w-full text-left text-[15px] font-medium text-gray-700 hover:text-blue-600"
            >

              Jobs

            </button>

            <button
              onClick={() => {
                setActiveSection("companies");
                setMenuOpen(false);
              }}
              className="block w-full text-left text-[15px] font-medium text-gray-700 hover:text-blue-600"
            >

              Companies

            </button>

            <button
              onClick={() => {
                setActiveSection("about");
                setMenuOpen(false);
              }}
              className="block w-full text-left text-[15px] font-medium text-gray-700 hover:text-blue-600"
            >

              About

            </button>

            <button
              onClick={() => {
                setActiveSection("contact");
                setMenuOpen(false);
              }}
              className="block w-full text-left text-[15px] font-medium text-gray-700 hover:text-blue-600"
            >

              Contact

            </button>

            {/* Mobile Profile */}
            <div className="border-t pt-8 mt-6 flex flex-col gap-5">

              <Link to="/dashboard">

                <button className="w-full bg-gray-100 hover:bg-gray-200 py-3 rounded-xl text-[14px] font-medium transition flex items-center justify-center gap-3">

                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">

                    SJ

                  </div>

                  <div className="flex flex-col items-start leading-tight">

                    <span className="font-semibold text-gray-800">

                      Sumanth

                    </span>

                    <span className="text-[11px] text-gray-500">

                      sumanth@gmail.com

                    </span>

                  </div>

                </button>

              </Link>

              <button
                onClick={handleLogout}
                className="w-full bg-red-100 hover:bg-red-200 text-red-600 py-3 rounded-xl text-[14px] font-medium transition"
              >

                Logout

              </button>

            </div>

          </div>

        )}

      </nav>

      {/* Language Modal */}
      {showLanguage && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] max-w-md rounded-3xl p-6 shadow-2xl">

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-2xl font-bold text-gray-800">

                Language Preferences

              </h2>

              <button
                onClick={() => setShowLanguage(false)}
                className="text-gray-500 text-xl"
              >
                ✕
              </button>

            </div>

            <div className="space-y-4 text-gray-700">

              <div className="bg-blue-50 p-4 rounded-2xl">

                ✓ English

              </div>

              <div className="bg-gray-100 p-4 rounded-2xl">

                Hindi

              </div>

              <div className="bg-gray-100 p-4 rounded-2xl">

                Telugu

              </div>

              <div className="pt-3 text-sm text-gray-500">

                Region: India

              </div>

            </div>

          </div>

        </div>

      )}

      {/* Privacy Modal */}
      {showPrivacy && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] max-w-md rounded-3xl p-6 shadow-2xl">

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-2xl font-bold text-gray-800">

                Privacy & Security

              </h2>

              <button
                onClick={() => setShowPrivacy(false)}
                className="text-gray-500 text-xl"
              >
                ✕
              </button>

            </div>

            <div className="space-y-4 text-gray-700">

              <div className="bg-green-50 p-4 rounded-2xl">

                ✓ Two-factor authentication enabled

              </div>

              <div className="bg-green-50 p-4 rounded-2xl">

                ✓ Account visibility: Public

              </div>

              <div className="bg-green-50 p-4 rounded-2xl">

                ✓ Email notifications enabled

              </div>

              <div className="text-sm text-gray-500 pt-3">

                Last password update: 12 May 2026

              </div>

            </div>

          </div>

        </div>

      )}

      {/* Terms Modal */}
      {showTerms && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] max-w-md rounded-3xl p-6 shadow-2xl">

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-2xl font-bold text-gray-800">

                Terms & Policies

              </h2>

              <button
                onClick={() => setShowTerms(false)}
                className="text-gray-500 text-xl"
              >
                ✕
              </button>

            </div>

            <div className="space-y-4 text-gray-700">

              <div className="bg-gray-100 p-4 rounded-2xl">

                • User data is securely protected

              </div>

              <div className="bg-gray-100 p-4 rounded-2xl">

                • Jobs are verified before publishing

              </div>

              <div className="bg-gray-100 p-4 rounded-2xl">

                • Community guidelines must be followed

              </div>

              <div className="bg-gray-100 p-4 rounded-2xl">

                • Privacy policies updated regularly

              </div>

              <div className="text-sm text-gray-500 pt-3">

                Version: 2.1.0

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default Navbar;