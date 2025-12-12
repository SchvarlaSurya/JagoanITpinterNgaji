import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import BetaBetLogin from "./pages/signin";
import Mycourses from "./pages/Mycourses";


function App() {
  return (
    <Router>
      <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/signin" element={<BetaBetLogin />} />
    <Route path="/mycourses" element={<Mycourses />} />

      </Routes>
    </Router>
  );
}

export default App;
