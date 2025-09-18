import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

import foto from "../../img/perfil.png";
import banner from "../../img/banner.png";
import { IconPhone, IconSquareRoundedPlus } from "@tabler/icons-react";

interface UserProfileProps {
    type: "user" | "seller";
}

export default function UserProfile({ type }: UserProfileProps) {
    const [cambiarPassword, setCambiarPassword] = useState(false);

    return (
        <div className="border-l-2 border-main-dark/20 pl-4">
            <div className="flex flex-col pl-10">
                <h1 className="text-xl font-quicksand">Información de la cuenta</h1>
            </div>

            {type === "user" && (
                <div className="flex w-full flex-col justify-center gap-4 mt-10">
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
                        <div className="flex justify-between gap-2">
                            <ButtonComponent text="Cancelar" style="w-full p-3 rounded-full text-white bg-main gap-2 flex items-center justify-center mt-10" />
                            <ButtonComponent text="Guardar cambios" style="w-full p-3 rounded-full text-white bg-contrast-secondary gap-2 flex items-center justify-center mt-10" />
                        </div>
                    </div>
                </div>
            )}

            {type === "seller" && (
                <div className="flex w-full flex-col justify-center gap-4 mt-10">
                    <div className="flex justify-center items-center gap-10">
                        <img src={foto} alt="" className="w-auto h-40 rounded-full" />
                        <img src={banner} alt="" className="w-auto h-20 rounded-full" />
                    </div>

                    <div className="w-[70%] mx-auto">
                        <form className="flex flex-col gap-5 pt-10">
                            <section className="flex flex-col gap-5">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Nombre de la tienda"
                                        className="bg-main-dark/20 rounded-xl px-3 py-2 w-full"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Correo"
                                        className="bg-main-dark/20 rounded-xl px-3 py-2 w-full"
                                        disabled
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <textarea
                                        placeholder="Descripción de la tienda"
                                        rows={4}
                                        className="bg-main-dark/20 rounded-xl px-3 py-2 w-[50%]"
                                    />
                                    <textarea
                                        placeholder="Dirección de la tienda"
                                        rows={4}
                                        className="bg-main-dark/20 rounded-xl px-3 py-2 w-[50%]"
                                    />
                                </div>
                            </section>
                            <section>
                                <div className="flex items-center gap-2">
                                    <h2>Links/Redes sociales</h2>
                                    <ButtonComponent icon={<IconSquareRoundedPlus />} iconStyle="text-contrast-secondary" />
                                </div>
                            </section>
                            <section>
                                <div className="w-1/2 bg-main-dark/20 rounded-xl px-3 flex items-center gap-2">
                                    <IconPhone className="text-contrast-secondary" />
                                    <input
                                        type="text"
                                        placeholder="+506 8888-8888"
                                        className="w-full h-full py-2 focus:outline-none"
                                    />
                                </div>
                            </section>
                            <label className="flex items-center gap-2 pt-5">
                                Cambiar contraseña
                                <input
                                    type="checkbox"
                                    checked={cambiarPassword}
                                    onChange={() => setCambiarPassword(!cambiarPassword)}
                                />
                            </label>
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
                        <div className="flex justify-between gap-2">
                            <ButtonComponent text="Cancelar" style="w-full p-3 rounded-full text-white bg-main gap-2 flex items-center justify-center mt-10" />
                            <ButtonComponent text="Guardar cambios" style="w-full p-3 rounded-full text-white bg-contrast-secondary gap-2 flex items-center justify-center mt-10" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
