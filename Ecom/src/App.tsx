import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ChangeUsernamePage from "./components/pages/ChangeUsernamePage";
import ChangePasswordPage from "./components/pages/ChangePasswordPage";
import AdminUserPage from "./components/pages/AdminUserPage";
import UserListPage from "./components/pages/UserListPage";
import UserConfigModal from "./components/ui/UserConfigModal";
import SellerConfigModal from "./components/ui/SellerConfidModal";
import SellerPage from "./components/pages/SellerPage";
import SellerPageContact from "./components/pages/SellerPageContacts";
import RegisterSellerPage from "./components/pages/RegisterSellerPage";
import ProfileUserPage from "./components/pages/ProfileUserPage";
import ProfileSellerPage from "./components/pages/ProfileSellerPage";
import ProfileSellerProductsPage from "./components/pages/ProfileSellerProductsPage";
import CrudProductsPage from "./components/pages/CrudProductsPage";
import ProductView from "./components/pages/ProductView";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";
import SellerOffersPage from "./components/pages/SellerOffersPage";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/change-username" element={<ChangeUsernamePage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/admin-users" element={<AdminUserPage />} />
        <Route path="/user-list" element={<UserListPage />} />
        <Route path="/user-config-modal" element={<UserConfigModal />} />
        <Route path="/seller-config-modal" element={<SellerConfigModal />} />
        <Route path="/seller-page" element={<SellerPage />} />
        <Route path="/seller-offers-page" element={<SellerOffersPage />} />
        <Route path="/seller-page-contacts" element={<SellerPageContact />} />
        <Route path="/register-seller" element={<RegisterSellerPage />} />
        <Route path="/profile-user-page" element={<ProfileUserPage />} />
        <Route path="/profile-seller-page" element={<ProfileSellerPage />} />
        <Route path="/profile-seller-products-page" element={<ProfileSellerProductsPage />} />
        <Route path="/crud-products-page" element={<CrudProductsPage />} />
        <Route path="/product-view" element={<ProductView />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;