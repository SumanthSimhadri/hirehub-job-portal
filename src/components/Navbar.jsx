import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Menu, X } from "lucide-react";

function Navbar({ setActiveSection }) {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  return (
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
        <div className="hidden md:flex items-center gap-5 lg:gap-6">

          <button
            onClick={() => setActiveSection("home")}
            className="text-[13px] font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </button>

          <button
            onClick={() => setActiveSection("jobs")}
            className="text-[13px] font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Jobs
          </button>

          <button
            onClick={() => setActiveSection("companies")}
            className="text-[13px] font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Companies
          </button>

          <button
            onClick={() => setActiveSection("about")}
            className="text-[13px] font-medium text-gray-700 hover:text-blue-600 transition"
          >
            About
          </button>

          <button
            onClick={() => setActiveSection("contact")}
            className="text-[13px] font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </button>

        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-2">

          <Link to="/dashboard">

            <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-xl text-[13px] font-medium transition">

              Profile

            </button>

          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1.5 rounded-xl text-[13px] font-medium transition"
          >

            Logout

          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >

          {menuOpen
            ? <X size={24} />
            : <Menu size={24} />}

        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden mt-5 bg-white rounded-2xl shadow-lg p-5 space-y-4">

          <button
            onClick={() => {
              setActiveSection("home");
              setMenuOpen(false);
            }}
            className="block w-full text-left text-[13px] font-medium text-gray-700 hover:text-blue-600"
          >

            Home

          </button>

          <button
            onClick={() => {
              setActiveSection("jobs");
              setMenuOpen(false);
            }}
            className="block w-full text-left text-[13px] font-medium text-gray-700 hover:text-blue-600"
          >

            Jobs

          </button>

          <button
            onClick={() => {
              setActiveSection("companies");
              setMenuOpen(false);
            }}
            className="block w-full text-left text-[13px] font-medium text-gray-700 hover:text-blue-600"
          >

            Companies

          </button>

          <button
            onClick={() => {
              setActiveSection("about");
              setMenuOpen(false);
            }}
            className="block w-full text-left text-[13px] font-medium text-gray-700 hover:text-blue-600"
          >

            About

          </button>

          <button
            onClick={() => {
              setActiveSection("contact");
              setMenuOpen(false);
            }}
            className="block w-full text-left text-[13px] font-medium text-gray-700 hover:text-blue-600"
          >

            Contact

          </button>

          {/* Profile + Logout */}
          <div className="space-y-3 pt-2">

            <Link to="/dashboard">

              <button className="w-full bg-gray-100 hover:bg-gray-200 py-2.5 rounded-xl text-[13px] font-medium transition">

                Profile

              </button>

            </Link>

            <button
              onClick={handleLogout}
              className="w-full bg-red-100 hover:bg-red-200 text-red-600 py-2.5 rounded-xl text-[13px] font-medium transition"
            >

              Logout

            </button>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;