import { Button } from '../ui/button';
import StatusSwitch from '../ui/StatusSwitch';
import UserInfoPanel from "../ui/UserInfoPanel";
import UserPurchasePanel from "../ui/UserPurchasePanel";
import ModalButton from './ModalButton';

interface UserConfigModalProps {
  onCancel?: () => void;
  onSave?: () => void;
}

const UserConfigModal: React.FC<UserConfigModalProps> = ({ onCancel, onSave }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
     
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-4xl max-h-[80vh] overflow-y-auto p-8 flex flex-col">
        
        
        <div className="flex items-center justify-between mb-6 relative">
          <Button variant="ghost" className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium" onClick={onCancel}>
            <span className="text-lg">&lt;</span>
            Back
          </Button>
          <h2 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold">
            Modificar Usuario
          </h2>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 mb-6 text-sm items-center">
          <div>
            <p className="text-purple-main font-bold mb-1">UUID</p>
            <p className="text-gray-800 font-medium">1.1</p>
          </div>
          <div>
            <p className="text-purple-main font-bold mb-1">Tipo</p>
            <p className="text-gray-800 font-medium flex items-center gap-1">User</p>
          </div>
          <div>
            <p className="text-purple-main font-bold mb-1">Última conexión</p>
            <p className="text-gray-800 font-medium">12/10/2023 12:51:00</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-purple-main font-bold mb-1">Status</p>
            <StatusSwitch initial={true} />
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row gap-8">
          <UserInfoPanel />
          <UserPurchasePanel />
        </div>

        <ModalButton onCancel={onCancel} onSave={onSave} />
        

      </div>
    </div>
  );
};

export default UserConfigModal;
