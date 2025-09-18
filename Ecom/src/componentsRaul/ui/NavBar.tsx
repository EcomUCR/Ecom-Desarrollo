//Comentarios agregados por Raul
import { IconHeart, IconMenu2, IconSearch, IconShoppingBag, IconUser } from "@tabler/icons-react";
import logo from "../../img/tucaShopLogo.png";
import ButtonComponent from "./ButtonComponent";
export default function NavBar() {
    return (
        <nav className="bg-main px-10 pt-2">
            {/*Esta es la parte superior del navbar*/}
            <div className="flex justify-between items-center">
                <div className="w-1/3">
                    <a href="*" className="text-white font-fugaz text-3xl flex items-center gap-3 p-2">
                        <img src={logo} alt="" className="h-8 w-auto" />
                        TucaShop
                    </a>
                </div>
                <div className="flex items-center bg-white rounded-full px-0.5 w-1/3">
                    <input type="text" className="w-full h-10 p-4 rounded-full focus:outline-none" placeholder="Buscar" />
                    <ButtonComponent style="bg-gradient-to-br from-contrast-main to-contrast-secondary rounded-full w-15 h-9 flex items-center justify-center" icon={<IconSearch className="text-white h-6 w-auto stroke-3" />}/>
                </div>
                <div className="w-1/3 flex justify-end">
                    <ul className="flex gap-5 p-2 text-white font-medium">
                        <div className="flex space-x-2 ">
                            <li><a href="#" className=" flex items-center gap-1"><IconUser className="h-5 w-5" /> Iniciar sesión |</a></li>
                            <li><a href="#" className="">Registrate</a></li>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <li><a href="#" className=""><IconHeart className="h-5 w-5" /></a></li>
                            <li><a href="#" className=""><IconShoppingBag className="h-5 w-5" /></a></li>
                        </div>
                    </ul>
                </div>
            </div>
            {/*Aquí termina la parte superior del navbar*/}
            {/*Aquí empieza la parte inferior del navbar*/}
            <div>
                <ul className="flex justify-center gap-10 p-3 text-white text-sm font-light">
                    <li className="flex items-center ">
                        {/*ItemList para desplegar las categorías*/}
                        <IconMenu2 className="h-5 w-5"/>
                        <select className="bg-transparent border-white focus:outline-none">
                            <option value="#">Categorías</option>
                            <option value="#">Categoría 1</option>
                            <option value="#">Categoría 2</option>
                            <option value="#">Categoría 3</option>
                        </select>
                    </li>
                    <li><a href="#">Explorar</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Lo más vendido</a></li>
                    <li><a href="#">Tiendas</a></li>
                    <li><a href="#">Vender</a></li>
                    <li><a href="#">Conócenos</a></li>
                    <li></li>
                </ul>
            </div>
            {/*Aquí termina la parte inferior del navbar*/}
        </nav>
    );
}