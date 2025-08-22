import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/ui/LandingPage";
import HomePage from "./components/ui/HomePage";
import LoginPage from "./components/ui/LoginPage";
import RegisterPage from "./components/ui/RegisterPage";
import ProfilePage from "./components/ui/ProfilePage";
import ChangeUsernamePage from "./components/ui/ChangeUsernamePage";
import ChangePasswordPage from "./components/ui/ChangePasswordPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/change-username" element={<ChangeUsernamePage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;