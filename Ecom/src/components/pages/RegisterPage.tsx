import { Link } from 'react-router-dom';
import LandingHeader from "../ui/LandingHeader";
import logo from "../../img/logoT.png"; 

function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <LandingHeader />
      <div className="flex flex-1">
       
        <div className="hidden lg:flex w-1/3 bg-[#5C2E92] items-center justify-center p-8 relative rounded-r-[5rem]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <Link to="/login">
              <button className="text-xl font-bold text-white mb-8">
                Iniciar Sesión
              </button>
            </Link>
            <button className="text-xl font-bold text-[#5C2E92] bg-white rounded-full py-2 px-8 shadow-lg">
              Registrarse
            </button>
          </div>
        </div>

        
         <div className="w-full lg:w-2/3 bg-white flex flex-col items-center justify-center p-8">
        
          <div className="flex flex-col items-center mb-12">
            <img
              src={logo} 
              alt="Logo"
              className="w-40 h-40 object-contain mb-4"
            />
            <h1 className="text-4xl font-bold">TucaShop</h1>
          </div>


          
          <form className="w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-gray-600 mb-2" htmlFor="firstName">
                  Nombre
                </label>
                <input
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#5C2E92]"
                  id="firstName"
                  type="text"
                  placeholder=" "
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2" htmlFor="lastName">
                  Apellido
                </label>
                <input
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#5C2E92]"
                  id="lastName"
                  type="text"
                  placeholder=" "
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-600 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#5C2E92]"
                  id="email"
                  type="email"
                  placeholder=" "
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-600 mb-2" htmlFor="username">
                  Nombre de usuario
                </label>
                <input
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#5C2E92]"
                  id="username"
                  type="text"
                  placeholder=" "
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2" htmlFor="password">
                  Contraseña
                </label>
                <input
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#5C2E92]"
                  id="password"
                  type="password"
                  placeholder=" "
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2" htmlFor="confirmPassword">
                  Confirmar contraseña
                </label>
                <input
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#5C2E92]"
                  id="confirmPassword"
                  type="password"
                  placeholder=" "
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-12">
              <button
                className="w-full md:w-1/2 bg-[#5C2E92] text-white font-bold py-3 px-4 rounded-full shadow-md"
                type="submit"
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;