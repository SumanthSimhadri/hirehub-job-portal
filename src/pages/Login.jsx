import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {

    navigate("/home");

  };

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Navbar */}
      <div className="flex items-center justify-between px-6 md:px-14 py-6">

        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">

          HireHub

        </h1>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          <Link to="/register">

            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition">

              Join Now

            </button>

          </Link>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition">

            Sign In

          </button>

        </div>

      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 md:px-14 py-10 gap-12">

        {/* Left Side */}
        <div className="flex-1 max-w-2xl">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-light text-gray-800 leading-tight mb-10">

            Explore jobs and grow your professional network

          </h1>

          {/* Inputs */}
          <div className="space-y-5 max-w-xl">

            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 p-4 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 p-4 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full text-lg font-semibold transition"
            >

              Sign In

            </button>

            {/* Google Button */}
            <button className="w-full border border-gray-400 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition">

              Continue with Google

            </button>

            {/* Microsoft Button */}
            <button className="w-full border border-gray-400 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition">

              Continue with Microsoft

            </button>

          </div>

          {/* Register */}
          <p className="mt-10 text-gray-600 text-lg">

            New to HireHub?{" "}

            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >

              Join now

            </Link>

          </p>

        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">

          <div className="w-full max-w-2xl h-[500px] rounded-[40px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-2xl flex items-center justify-center p-10">

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 text-white w-full max-w-md">

              <h2 className="text-4xl font-bold mb-8">

                🚀 Trending Skills

              </h2>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-white/20 rounded-2xl py-4 text-center font-semibold">

                  React

                </div>

                <div className="bg-white/20 rounded-2xl py-4 text-center font-semibold">

                  AI/ML

                </div>

                <div className="bg-white/20 rounded-2xl py-4 text-center font-semibold">

                  Python

                </div>

                <div className="bg-white/20 rounded-2xl py-4 text-center font-semibold">

                  AWS

                </div>

                <div className="bg-white/20 rounded-2xl py-4 text-center font-semibold">

                  UI/UX

                </div>

                <div className="bg-white/20 rounded-2xl py-4 text-center font-semibold">

                  Cloud

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;