import { useState } from 'react';
import type { ChangeEvent } from 'react';
import StatusSwitch from './StatusSwitch';
import { Button } from './button';
import eyeIcon from '../../img/eye.png';
import fileIcon from '../../img/FileIcon.png';
import SellerIcon from '../../img/ShopIcon.png';

interface FileInputProps {
    label: string;
    initialFile?: string;
}

const FileInput: React.FC<FileInputProps> = ({ label, initialFile = '' }) => {
    const [fileName, setFileName] = useState<string>(initialFile);
    const [visible, setVisible] = useState<boolean>(true);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleFileIconClick = () => {
        const input = document.getElementById(label) as HTMLInputElement | null;
        if (input) input.click();
    };

    return (
        <div className="flex flex-col">
            <label className="text-[#5B2A86] font-bold mb-1">{label}</label>
            <div className="flex items-center gap-3 mt-1 bg-white rounded-lg px-3 py-2">
                <img
                    src={fileIcon}
                    alt="file icon"
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleFileIconClick}
                />
                <input
                    type="file"
                    id={label}
                    className="hidden"
                    onChange={handleFileChange}
                />
                <input
                    type="text"
                    className="flex-1 bg-transparent focus:outline-none"
                    value={visible ? fileName : '••••••••'}
                    readOnly
                />
                <img
                    src={eyeIcon}
                    alt="eye icon"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setVisible(!visible)}
                />
            </div>
        </div>
    );
};

const SellerForm: React.FC = () => {
    return (

        <div className="bg-white min-h-screen p-10">
            <div className="bg-gray-100 p-10 rounded-xl shadow-md max-w-6xl mx-auto space-y-8">



                <div className="flex items-center justify-between mb-6">

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


                    <h2 className="text-2xl font-bold text-center flex-1">
                        Modificar Vendedor
                    </h2>
                </div>




                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                    <div>
                        <p className="text-[#5B2A86] font-bold">ID</p>
                        <div className="mt-1  rounded-lg px-3 py-2">1.1</div>
                    </div>
                    <div>
                        <p className="text-[#5B2A86] font-bold">User Type</p>
                        <div className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 ">
                            <span>Seller</span>
                            <img src={SellerIcon} alt="Seller icon" className="w-6 h-6" />
                        </div>



                    </div>
                    <div className="md:col-span-2 flex items-center justify-between">

                        <div className="flex flex-col">
                            <p className="text-[#5B2A86] font-bold">Last Connection</p>
                            <div className="mt-1  rounded-lg py-2 px-3 w-full md:w-56 text-gray-800">
                                12/18/2025 12:51:00
                            </div>
                        </div>


                        <div className="flex flex-col items-center">
                            <p className="text-[#5B2A86] font-bold mb-1">Status</p>
                            <StatusSwitch initial={true} />
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="flex flex-col">
                        <label className="text-[#5B2A86] font-bold mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Nombre del vendedor"
                            className="bg-white rounded-lg px-3 py-2 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[#5B2A86] font-bold mb-1">Tipo</label>
                        <input
                            type="text"
                            placeholder="Sociedad"
                            className="bg-white rounded-lg px-3 py-2 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[#5B2A86] font-bold mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="example@email.com"
                            className="bg-white rounded-lg px-3 py-2 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col md:col-span-2">
                        <label className="text-[#5B2A86] font-bold mb-1">Address</label>
                        <input
                            type="text"
                            placeholder="Address example"
                            className="bg-white rounded-lg px-4 py-10 focus:outline-none w-full"
                        />
                    </div>

                    <div className="flex flex-col md:col-span-1">
                        <label className="text-[#5B2A86] font-bold mb-1">Contact Number</label>
                        <input
                            type="tel"
                            placeholder="+504 8856-8856"
                            className="bg-white rounded-lg px-3 py-2 focus:outline-none w-full"
                        />
                    </div>
                </div>


                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-[#5B2A86]">Identificación y verificación</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-4">
                        <div className="w-full md:w-80">
                            <FileInput label="Documento de identidad" initialFile="id.pdf" />
                        </div>
                        <div className="w-full md:w-80">
                            <FileInput label="Comprobante domicilio" initialFile="domicilio.pdf" />
                        </div>
                    </div>
                </div>



                <div className="space-y-6 mt-6">
                    <h3 className="text-xl font-bold text-[#5B2A86]">Datos fiscales y financieros</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FileInput label="Identificación fiscal" initialFile="id.pdf" />
                        <div className="flex flex-col">
                            <label className="text-[#5B2A86] font-bold mb-1">Cuenta bancaria</label>
                            <input
                                type="text"
                                placeholder="IBAN17015202001..."
                                className="bg-white rounded-lg px-3 py-2 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[#5B2A86] font-bold mb-1">Tarjeta de crédito válida</label>
                            <input
                                type="text"
                                placeholder="IBAN17015202001..."
                                className="bg-white rounded-lg px-3 py-2 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>


                <div className="space-y-6 mt-6">
                    <h3 className="text-xl font-bold text-[#5B2A86]">Perfil público</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col">
                            <label className="text-[#5B2A86] font-bold mb-1">Nombre de la tienda</label>
                            <input
                                type="text"
                                placeholder="Example"
                                className="bg-white rounded-lg px-3 py-2 focus:outline-none"
                            />
                        </div>
                        <FileInput label="Logo/Imagen de marca" initialFile="logo.jpg" />
                        <div className="flex flex-col">
                            <label className="text-[#5B2A86] font-bold mb-1">Category</label>
                            <input
                                type="text"
                                placeholder="Jewelry"
                                className="bg-white rounded-lg px-3 py-2 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-6">
                        <label className="text-[#5B2A86] font-bold mb-1">Descripción del negocio</label>
                        <textarea
                            placeholder="Descripción"
                            rows={4}
                            className="bg-white rounded-lg px-3 py-2 focus:outline-none w-full"
                        ></textarea>
                    </div>
                </div>


                <div className="mt-6">
                    <h3 className="text-xl font-bold text-[#5B2A86] mb-4">Publicaciones creadas</h3>
                    <Button
                        variant="ghost"
                        className="text-white bg-yellow-400 font-medium px-14"
                        onClick={() => { }}
                    >
                        Ver productos
                    </Button>
                </div>


                <div className="mt-8 text-center">
                    <p className="text-sm text-red-700 mb-4">Every change will be notified to the account owner.</p>
                    <div className="flex justify-center gap-4">
                        <Button
                            variant="destructive"
                            className="bg-black text-white px-6 py-2 rounded-lg"
                            onClick={() => { }}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="default"
                            className="bg-[#00A1E0] text-white px-6 py-2 rounded-lg"
                            onClick={() => { }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerForm;
