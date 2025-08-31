import Header from "../ui/NavBar"
import SellerBaner from "../ui/SellerBaner";
import Footer from "../ui/Footer";
import NavBarSeller from "../ui/NavBarSeller";
import SellerProducts from "../ui/SellerProducts";


export default function SellerPage() {
  return (
    <div className="bg-white">
      <Header />
      <SellerBaner />
      <NavBarSeller />
      <main className=" w-full">
       
       
        
        <SellerProducts />
      </main>
      <Footer />
    </div>
  );
}