
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";
import logo from "../../img/tucaShopLogo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-blue-main text-white py-6 mt-10 flex flex-col items-center">
      <div className="flex items-center w-full px-10">
        <div className="w-[33%] flex flex-col items-center">
          <p className=" lg:flex text-sm">Siguenos en nuestras redes:</p>
          <div className="flex justify-between space-x-3 pt-2">
          <IconBrandFacebook className="cursor-pointer hover:text-purple-main transition-colors duration-500" />
          <IconBrandTwitter className="cursor-pointer hover:text-purple-main transition-colors duration-500" />
          <IconBrandInstagram className="cursor-pointer hover:text-purple-main transition-colors duration-500" />
          </div>
        </div>
        <div className="w-[33%] flex flex-col items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo TucaShop"
              className="h-12 w-auto"
            />
          </Link>
          <p className="text-white font-bold text-lg">TucaShop</p>
        </div>
        <div className="w-[33%] flex flex-col items-center">
          <p className="text-sm ">Derechos reservados eCom 2025</p>
        </div>
      </div>
    </footer>
  );
}
