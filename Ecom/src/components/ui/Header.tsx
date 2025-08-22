import { Link } from "react-router-dom";
import searchIcon from "../../img/search.png";
import userIcon from "../../img/usuario.png";
import bolsaIcon from "../../img/bolsa.png";
import lineasIcon from "../../img/lineas.png";
import logo from "../../img/logoT.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-cyan-500 px-6 py-3">

      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-white font-bold text-xl">TucaShop</span>
      </div>

      <div className="flex flex-1 max-w-lg mx-6">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-full px-4 py-2 rounded-l-lg outline-none bg-white"
        />
        <button className="px-4 rounded-r-lg bg-yellow-400 flex items-center justify-center">
          <img src={searchIcon} alt="Buscar" className="w-5 h-5" />
        </button>
      </div>


      <div className="flex items-center space-x-4">
        <Link to="/profile">
          <img src={userIcon} alt="Usuario" className="w-6 h-6 cursor-pointer" />
        </Link>
        <img src={bolsaIcon} alt="Bolsa" className="w-6 h-6" />
        <img src={lineasIcon} alt="Menú" className="w-6 h-6" />
      </div>
    </header>
  );
}
