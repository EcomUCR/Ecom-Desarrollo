import { Button } from '../ui/button';
import StatusSwitch from '../ui/StatusSwitch';
import perfil from '../../img/perfil.png';
import editIcon from '../../img/editIcon.png';
import chuchillo from '../../img/cuchillos.png';
import NavBar from "../ui/NavBarUser";

const ModifyUserPage: React.FC = () => {
  const profileImageSrc: string = perfil;
  const productImageSrc: string = chuchillo;

  return (
    <>
      <NavBar />
      <div className="bg-gray-100 min-h-screen p-8 flex justify-center">
        <div className="w-full max-w-6xl relative">

          <div className="flex items-center justify-between mb-6 mt-4">

            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Back</span>
            </div>


            <h2 className="text-3xl font-bold text-center flex-1">
              Modificar Vendedor
            </h2>
          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 mb-6 text-sm items-center">
            <div>
              <p className="text-[#5B2A86] font-bold mb-1">UUID</p>
              <p className="text-gray-800 font-medium">1.1</p>
            </div>
            <div>
              <p className="text-[#5B2A86] font-bold mb-1">Tipo</p>
              <p className="text-gray-800 font-medium flex items-center gap-1">User</p>
            </div>
            <div>
              <p className="text-[#5B2A86] font-bold mb-1">Última conexión</p>
              <p className="text-gray-800 font-medium">12/10/2023 12:51:00</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#5B2A86] font-bold mb-1">Status</p>
              <StatusSwitch initial={true} />
            </div>
          </div>


          <div className="flex flex-col md:flex-row gap-8">

            <div className="w-full md:w-1/2 p-6 rounded-lg border border-[#00B4D8] flex flex-col">

              <div className="w-full flex justify-center mb-8">
                <img
                  src={profileImageSrc}
                  alt="User Profile"
                  className="w-full max-h-80 object-contain rounded-lg"
                />
              </div>


              <div className="space-y-4 flex-grow">
                <div className="flex flex-col">
                  <label className="text-gray-500 text-sm">Fullname</label>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-800 font-medium">John Jara Solano Carranza</p>
                    <img src={editIcon} alt="Edit" className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-500 text-sm">Username</label>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-800 font-medium">@johnjito</p>
                    <img src={editIcon} alt="Edit" className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-500 text-sm">Correo</label>
                  <p className="text-gray-400 font-medium">j.jara@gmail.com</p>
                </div>
              </div>


              <div className="flex flex-col gap-4 mt-8">
                <Button
                  variant="default"
                  className="bg-[#f0c341] hover:bg-[#f0c341]/90 text-white rounded-md py-2 px-4"
                >
                  Cambiar contraseña
                </Button>
                <Button
                  variant="destructive"
                  className="bg-[#fe5143] hover:bg-[#fe5143]/90 text-white rounded-md py-2 px-4"
                >
                  Eliminar Cuenta
                </Button>
              </div>
            </div>


            <div className="w-full md:w-1/2 p-6 rounded-lg border border-[#00B4D8] flex flex-col">
              <div className="flex-grow">

                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-gray-800">
                    Usuario - <span className="text-green-500">Activo</span>
                  </h3>
                </div>


                <div className="flex justify-between items-start gap-6">

                  <div className="space-y-2 text-base text-gray-700 mt-5">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Última compra</h4>
                    <p className="font-medium text-gray-800">Fecha:</p>
                    <p>25/08/2025 22:00</p>

                    <p className="font-medium text-gray-800">Artículos comprados:</p>
                    <p>12</p>

                    <p className="font-medium text-gray-800">Total gastado:</p>
                    <p>$200000</p>
                  </div>


                  <div className="flex flex-col items-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-5">Última compra</h4>
                    <div className="flex flex-col items-center border border-[#00B4D8] rounded-lg p-4 w-48">
                      <div className="w-full h-32 mb-4">
                        <img
                          src={productImageSrc}
                          alt="Product"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="text-center text-base text-gray-700">
                        <p>Set cuchillos Telstar</p>
                        <p>5pcs color azul</p>
                        <p className="text-sm text-gray-500">Telstar</p>
                        <p className="font-bold text-lg text-[#5B2A86]">€15.750</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="mt-8">
                <Button
                  variant="default"
                  className="w-full bg-[#f0c341] hover:bg-[#f0c341]/90 text-white rounded-md py-2 px-4"
                >
                  Ver historial de compras
                </Button>
              </div>
            </div>
          </div>


          <div className="mt-8 text-center pt-6">
            <p className="text-sm text-red-700 mb-4">
              Every change will be notified to the account owner.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="destructive"
                className="bg-black text-white px-6 py-2 rounded-lg"
              >
                Cancel
              </Button>
              <Button
                variant="default"
                className="bg-[#00A1E0] text-white px-6 py-2 rounded-lg"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModifyUserPage;
