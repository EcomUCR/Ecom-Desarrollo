import { Button } from "../ui/button";
import editIcon from "../../img/editIcon.png";
import perfil from "../../img/perfil.png";

interface UserInfoPanelProps {
  profileImageSrc?: string;
}

const UserInfoPanel: React.FC<UserInfoPanelProps> = ({ profileImageSrc = perfil }) => {
  return (
    <div className="w-full md:w-1/2 p-6 rounded-lg border border-blue-main flex flex-col">
     
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
          className="bg-yellow-main hover:bg-[#f0c341]/90 text-white rounded-md py-2 px-4"
        >
          Cambiar contraseña
        </Button>
        <Button
          variant="destructive"
          className="bg-red-800 hover:bg-[#fe5143]/90 text-white rounded-md py-2 px-4"
        >
          Eliminar Cuenta
        </Button>
      </div>
    </div>
  );
};

export default UserInfoPanel;
