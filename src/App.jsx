import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SavedJobs from "./pages/SavedJobs";
import Notifications from "./pages/Notifications";
import Resume from "./pages/Resume";
import Applications from "./pages/Applications";
import Settings from "./pages/Settings";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/saved-jobs"
          element={<SavedJobs />}
        />

        <Route
          path="/notifications"
          element={<Notifications />}
        />

        <Route
          path="/resume"
          element={<Resume />}
        />

        <Route
          path="/applications"
          element={<Applications />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;