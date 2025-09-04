import Header from "../ui/NavBar"
import Footer from "../ui/Footer"
import ProfileSellerForm from "../ui/ProfileSellerForm";
import SideBar from "../ui/SideBar";





export default function ProfileSellerPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="flex w-full">
        <div className="w-[33%]">
          <SideBar type="vendor" />
        </div>
        <div className="w-[66%]">
          <ProfileSellerForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}