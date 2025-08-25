import { useNavigate } from "react-router-dom";
import NavBarLanding from "../ui/NavBarLanding";
import logo from "../../img/logoG.png";
import ButtonComponent from "../ui/ButtonComponent";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">

      <NavBarLanding />


      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-20 px-10 lg:pt-0 pt-10">
        <div className="flex flex-col max-w-lg space-y-6">
          <h1 className=" lg:text-6xl font-quicksand mb-6 text-4xl lg:leading-20">
            Un <span className="font-bold">mundo</span> de <span className="font-bold">productos,</span> a un <span className="font-bold">clic.</span>
          </h1>
          <ButtonComponent
            onClick={() => navigate("/home")}
            style='bg-purple-main text-white lg:w-[50%] font-quicksand font-semibold py-4 px-15 rounded-lg shadow-[1px_2px_3px_rgba(0,0,0,0.3)]'
            text='¡Comienza ya!'
          />
        </div>
        <div>
          <img
            src={logo}
            alt="Logo"
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

