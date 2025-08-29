import { Button } from "../ui/button";

interface UserConfigModalProps {
  onCancel?: () => void;
  onSave?: () => void;
}

const UserConfigModal: React.FC<UserConfigModalProps> = ({ onCancel, onSave }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-3xl min-h-[500px] flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
          VER LAYER (MAUsuarios(ConfigUserFullView))
        </h2>
        <p className="text-red-500 text-sm mb-12">
          Every change will be notified to the account owner.
        </p>

        <div className="flex justify-center space-x-6">
          <Button
            variant="default"
            size="lg"
            className="bg-gray-800 text-white px-8 py-3 rounded-full shadow-md hover:opacity-90"
            onClick={onCancel}
          >
            Cancel
          </Button>

          <Button
            variant="default"
            size="lg"
            className="bg-[#2AC0E5] text-white px-8 py-3 rounded-full shadow-md hover:opacity-90"
            onClick={onSave}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserConfigModal;
