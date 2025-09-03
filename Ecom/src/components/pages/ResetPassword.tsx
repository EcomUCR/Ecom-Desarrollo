import ButtonComponent from '../ui/ButtonComponent';
import logo from "../../img/tucaShopLogo.png";
import left from "../../img/leftR.png";
import right from "../../img/rightR.png";

const ResetPassword = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
            <img src={left} alt="Left background" className="absolute top-0 left-0 h-full w-auto" />
            <img src={right} alt="Right background" className="absolute top-0 right-0 h-full w-auto" />
            <div className="relative z-10 flex flex-col items-center p-8 w-full max-w-md bg-transparent">
                <img src={logo} alt="TucaShop Logo" className="w-24 h-24 mb-4" />
                <h1 className="text-3xl font-bold mb-8">TucaShop</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Nueva contraseña
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="px-4 py-3 bg-gray-300  w-130"
                    />
                </div>   
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Confirmar contraseña
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="px-4 py-3 bg-gray-300  w-130"
                    />
                </div>
                <div className="text-center text-yellow-main text-sm mb-6">
                    Ingresa una contraseña valida.
                </div>
                <div className="w-full">
                    <ButtonComponent
                        text="Actualizar contraseña"
                        onClick={() => console.log('Recovery email sent')}
                        style="w-full bg-blue-main text-black py-3 px-6  font-semibold"
                    />
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
