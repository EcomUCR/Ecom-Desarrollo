import { Link } from 'react-router-dom';
import Header from './Header';
import perfil from "../../img/perfil.png";

const ProfilePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white animate-fade-in">
            <Header />
            <div className="flex flex-1 items-center justify-center p-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-20 w-full max-w-6xl">


                    <div className="flex flex-col items-start text-left lg:mb-0 ml-15">
                        <h2 className="text-3xl font-bold mb-6">Tu perfil</h2>
                        <div className="relative w-72 h-72">
                            <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                                <img
                                    src={perfil}
                                    alt="User Profile"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col items-center">
                            <p className="text-2xl font-bold">María Pérez Medrano</p>
                            <p className="text-gray-600">@maria_1medrano</p>
                        </div>
                    </div>


                    <div className="flex flex-col space-y-8 w-full items-center justify-center mt-32 ml-8">
                        <Link to="/change-password">
                            <button className="w-[500px] py-4 bg-[#5C2E92] text-white font-bold text-xl rounded-[1rem] shadow-md hover:bg-purple-800 transition">
                                Cambiar contraseña
                            </button>
                        </Link>
                        <Link to="/change-username">
                            <button className="w-[500px] py-4 bg-[#FFDD44] text-gray-800 font-bold text-xl rounded-[1rem] shadow-md hover:bg-yellow-500 transition">
                                Cambiar nombre de usuario
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
