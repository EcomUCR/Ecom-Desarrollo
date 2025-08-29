import logo from "../../img/tucaShopLogo.png";
import menuIcon from "../../img/menuIcon.png";

function LandingHeader() {
  return (
    <header className="flex justify-between items-center shadow-md bg-blue-main px-5 py-5 lg:px-20 lg:py-6">


      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-white pt-1 font-fugaz text-xl lg:text-3xl">TucaShop</span>
      </div>


      <div className="flex items-center">
        <img src={menuIcon} alt="Menu" className="h-8 w-8 cursor-pointer" />
      </div>
    </header>
  );
}

export default LandingHeader;
