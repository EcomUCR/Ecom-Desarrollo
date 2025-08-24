import { useNavigate } from "react-router-dom";
import LandingHeader from "../ui/LandingHeader";
import logo from "../../img/logoG.png"; 

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
     
      <LandingHeader />

     
      <div className="flex flex-1 items-center justify-center px-8 md:px-20">
       
        <div className="max-w-lg mr-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Un mundo de productos a un click
          </h1>
          <button
            onClick={() => navigate("/home")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            ¡Comienza ya!
          </button>
        </div>

      
        <div>
          <img
            src={logo} 
            alt="Logo"
            className="md:w-130 md:h-130"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

