import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = () => {

    if (
      email === "demo@hirehub.com" &&
      password === "HireHub123"
    ) {

      navigate("/home");

    } else {

      setError("Invalid email or password");

    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-4">

      {/* Animated Background */}
      <div className="absolute inset-0">

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
          }}
          className="w-72 h-72 bg-purple-600/30 rounded-full blur-3xl absolute top-10 left-10"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
          }}
          className="w-96 h-96 bg-blue-600/30 rounded-full blur-3xl absolute bottom-10 right-10"
        />

      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-10 w-full max-w-md shadow-2xl"
      >

        <h1 className="text-5xl font-bold text-white mb-3">
          Login
        </h1>

        <p className="text-gray-300 mb-10">
          Welcome back to HireHub
        </p>

        {/* Email */}
        <div className="mb-6">

          <label className="text-white block mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/10 border border-white/20 p-4 rounded-2xl text-white outline-none"
          />

        </div>

        {/* Password */}
        <div className="mb-4">

          <label className="text-white block mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/10 border border-white/20 p-4 rounded-2xl text-white outline-none"
          />

        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 mb-6">
            {error}
          </p>
        )}

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-2xl text-white font-bold text-lg shadow-lg"
        >
          Login
        </motion.button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">

          <div className="flex-1 h-[1px] bg-white/20"></div>

          <p className="text-gray-400 text-sm">
            OR
          </p>

          <div className="flex-1 h-[1px] bg-white/20"></div>

        </div>

        {/* Social Buttons */}
        <div className="space-y-4">

          <button className="w-full bg-white/10 border border-white/20 py-4 rounded-2xl text-white hover:bg-white/20 transition">
            Continue with Google
          </button>

          <button className="w-full bg-white/10 border border-white/20 py-4 rounded-2xl text-white hover:bg-white/20 transition">
            Continue with LinkedIn
          </button>

        </div>

        {/* Register */}
        <p className="text-center text-gray-400 mt-8">

          Don’t have an account?

          <Link to="/register">

            <span className="text-white font-bold ml-2 hover:text-purple-400 transition">
              Register
            </span>

          </Link>

        </p>

      </motion.div>

    </div>
  );
}

export default Login;