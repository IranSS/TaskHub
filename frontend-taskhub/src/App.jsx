import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/home";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("@TaskHub:token");

  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
};

export default App;
