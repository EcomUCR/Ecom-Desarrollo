import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logoT.png";
import ButtonComponent from "../ui/ButtonComponent";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      if (response.ok) {
        setMessage("Login exitoso ✅");

        if (data.access_token) localStorage.setItem("token", data.access_token);
        if (data.user?.id) localStorage.setItem("userId", data.user.id.toString());
        if (data.vendor_id) localStorage.setItem("vendorId", data.vendor_id.toString());

        navigate("/");
      } else {
        setMessage("Error: " + (data.message || "Credenciales incorrectas"));
      }
    } catch (err) {
      setMessage("Error de conexión");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">

        <div className="hidden lg:flex w-1/3 bg-[#FFDD44] items-center justify-center p-8 relative rounded-r-[5rem]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <ButtonComponent
              text="Iniciar Sesión"
              style="text-xl font-bold text-gray-800 bg-white rounded-full py-2 px-8 shadow-lg"
            />
            <Link to="/register" className="mt-8 w-full">
              <ButtonComponent
                text="Registrarse"
                style="text-xl font-bold text-gray-800 bg-transparent hover:underline"
              />
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
              <label className="block text-blue-main mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border-b-2 border-blue-main"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-blue-main mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                className="w-full px-3 py-2 border-b-2 border-blue-main"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <ButtonComponent
              text="Iniciar Sesión"
              style="w-full bg-[#FFDD44] text-gray-800 font-bold py-3 px-4 rounded-full shadow-md mt-12"
            />

            {message && <div className="flex justify-center mt-4 text-red-600">{message}</div>}

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
