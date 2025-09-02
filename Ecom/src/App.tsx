import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ProfilePage from "./components/pages/ProfilePage";
import ChangeUsernamePage from "./components/pages/ChangeUsernamePage";
import ChangePasswordPage from "./components/pages/ChangePasswordPage";
import AdminUserPage from "./components/pages/AdminUserPage";
import UserListPage from "./components/pages/UserListPage";
import UserConfigModal from "./components/ui/UserConfigModal";
import SellerConfigModal from "./components/ui/SellerConfidModal";
import SellerPage from "./components/pages/SellerPage";
import SellerPageContact from "./components/pages/SellerPageContacts";
import RegisterSellerPage from "./components/pages/RegisterSellerPage";
import SellerOffersPage from "./components/pages/SellerOffersPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/change-username" element={<ChangeUsernamePage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/admin-users" element={<AdminUserPage />} />
        <Route path="/user-list" element={<UserListPage />} />
        <Route path="/user-config-modal" element={<UserConfigModal />} />
        <Route path="/seller-config-modal" element={<SellerConfigModal />} />
        <Route path="/seller-page" element={<SellerPage />} />
        <Route path="/seller-page-contacts" element={<SellerPageContact />} />
        <Route path="/seller-offers-page" element={<SellerOffersPage />} />
        <Route path="/register-seller" element={<RegisterSellerPage />} />
      </Routes>
    </Router>
  );
}

export default App;