import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";

import { useState } from "react";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import Applications from "./pages/Applications";
import Notifications from "./pages/Notifications";
import SavedJobs from "./pages/SavedJobs";
import Settings from "./pages/Settings";
import Resume from "./pages/Resume";

function AppContent() {

  const [activeSection, setActiveSection] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  return (

    <div className="min-h-screen bg-gray-50">

      {/* Hide Navbar on Login Page */}
      {location.pathname !== "/" && (
        <Navbar setActiveSection={setActiveSection} />
      )}

      <Routes>

        {/* Login Page */}
       <Route
  path="/"
  element={
    <Login
      setIsLoggedIn={setIsLoggedIn}
    />
  }
/>
        
           <Route
            path="/register"
             element={<Register />}
            />
        {/* Home */}
        <Route
  path="/home"
  element={
    isLoggedIn ? (
      <Home
  activeSection={activeSection}
  setActiveSection={setActiveSection}
/>
    ) : (
      <Navigate to="/" />
    )
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

  );
}

function App() {

  return (

    <BrowserRouter>

      <AppContent />

    </BrowserRouter>

  );
}

export default App;