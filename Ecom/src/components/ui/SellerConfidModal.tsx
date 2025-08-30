import { Button } from '../ui/button';
import SellerForm from '../ui/SellerForm';
import ModalButton from './ModalButton';


interface SellerConfigModalProps {
  onCancel?: () => void;
  onSave?: () => void;
}

const SellerConfigModal: React.FC<SellerConfigModalProps> = ({ onCancel, onSave }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      
      
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-5xl max-h-[80vh] overflow-y-auto flex flex-col">
        
       
        <div className="flex items-center justify-between mb-6 p-8 relative">
          <Button
            variant="ghost"
            className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium"
            onClick={onCancel}
          >
            <span className="text-lg">&lt;</span>
            Back
          </Button>
          <h2 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold">
            Modificar Vendedor
          </h2>
        </div>

      
        <div className="px-8">
          <SellerForm />
           <ModalButton onCancel={onCancel} onSave={onSave} />
        </div>

      </div>
    </div>
  );
};

export default SellerConfigModal;
