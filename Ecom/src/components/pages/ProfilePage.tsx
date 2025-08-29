import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../ui/NavBar";
import perfilPlaceholder from "../../img/perfil.png";

interface Profile {
    id: number;
    username: string;
    name: string;
    last_name: string;
    image?: string | null;
}

const ProfilePage = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (!userId) {
            navigate("/login");
            return;
        }

        const fetchProfile = async () => {
            try {
                const res = await fetch(`/api/profiles/${userId}`, {
                    credentials: "include",
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();
                setProfile(data);
                setName(data.name);
                setUsername(data.username);
            } catch (err) {
                console.error("Error fetching profile:", err);
                setMessage("No se pudo cargar el perfil");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [userId, navigate]);

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await fetch(`/api/profiles/${userId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ name, username }),
            });

            const data = await res.json();

            if (res.ok) {
                setProfile(data);
                setMessage("Perfil actualizado ✅");
            } else {
                setMessage("Error: " + (data.message || "No se pudo actualizar"));
            }
        } catch (err) {
            console.error(err);
            setMessage("Error de conexión");
        }
    };

    // Nueva función para cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem("userId"); // Borra el ID del usuario
        navigate("/login"); // Redirige al login
    };

    if (loading) return <div>Cargando perfil...</div>;
    if (!profile) return <div>{message || "Perfil no encontrado"}</div>;

    return (
        <div className="flex flex-col min-h-screen bg-white animate-fade-in">
            <Header />
            <div className="flex flex-1 items-center justify-center p-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-20 w-full max-w-6xl">

                    <div className="flex flex-col items-start text-left lg:mb-0 ml-15">
                        <h2 className="text-3xl font-bold mb-6">Tu perfil</h2>
                        <div>
                            <div className="relative w-72 h-72">
                                <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                                    <img
                                        src={profile.image || perfilPlaceholder}
                                        alt="User Profile"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex flex-col items-center">
                                <p className="text-2xl font-bold">{profile.name} {profile.last_name}</p>
                                <p className="text-gray-600">@{profile.username}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-8 w-full items-center justify-center mt-32 ml-8">
                        <Link to="/change-password">
                            <button className="w-[500px] py-4 bg-[#5C2E92] text-white font-bold text-xl rounded-[1rem] shadow-md hover:bg-purple-800 transition">
                                Cambiar contraseña
                            </button>
                        </Link>
                        <Link to="/change-username">
                            <button className="w-[500px] py-4 bg-[#FFDD44] text-gray-800 font-bold text-xl rounded-[1rem] shadow-md hover:bg-yellow-500 transition">
                                Cambiar nombre de usuario
                            </button>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="w-[500px] py-4 text-black font-bold text-xl rounded-[1rem]"
                        >
                            Cerrar Sesión
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
