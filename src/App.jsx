import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SavedJobs from "./pages/SavedJobs";
import Notifications from "./pages/Notifications";
import Resume from "./pages/Resume";
import Applications from "./pages/Applications";
import Settings from "./pages/Settings";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* Login Page */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Register Page */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Home Page */}
        <Route
          path="/home"
          element={<Home />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Saved Jobs */}
        <Route
          path="/saved-jobs"
          element={<SavedJobs />}
        />

        {/* Notifications */}
        <Route
          path="/notifications"
          element={<Notifications />}
        />

        {/* Resume */}
        <Route
          path="/resume"
          element={<Resume />}
        />

        {/* Applications */}
        <Route
          path="/applications"
          element={<Applications />}
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={<Settings />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;