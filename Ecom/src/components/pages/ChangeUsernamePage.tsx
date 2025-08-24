// src/components/ui/ChangeUsernamePage.jsx
import { Link } from 'react-router-dom';
import LandingHeader from '../ui/LandingHeader';

const ChangeUsernamePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#2AC0E5] animate-fade-in">
      <LandingHeader />
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="bg-[#4A90E2] w-full max-w-lg p-10 rounded-[2rem] text-center shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-2">Actualizar nombre de usuario</h2>
          <p className="text-white mb-8">Escribe tu nuevo nombre de usuario</p>
          <div className="mb-8">
            <input
              className="w-full px-4 py-3 bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-opacity-75 transition-colors"
              type="text"
              placeholder=" "
            />
          </div>
          <div className="flex justify-center space-x-4">
            <Link to="/profile">
              <button className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-200 transition">
                Cancelar
              </button>
            </Link>
            <button className="bg-[#5C2E92] text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-purple-800 transition">
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeUsernamePage;