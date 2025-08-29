import SellerForm from '../ui/SellerForm';
import NavBar from "../ui/NavBarUser";

const ModifySellerPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <NavBar />
      <div className="py-10">
        <SellerForm />
      </div>
    </div>
  );
};

export default ModifySellerPage;
