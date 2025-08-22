
import logo from "../../img/logoT.png"; 
export default function Footer() {
  return (
    <footer className="bg-cyan-500 text-white py-6 mt-10 flex flex-col items-center">
      
      <div className="flex items-center justify-center mb-2">
        <p className="text-sm mr-60">Derechos reservados eCom</p>
        <img
          src={logo} 
          alt="Logo TucaShop"
          className="h-12 w-auto"
        />
        <p className="text-sm ml-60">Derechos reservados eCom</p>
      </div>

      
      <p className="text-white font-bold text-lg">TucaShop</p>
    </footer>
  );
}
