import { useNavigate } from "react-router-dom";
import LandingHeader from "../ui/NavBarLanding";
import logo from "../../img/logoG.png";
import ButtonComponent from "../ui/ButtonComponent";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">

      <LandingHeader />


      <div className="flex flex-1 items-center justify-center px-8 md:px-20">

        <div className="max-w-lg mr-12">
          <h1 className="text-4xl md:text-6xl font-quicksand  mb-6">
            Un <span className="font-bold">mundo</span> de <span className="font-bold">productos</span> a un <span className="font-bold">click</span>
          </h1>
          <ButtonComponent
            action={() => navigate("/home")}
            style='bg-purple-main text-white font-semibold py-3 px-6 rounded-lg'
            text='¡Comienza ya!'
          />
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

