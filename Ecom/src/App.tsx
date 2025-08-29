import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import HomePage from "./components/pages/HomePage1";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ProfilePage from "./components/pages/ProfilePage";
import ChangeUsernamePage from "./components/pages/ChangeUsernamePage";
import ChangePasswordPage from "./components/pages/ChangePasswordPage";
import AdminUserPage from "./components/pages/AdminUserPage";
import UserListPage from "./components/pages/UserListPage";
import ModifySellerPage from "./components/pages/ModifySellerPage";
import ModifyUserPage from "./components/pages/ModifyUserPage";


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
        <Route path="/admin-users" element={<AdminUserPage />} />
        <Route path="/user-list" element={<UserListPage />} />
        <Route path="/ModifySeller" element={<ModifySellerPage />} />
        <Route path="/ModifyUser" element={<ModifyUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;