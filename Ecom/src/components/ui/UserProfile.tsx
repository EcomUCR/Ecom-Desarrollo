import { Button } from "../ui/button";
import perfil from "../../img/perfil.png";
import userIcon from "../../img/userIconW.png";
import latterIcon from "../../img/latter.png";
import PencilIcon from "../../img/editIcon.png";

function UserProfile() {
  return (
    <div className="bg-white p-8 rounded-lg flex">
      <div className="w-1/4 pr-8">
        <h2 className="text-3xl font-semibold mb-6">Mi perfil</h2>
        <div className="space-y-4">
          <Button className="bg-purple-main gap-2">
            <img src={userIcon} alt="User" className="w-5 h-5" />
            <span>Información de la cuenta</span>
          </Button>
          <Button className="bg-white text-black  gap-2">
            <img src={latterIcon} alt="Historial" className="w-5 h-5" />
            <span>Historial de compra</span>
          </Button>
        </div>
      </div>

    
      <div className="w-3/4 pl-8">
        <h2 className="text-2xl mb-6">Información de la cuenta</h2>

       
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img
              src={perfil}
              alt="Profile"
              className="rounded-full object-cover max-w-[250px] max-h-[250px]"
            />
            <Button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md">
              <img src={PencilIcon} alt="Edit" className="w-5 h-5" />
            </Button>
          </div>
        </div>

       
        <div className="grid grid-cols-2 gap-6">
         
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fullname <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md bg-gray-200 p-2"
            />
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo 
            </label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md bg-gray-200 p-2"
            />
          </div>

         
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block px-34 rounded-md bg-gray-200 p-2"
            />
          </div>

          
          <div className="col-span-2 mt-4">
            <div className="flex items-center space-x-2 text-gray-600 font-medium mb-4">
              <span className="text-sm">Cambiar contraseña</span>
            </div>

            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Contraseña actual <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="mt-1 block px-34 rounded-md bg-gray-200 p-2"
              />
            </div>

            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nueva contraseña <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md bg-gray-200 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirmar nueva contraseña <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md bg-gray-200 p-2"
                />
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-10 flex justify-start">
          <Button className="px-50 py-2 bg-purple-main text-white rounded-lg">
            Guardar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
