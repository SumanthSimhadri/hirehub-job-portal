import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Menu, X } from "lucide-react";

function Navbar({ setActiveSection }) {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  const handleNavigation = (section) => {

    setActiveSection(section);

    setMenuOpen(false);

    navigate("/home");

  };

  return (

    <nav className="bg-white shadow-md px-4 md:px-8 lg:px-12 py-4 sticky top-0 z-50">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => handleNavigation("home")}
          className="cursor-pointer"
        >

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">

            HireHub

          </h1>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8">

          <button
            onClick={() => handleNavigation("home")}
            className="text-[16px] font-semibold text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </button>

          <button
            onClick={() => handleNavigation("jobs")}
            className="text-[16px] font-semibold text-gray-700 hover:text-blue-600 transition"
          >
            Jobs
          </button>

          <button
            onClick={() => handleNavigation("companies")}
            className="text-[16px] font-semibold text-gray-700 hover:text-blue-600 transition"
          >
            Companies
          </button>

          <button
            onClick={() => handleNavigation("about")}
            className="text-[16px] font-semibold text-gray-700 hover:text-blue-600 transition"
          >
            About
          </button>

          <button
            onClick={() => handleNavigation("contact")}
            className="text-[16px] font-semibold text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </button>

        </div>

        {/* Desktop Profile */}
        <div className="hidden md:flex items-center gap-3">

          <Link to="/dashboard">

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

          </Link>

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
            onClick={() => handleNavigation("home")}
            className="block w-full text-left text-[15px] font-medium text-gray-700 hover:text-blue-600"
          >

            Home

          </button>

          <button
            onClick={() => handleNavigation("jobs")}
            className="block w-full text-left text-[15px] font-medium text-gray-700 hover:text-blue-600"
          >

            Jobs

          </button>

          <button
            onClick={() => handleNavigation("companies")}
            className="block w-full text-left text-[15px] font-medium text-gray-700 hover:text-blue-600"
          >

            Companies

          </button>

          <button
            onClick={() => handleNavigation("about")}
            className="block w-full text-left text-[15px] font-medium text-gray-700 hover:text-blue-600"
          >

            About

          </button>

          <button
            onClick={() => handleNavigation("contact")}
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

  );
}

export default Navbar;