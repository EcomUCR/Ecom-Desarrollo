import { Button } from "./button";
import bannerImage from "../../img/banner.png";
import logo from "../../img/unstable-games-logo.png";
import pencilIcon from "../../img/editIcon.png";
import insta from "../../img/InstaIcon.png";
import face from "../../img/FacebookIcon.png";
import x from "../../img/XIcon.png";
import linkIcon from "../../img/linkIcon.png";
import { useEffect, useState } from "react";

const ProfileSellerForm = () => {
    const [vendor, setVendor] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState<any>(null);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
    fetch("http://localhost/ecomdb/Backend/public/api/vendor", {
        credentials: "include",
    })
        .then((res) => res.json())
        .then((data) => {
            setVendor(data);
            setForm({
                name: data?.name || "",
                email: data?.email || "",
                address: data?.address || "",
                description: data?.description || "",
                phone: data?.phone || "",
                social: {
                    instagram: data?.social?.instagram || "",
                    facebook: data?.social?.facebook || "",
                    x: data?.social?.x || "",
                    linkedin: data?.social?.linkedin || "",
                },
            });
            setLoading(false);
        })
        .catch(() => setLoading(false));
}, []);

    if (loading || !form) {
        return <div className="p-6">Cargando...</div>;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name.startsWith("social.")) {
            const key = name.split(".")[1];
            setForm((prev: any) => ({
                ...prev,
                social: { ...prev.social, [key]: value },
            }));
        } else {
            setForm((prev: any) => ({ ...prev, [name]: value }));
        }
    };

    const handleSave = async () => {
    setSaving(true);
    await fetch("http://localhost/ecomdb/Backend/public/api/vendor", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
    });
    setSaving(false);
};

    return (
        <div className="p-6 flex-1">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Información de la cuenta</h2>


            <div className="flex justify-between mb-6">
               
                <div className="flex flex-col items-center">
                    <h3 className="text-gray-600 font-semibold mb-2">Foto de perfil</h3>
                    <img src={vendor?.logoUrl || logo} alt="Logo" className="w-40 h-auto object-contain" />
                    <div className="w-full flex justify-end mt-1">
                        <img
                            src={pencilIcon}
                            alt="Editar logo"
                            className="w-5 h-5 cursor-pointer"
                        />
                    </div>
                </div>

               
                <div className="flex flex-col items-center">
                    <h3 className="text-gray-600 font-semibold mb-2">Banner del perfil</h3>
                    <img src={vendor?.bannerUrl || bannerImage} alt="Banner" className="w-64 h-auto object-contain" />
                    <div className="w-full flex justify-end mt-1">
                        <img
                            src={pencilIcon}
                            alt="Editar banner"
                            className="w-5 h-5 cursor-pointer"
                        />
                    </div>
                </div>
            </div>



            <div className="grid grid-cols-2 gap-x-12 gap-y-6">

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Nombre <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Unstable Games"
                        className="w-full p-2 bg-gray-200 text-black rounded-md border-none"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>


                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Correo
                    </label>
                    <input
                        type="email"
                        placeholder="unstable@example.com"
                        className="w-full p-2 text-black"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>


                <div>
                    <label className="block text-gray-500 text-sm font-bold mb-2">
                        Address
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 h-20 bg-gray-200 text-black rounded-md border-none"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                    />
                </div>


                <div>
                    <label className="block text-gray-500 text-sm font-bold mb-2">
                        Description
                    </label>
                    <textarea
                        className="w-full p-2 h-20 bg-gray-200 text-black rounded-md border-none"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                    ></textarea>
                </div>


                <div className="col-span-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Social Media <span className="text-red-500">*</span>
                    </label>

                    <div className="grid grid-cols-2 gap-6">

                        <div className="flex items-center bg-gray-200 rounded-md px-2 h-12">
                            <img src={insta} alt="Instagram" className="w-5 h-5 mr-5" />
                            <input
                                type="text"
                                placeholder="@unstable_games"
                                className="flex-1 bg-gray-200 text-black border-none focus:outline-none text-center px-2"
                                name="social.instagram"
                                value={form.social.instagram}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="flex items-center bg-gray-200 rounded-md px-2 h-12">
                            <img src={face} alt="Facebook" className="w-5 h-5 mr-5" />
                            <input
                                type="text"
                                placeholder="Unstable Games"
                                className="flex-1 bg-gray-200 text-black border-none focus:outline-none text-center px-2"
                                name="social.facebook"
                                value={form.social.facebook}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="flex items-center bg-gray-200 rounded-md px-2 h-12">
                            <img src={x} alt="X" className="w-5 h-5 mr-5" />
                            <input
                                type="text"
                                placeholder="@unstablegames"
                                className="flex-1 bg-gray-200 text-black border-none focus:outline-none text-center px-2"
                                name="social.x"
                                value={form.social.x}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="flex items-center bg-gray-200 rounded-md px-2 h-12">
                            <img src={linkIcon} alt="LinkedIn" className="w-5 h-5 mr-5" />
                            <input
                                type="text"
                                placeholder="linkedin.com/company/unstable"
                                className="flex-1 bg-gray-200 text-black border-none focus:outline-none text-center px-2"
                                name="social.linkedin"
                                value={form.social.linkedin}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>


                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        placeholder="+506 8888-8888"
                        className="w-full p-2 bg-gray-200 text-black rounded-md border-none"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                    />
                </div>
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
                        className="mt-1 block w-full rounded-md bg-gray-200 p-2"
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


            <div className="mt-10 flex justify-start">
                <Button
                    className="px-50 py-2 bg-purple-main text-white rounded-lg"
                    onClick={handleSave}
                    disabled={saving}
                >
                    {saving ? "Guardando..." : "Guardar"}
                </Button>
            </div>
        </div>
    );
};

export default ProfileSellerForm;
