import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingHeader from "../ui/NavBarLanding";
import logo from "../../img/logoT.png";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e ) => {
    e.preventDefault(); // Evita recargar la página

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include", // ⚡ Muy importante para guardar la sesión
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login exitoso ✅");
        console.log("Login exitoso:", data.message);
        navigate("/home");
        localStorage.setItem("userId", data.user.id.toString());
        console.log("User ID almacenado:", data.user.id);
      } else {
        setMessage("Error: " + (data.email || "Credenciales incorrectas"));
      }
    } catch (err) {
      setMessage("Error de conexión");
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <LandingHeader />
      <div className="flex flex-1">
        <div className="hidden lg:flex w-1/3 bg-[#FFDD44] items-center justify-center p-8 relative rounded-r-[5rem]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <button className="text-xl font-bold text-gray-800 bg-white rounded-full py-2 px-8 shadow-lg">
              Iniciar Sesión
            </button>
            <Link to="/register">
              <button className="mt-8 text-xl font-bold text-gray-800">
                Registrarse
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-2/3 bg-white flex flex-col items-center justify-center p-8">
          <div className="flex flex-col items-center mb-12">
            <img src={logo} alt="Logo" className="w-40 h-40 object-contain mb-4" />
            <h1 className="text-4xl font-bold">TucaShop</h1>
          </div>

          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#FFDD44]"
                id="email"
                type="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#FFDD44]"
                id="password"
                type="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-center mt-12">
              <button
                className="w-full bg-[#FFDD44] text-gray-800 font-bold py-3 px-4 rounded-full shadow-md"
                type="submit"
              >
                Iniciar Sesión
              </button>
            </div>

            {message && (
              <div className="flex justify-center mt-4 text-red-600">{message}</div>
            )}

            <div className="flex justify-center mt-4">
              <Link to="/forgot-password" className="text-gray-600 text-sm hover:underline">
                ¿Olvidaste la contraseña?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;