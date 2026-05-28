import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";

function App() {

  const [activeSection, setActiveSection] = useState("home");

  return (

    <BrowserRouter>

      <div className="min-h-screen bg-gray-50">

        {/* Global Navbar */}
        <Navbar setActiveSection={setActiveSection} />

        <Routes>

          {/* Redirect */}
          <Route
            path="/"
            element={<Navigate to="/home" />}
          />

          {/* Home */}
          <Route
            path="/home"
            element={
              <Home
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            }
          />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;