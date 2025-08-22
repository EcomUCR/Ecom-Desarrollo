import logo from "../../img/logoT.png";

function LandingHeader() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-blue-600">

      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto"
        />
        <span className="text-white font-bold text-xl">TucaShop</span>
      </div>

      <nav className="space-x-4">
        <a href="/landing" className="text-white hover:underline">Inicio</a>
        <a href="/home" className="text-white hover:underline">Productos</a>
        <a href="/login" className="text-white hover:underline">Iniciar Sesión</a>
        <a href="/register" className="text-white hover:underline">Registrarse</a>
      </nav>
    </header>
  );
}

export default LandingHeader;

