import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { Dashboard } from "./pages/dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
};

export default App;