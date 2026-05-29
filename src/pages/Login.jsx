import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setIsLoggedIn }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

  if (
    email === "hirehub@gmail.com" &&
    password === "HireHub123"
  ) {

    setIsLoggedIn(true);
    navigate("/home");

  } else {

    alert("Invalid Email or Password");

  }

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
        <div className="flex items-center gap-3">

          <Link to="/register">

            <button className="border border-blue-600 text-blue-600 px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-blue-50 transition">

              Join Now

            </button>

          </Link>

        </div>

      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 md:px-14 py-10 gap-12">

        {/* Left Side */}
        <div className="flex-1 max-w-2xl">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-light text-gray-800 leading-tight mb-8">

            Explore jobs and grow your professional network

          </h1>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-4 max-w-xl"
          >

            {/* Email */}
           <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email"
  className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
          
             {/* Password */}
            <input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Password"
  className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-full text-[13px] font-medium transition"
            >

              Sign In

            </button>
<div className="mt-4 p-3 bg-blue-50 rounded-xl text-sm text-gray-700">

  <p className="font-semibold">
    Demo Credentials
  </p>

  <p>Email: hirehub@gmail.com</p>

  <p>Password: HireHub123</p>

</div>
            {/* Google Button */}
            <button
              type="button"
              className="w-full border border-gray-400 py-2.5 rounded-full text-[13px] font-medium hover:bg-gray-50 transition"
            >

              Continue with Google

            </button>

            {/* Microsoft Button */}
            <button
              type="button"
              className="w-full border border-gray-400 py-2.5 rounded-full text-[13px] font-medium hover:bg-gray-50 transition"
            >

              Continue with Microsoft

            </button>

          </form>

          {/* Register */}
          <p className="mt-8 text-gray-600 text-sm">

            New to HireHub?{" "}

            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline"
            >

              Join now

            </Link>

          </p>

        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">

          <div className="w-full max-w-2xl h-[500px] rounded-[40px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-2xl flex items-center justify-center p-10">

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-white w-full max-w-md">

              <h2 className="text-3xl font-bold mb-6">

                🚀 Trending Skills

              </h2>

              <div className="grid grid-cols-2 gap-3">

                <div className="bg-white/20 rounded-2xl py-3 text-center text-sm font-medium">

                  React

                </div>

                <div className="bg-white/20 rounded-2xl py-3 text-center text-sm font-medium">

                  AI/ML

                </div>

                <div className="bg-white/20 rounded-2xl py-3 text-center text-sm font-medium">

                  Python

                </div>

                <div className="bg-white/20 rounded-2xl py-3 text-center text-sm font-medium">

                  AWS

                </div>

                <div className="bg-white/20 rounded-2xl py-3 text-center text-sm font-medium">

                  UI/UX

                </div>

                <div className="bg-white/20 rounded-2xl py-3 text-center text-sm font-medium">

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