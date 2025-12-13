import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import Mycourses from "./pages/Mycourses";


function App() {
  return (
    <Router>
      <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/mycourses" element={<Mycourses />} />

      </Routes>
    </Router>
  );
}

export default App;
