import { Link, useNavigate } from "react-router-dom";

function Navbar({ setActiveSection }) {

  const navigate = useNavigate();

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

        {/* Middle Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">

          <button
            onClick={() => setActiveSection("home")}
            className="font-semibold text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </button>

          <button
            onClick={() => setActiveSection("jobs")}
            className="font-semibold text-gray-700 hover:text-blue-600 transition"
          >
            Jobs
          </button>

          <button
            onClick={() => setActiveSection("companies")}
            className="font-semibold text-gray-700 hover:text-blue-600 transition"
          >
            Companies
          </button>

          <button
            onClick={() => setActiveSection("about")}
            className="font-semibold text-gray-700 hover:text-blue-600 transition"
          >
            About
          </button>

          <button
            onClick={() => setActiveSection("contact")}
            className="font-semibold text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </button>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          <Link to="/dashboard">

            <button className="bg-gray-100 hover:bg-gray-200 px-4 md:px-5 py-2 rounded-xl font-medium transition">

              Dashboard

            </button>

          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-100 hover:bg-red-200 text-red-600 px-4 md:px-5 py-2 rounded-xl font-medium transition"
          >

            Logout

          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;