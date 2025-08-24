
import logo from "../../img/tucaShopLogo.png";
export default function Footer() {
  return (
    <footer className="bg-blue-main text-white py-6 mt-10 flex flex-col items-center">

      <div className="flex justify-between">
        <div>
          <p className="hidden lg:flex text-sm mr-60">Derechos reservados eCom</p>
        </div>
        <div className="flex flex-col items-center">

          <img
            src={logo}
            alt="Logo TucaShop"
            className="h-12 w-auto"
          />
          <p className="text-white font-bold text-lg">TucaShop</p>
        </div>
        <div>
          <p className="hidden lg:flex text-sm ml-60">Derechos reservados eCom</p>

        </div>

      </div>
    </footer>
  );
}
