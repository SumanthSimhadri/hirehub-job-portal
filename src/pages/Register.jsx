import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-700 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] overflow-hidden shadow-2xl">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center p-16 text-white relative overflow-hidden">

          <div className="absolute w-72 h-72 bg-white/10 rounded-full top-[-50px] left-[-50px]"></div>

          <div className="absolute w-96 h-96 bg-purple-400/10 rounded-full bottom-[-120px] right-[-120px]"></div>

          <div className="relative z-10">

            <h1 className="text-6xl font-bold leading-tight mb-8">
              Build Your <br />
              Dream Career
            </h1>

            <p className="text-lg text-gray-200 leading-8 mb-10">
              Join thousands of candidates discovering opportunities from top companies around the world.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  🚀
                </div>

                <p className="text-lg">
                  Explore premium job opportunities
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  💼
                </div>

                <p className="text-lg">
                  Connect with top recruiters
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  🌍
                </div>

                <p className="text-lg">
                  Apply from anywhere anytime
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="bg-white p-8 md:p-14">

          <div className="max-w-lg mx-auto">

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              Create Account
            </h1>

            <p className="text-gray-500 mb-10">
              Start your professional journey today
            </p>

            {/* Full Name */}
            <div className="mb-6">

              <label className="block mb-2 font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-purple-500"
              />

            </div>

            {/* Email */}
            <div className="mb-6">

              <label className="block mb-2 font-semibold text-gray-700">
                Email ID
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-purple-500"
              />

            </div>

            {/* Password */}
            <div className="mb-6">

              <label className="block mb-2 font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                className="w-full p-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-purple-500"
              />

            </div>

            {/* Mobile Number */}
            <div className="mb-6">

              <label className="block mb-2 font-semibold text-gray-700">
                Mobile Number
              </label>

              <input
                type="tel"
                placeholder="Enter mobile number"
                className="w-full p-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-purple-500"
              />

            </div>

            {/* Work Status */}
            <div className="mb-6">

              <label className="block mb-2 font-semibold text-gray-700">
                Work Status
              </label>

              <select className="w-full p-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-purple-500">

                <option>
                  Select Work Status
                </option>

                <option>
                  Experienced
                </option>

                <option>
                  Fresher
                </option>

              </select>

            </div>

            {/* Resume Upload */}
            <div className="mb-8">

              <label className="block mb-2 font-semibold text-gray-700">
                Upload Resume
              </label>

              <input
                type="file"
                className="w-full p-4 rounded-2xl border border-gray-200 outline-none"
              />

            </div>

            {/* Button */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition duration-300 shadow-lg">
              Create Account
            </button>

            {/* Login */}
            <p className="text-center mt-8 text-gray-500">

              Already have an account?

              <Link to="/">

                <span className="text-purple-600 font-bold ml-2 cursor-pointer hover:text-blue-600 transition">
                  Login
                </span>

              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;