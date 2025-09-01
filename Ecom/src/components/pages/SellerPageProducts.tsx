import Header from "../ui/NavBar"
import SellerBaner from "../ui/SellerBaner";
import Footer from "../ui/Footer";
import NavBarSeller from "../ui/NavBarSeller";
import SellerPageProduct from "../ui/SellerPageProducts";


export default function SellerPageProducts() {
  return (
    <div className="bg-white">
      <Header />
      <SellerBaner />
      <NavBarSeller />
      <main className=" w-full">
       
        
        <SellerPageProduct />
      </main>
      <Footer />
    </div>
  );
}