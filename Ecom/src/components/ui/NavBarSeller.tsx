import { useLocation, Link } from 'react-router-dom';
import { Button } from './button';
import logo from "../../img/unstable-games-logo.png";
import searchIcon from '../../img/SearchIcon.png';

const NavBarSeller = () => {
    const location = useLocation();

    const getNavLinkClass = (path: string) => {
        return location.pathname === path
            ? 'text-purple-main font-bold'
            : 'text-white hover:text-purple-main';
    };

    return (
        <div className="bg-yellow-main flex items-center justify-between px-8 py-4">

            <div className="flex-shrink-0 ml-24">
                <Link to="/">
                    <img className="h-12" src={logo} alt="Unstable Games Logo" />
                </Link>
            </div>


            <div className="hidden md:flex items-center gap-5">
                <nav className="flex space-x-6 items-center">
                    <Link to="/seller-page" className={getNavLinkClass('/seller-page')}>
                        Tienda
                    </Link>
                    <Link to="/seller-page-products" className={getNavLinkClass('/seller-page-products')}>
                        Productos
                    </Link>
                    <Link to="/" className={getNavLinkClass('/')}>
                        Ofertas
                    </Link>
                    <Link to="/seller-page-contacts" className={getNavLinkClass('/seller-page-contacts')}>
                        Contacto
                    </Link>
                </nav>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Buscar en Unstable Games"
                        className="bg-white rounded-l-lg py-2 px-4 w-64 focus:outline-none"
                    />
                    <Button
                        type="submit"
                        className="bg-purple-main rounded-r-lg py-2 px-4 transition-colors duration-200"
                    >
                        <img className="h-5 w-5" src={searchIcon} alt="Search" />
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default NavBarSeller;
