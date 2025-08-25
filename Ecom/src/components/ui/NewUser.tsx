export default function NewUser() {
    return (
        <section className=" flex flex-col items-center justify-center ">
            <div className="border-2 p-5 rounded-xl my-20 ">
                <form className="w-full max-w-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div>
                            <label className="block text-gray-600 mb-2" htmlFor="firstName">
                                Nombre
                            </label>
                            <input
                                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#5C2E92]"
                                id="firstName"
                                type="text"
                                placeholder=" "
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-2" htmlFor="lastName">
                                Apellido
                            </label>
                            <input
                                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#5C2E92]"
                                id="lastName"
                                type="text"
                                placeholder=" "
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-gray-600 mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#5C2E92]"
                                id="email"
                                type="email"
                                placeholder=" "
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-gray-600 mb-2" htmlFor="username">
                                Nombre de usuario
                            </label>
                            <input
                                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#5C2E92]"
                                id="username"
                                type="text"
                                placeholder=" "
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-gray-600 mb-2" htmlFor="type">
                                Rol
                            </label>
                            <input
                                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#5C2E92]"
                                id="type"
                                type="number"
                                placeholder=" "
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-2" htmlFor="password">
                                Contraseña
                            </label>
                            <input
                                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#5C2E92]"
                                id="password"
                                type="password"
                                placeholder=" "
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-2" htmlFor="confirmPassword">
                                Confirmar contraseña
                            </label>
                            <input
                                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#5C2E92]"
                                id="confirmPassword"
                                type="password"
                                placeholder=" "
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-12">
                        <button
                            className="w-full md:w-1/2 bg-[#5C2E92] text-white font-bold py-3 px-4 rounded-full shadow-md"
                            type="submit"
                        >
                            Crear usuario
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}