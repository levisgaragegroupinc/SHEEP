import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import Homepage from "./pages/Homepage";
import ProjectPage from "./pages/ProjectPage";
import DonatePage from "./pages/Donate";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/projectPage" element={<ProjectPage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
