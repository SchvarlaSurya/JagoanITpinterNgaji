import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import BetaBetLogin from "./pages/signin";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<BetaBetLogin />} /> 
      </Routes>
    </Router>
  );
}

export default App;
