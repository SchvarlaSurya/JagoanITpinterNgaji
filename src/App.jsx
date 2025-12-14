import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import BetaBetLogin from "./pages/signin";
import Mycourses from "./pages/Mycourses";
import BetaBetSignup from "./pages/signup";
import Assignment from "./pages/Assignment";
import Setting from "./pages/Setting";


function App() {
  return (
    <Router>
      <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/signin" element={<BetaBetLogin />} />
    <Route path="/signup" element={<BetaBetSignup />} />
    <Route path="/mycourses" element={<Mycourses />} />
    <Route path="/assignment" element={<Assignment />} />
    <Route path="/setting" element={<Setting />} />
      </Routes>
    </Router>
  );
}

export default App;
