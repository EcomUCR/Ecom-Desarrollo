import { useState } from "react";
import foto from "../../img/perfil.png";

export default function UserProfile() {
    const [cambiarPassword, setCambiarPassword] = useState(false);

    return (
        <div className="border-l-2 border-main-dark/20 pl-4">
            <div className="flex flex-col pl-10">
                <h1 className="text-xl font-quicksand">Información de la cuenta</h1>
            </div>

            <div className="flex w-full flex-col justify-center gap-4">
                <div className="flex justify-center">
                    <img src={foto} alt="" className="w-auto h-80 rounded-full" />
                </div>

                <div className="w-[70%] mx-auto">
                    <form className="flex flex-col gap-5 pt-10">
                        <div className="flex gap-2">
                            <input 
                                type="text" 
                                placeholder="Nombre" 
                                className="bg-main-dark/20 rounded-xl px-3 py-2 w-full" 
                            />
                            <input 
                                type="text" 
                                placeholder="correo" 
                                className="bg-main-dark/20 rounded-xl px-3 py-2 w-full" 
                                disabled 
                            />
                        </div>

                        <input 
                            type="text" 
                            placeholder="Nombre de usuario" 
                            className="bg-main-dark/20 rounded-xl px-3 py-2 w-[50%]" 
                        />

                        <label className="flex items-center gap-2 pt-5">
                            Cambiar contraseña
                            <input 
                                type="checkbox" 
                                checked={cambiarPassword}
                                onChange={() => setCambiarPassword(!cambiarPassword)} 
                            />
                        </label>

                        {/* Esto muestra el div de las contraseñas pero solo si está activado */}
                        {cambiarPassword && (
                            <div className="flex flex-col gap-5">
                                <input 
                                    type="password" 
                                    placeholder="Contraseña actual" 
                                    className="bg-main-dark/20 rounded-xl px-3 py-2 w-[50%]" 
                                />
                                <div className="flex gap-2">
                                    <input 
                                        type="password" 
                                        placeholder="Nueva contraseña" 
                                        className="bg-main-dark/20 rounded-xl px-3 py-2 w-full" 
                                    />
                                    <input 
                                        type="password" 
                                        placeholder="Confirmar contraseña" 
                                        className="bg-main-dark/20 rounded-xl px-3 py-2 w-full" 
                                    />
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
