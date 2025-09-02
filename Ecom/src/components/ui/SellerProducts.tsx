import explore1Img from "../../img/au.png";
import explore2Img from "../../img/guantes.png";
import explore3Img from "../../img/grapas.png";
import explore4Img from "../../img/manga.png";
import ProductCard from "./ProductCard";
import ButtonComponent from "./ButtonComponent";

const sellerProducts = [
  { name: "Criaturas de las Sombras -Juego de mesa", brand: "Razer", price: "₡30.000", img: explore1Img },
  { name: "Criaturas de las Sombras - Expansión roca fundida", brand: "Everlast", price: "₡60.000", img: explore2Img },
  { name: "Figuras coleccionables Happy Little Dinosaurs", brand: "Facela", price: "₡1.200", img: explore3Img },
  { name: "Happy Litter Dinosaurs - Juego de mesa", brand: "Land Of The Lustrus", price: "₡18.000", img: explore4Img },
  { name: "Audífonos Razer Blackshark V2 X", brand: "Razer", price: "₡30.000", img: explore1Img },
  { name: "Caja de grapas Facela", brand: "Facela", price: "₡1.200", discountPrice: "₡950", img: explore3Img },
  { name: "Guantes de Boxeo Premium", brand: "Everlast", price: "₡60.000", discountPrice: "₡52.725", img: explore2Img },
  { name: "Manga Land Of The Lustrus", brand: "Land Of The Lustrus", price: "₡18.000", img: explore4Img },

];

export default function SellerProducts() {
  return (
    <section className="my-10 px-4 lg:px-20">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 mb-6 justify-items-center">
        {sellerProducts.slice(0, 9).map((p, i) => (
          <ProductCard key={i} name={p.name} imageSrc={p.img} brand={p.brand} price={p.price} discountPrice={p.discountPrice} />
        ))}
      </div>
      <div className="flex justify-center">
        <ButtonComponent 
                style="bg-yellow-main font-quicksand px-25 py-3 rounded-lg font-bold text-lg text-white shadow-[1px_2px_5px_rgba(0,0,0,0.2)] hover:bg-blue-main transition cursor-pointer duration-500"
                text="Ver más"/>
      </div>
    </section>
  );
}
