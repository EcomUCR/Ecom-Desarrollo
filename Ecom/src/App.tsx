import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./(archived) components/pages/HomePage";
import LoginPage from "./(archived) components/pages/LoginPage";
import RegisterPage from "./(archived) components/pages/RegisterPage";
import ChangeUsernamePage from "./(archived) components/pages/ChangeUsernamePage";
import ChangePasswordPage from "./(archived) components/pages/ChangePasswordPage";
import AdminUserPage from "./(archived) components/pages/AdminUserPage";
import UserListPage from "./(archived) components/pages/UserListPage";
//import UserConfigModal from "./components/ui/UserConfigModal";
import SellerConfigModal from "./(archived) components/ui/SellerConfigModal";
import SellerPage from "./(archived) components/pages/SellerPage";
import SellerPageContact from "./(archived) components/pages/SellerPageContacts";
import RegisterSellerPage from "./(archived) components/pages/RegisterSellerPage";
import ProfileUserPage from "./(archived) components/pages/ProfileUserPage";
import ProfileSellerPage from "./(archived) components/pages/ProfileSellerPage";
import ProfileSellerProductsPage from "./(archived) components/pages/ProfileSellerProductsPage";
import CrudProductsPage from "./(archived) components/pages/CrudProductsPage";
import ProductView from "./(archived) components/pages/ProductView";
import ForgotPassword from "./(archived) components/pages/ForgotPassword";
import ResetPassword from "./(archived) components/pages/ResetPassword";
import SellerOffersPage from "./(archived) components/pages/SellerOffersPage";


import HomePageRaul from "./componentsRaul/pages/HomePageRaul";
import LoginRegisterPageRaul from "./componentsRaul/pages/LoginRegisterPageRaul";
import RegisterSellerPageRaul from "./componentsRaul/pages/RegisterSellerPageRaul";
import BeSellerPageRaul from "./componentsRaul/pages/BeSellerPageRaul";
import SellerPageRaul from "./componentsRaul/pages/SellerPageRaul";
import ProfilePage from "./componentsRaul/pages/ProfilePage";
import ShoppingCartPage from "./componentsRaul/pages/ShoppingCartPage";
import ProductPage from "./componentsRaul/pages/ProductPage";
import ResetPasswordPage from "./componentsRaul/pages/ResetPasswordPage";
import ForgotPasswordPage from "./componentsRaul/pages/ForgotPasswordPage";
import CrudProductPage from "./componentsRaul/pages/CrudProductPage";
import AdminPage from "./componentsRaul/pages/AdminPage";

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
        {/*<Route path="/user-config-modal" element={<UserConfigModal />} />*/}
        <Route path="/seller-config-modal" element={<SellerConfigModal />} />
        <Route path="/seller-page" element={<SellerPage />} />
        <Route path="/seller-offers-page" element={<SellerOffersPage />} />
        <Route path="/seller-page-contacts" element={<SellerPageContact />} />
        <Route path="/register-seller" element={<RegisterSellerPage />} />
        <Route path="/profile-user" element={<ProfileUserPage />} />
        <Route path="/profile-vendor" element={<ProfileSellerPage />} />
        <Route path="/profile-seller-products-page" element={<ProfileSellerProductsPage />} />
        
        {/* Productos */}
        <Route path="/crud-products-page" element={<CrudProductsPage />} /> {/* Crear */}
        <Route path="/crud-products-page/:id" element={<CrudProductsPage />} /> {/* Editar */}
        
        <Route path="/product-view" element={<ProductView />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path='/homeRaul' element={<HomePageRaul/>}/>
        <Route path='/loginRegisterRaul' element={<LoginRegisterPageRaul/>}/>
        <Route path='/registerSellerRaul' element={<RegisterSellerPageRaul/>}/>
        <Route path='/beSellerPageRaul' element={<BeSellerPageRaul/>}/>
        <Route path='/sellerPageRaul' element={<SellerPageRaul/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/shoppingCart' element={<ShoppingCartPage/>}/>
        <Route path='/productPage' element={<ProductPage/>}/>
        <Route path='/resetPassword' element={<ResetPasswordPage/>}/>
        <Route path='/forgotPassword' element={<ForgotPasswordPage/>}/>
        <Route path='/crudProduct' element={<CrudProductPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
