import logo from "../../img/tucaShopLogo.png";

function LandingHeader() {
  return (
    <header className="flex justify-between items-center px- shadow-md bg-blue-main px-2 py-5 lg:px-20 lg:py-6">

      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto"
        />
        <span className="text-white pt-1 font-fugaz text-xl lg:text-3xl">TucaShop</span>
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

