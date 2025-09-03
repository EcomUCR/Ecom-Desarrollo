import Header from "../ui/NavBar"
import Footer from "../ui/Footer"
import UserProfile from "../ui/UserProfile"




export default function ProfileUserPage() {
  return (
    <div className="bg-white">
      <Header />
      
      <main className=" w-full">
       
       <UserProfile />
        
        
      </main>
      <Footer />
    </div>
  );
}