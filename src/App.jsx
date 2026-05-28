import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import Applications from "./pages/Applications";
import Notifications from "./pages/Notifications";
import SavedJobs from "./pages/SavedJobs";
import Settings from "./pages/Settings";
import Resume from "./pages/Resume";

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

          {/* Applications */}
          <Route
            path="/applications"
            element={<Applications />}
          />

          {/* Notifications */}
          <Route
            path="/notifications"
            element={<Notifications />}
          />

          {/* Saved Jobs */}
          <Route
            path="/saved-jobs"
            element={<SavedJobs />}
          />

          {/* Settings */}
          <Route
            path="/settings"
            element={<Settings />}
          />

          {/* Resume */}
          <Route
            path="/resume"
            element={<Resume />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;