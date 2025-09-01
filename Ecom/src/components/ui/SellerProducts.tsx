import explore1Img from "../../img/au.png";
import explore2Img from "../../img/guantes.png";
import explore3Img from "../../img/grapas.png";
import explore4Img from "../../img/manga.png";



const sellerProducts = [
  { name: "Criaturas de las Sombras -Juego de mesa", brand: "Razer", oldPrice: "₡30.000", price: "₡26.950", img: explore1Img },
  { name: "Criaturas de las Sombras - Expansión roca fundida", brand: "Everlast", oldPrice: "₡60.000", price: "₡52.725", img: explore2Img },
  { name: "Figuras coleccionables Happy Little Dinosaurs", brand: "Facela", oldPrice: "₡1.200", price: "₡950", img: explore3Img },
  { name: "Happy Litter Dinosaurs - Juego de mesa", brand: "Land Of The Lustrus", oldPrice: "₡18.000", price: "₡16.000", img: explore4Img },
  { name: "Audífonos Razer Blackshark V2 X", brand: "Razer", oldPrice: "₡30.000", price: "₡26.950", img: explore1Img },
  { name: "Caja de grapas Facela", brand: "Facela", oldPrice: "₡1.200", price: "₡950", img: explore3Img },
  { name: "Guantes de Boxeo Premium", brand: "Everlast", oldPrice: "₡60.000", price: "₡52.725", img: explore2Img },
  { name: "Manga Land Of The Lustrus", brand: "Land Of The Lustrus", oldPrice: "₡18.000", price: "₡16.000", img: explore4Img },
];

export default function SellerProducts() {
  return (
    <section className="my-10 px-4 lg:px-20">

      
        <div className="flex items-center my-6">
        <h2 className="text-xl lg:text-4xl font-quicksand mr-4">Productos</h2>
        <div className="flex-1 lg:h-1 h-0.5 bg-yellow-main rounded"></div>
      </div>

      
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 mb-6">
        {sellerProducts.slice(0,4).map((p, i) => (
          <div key={i} className="flex flex-col items-center text-center rounded-xl shadow-[1px_2px_5px_rgba(0,0,0,0.2)] p-2 lg:p-3">
            <div className="w-full h-60 mb-2 flex items-center justify-center rounded-xl overflow-hidden shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover rounded-2xl" />
            </div>
            <h3 className="text-xs lg:text-sm font-medium">{p.name}</h3>
            <p className="text-gray-400 text-xs">{p.brand}</p>
            <p className="text-gray-200 text-xs line-through">{p.oldPrice}</p>
            <p className="text-purple-600 font-bold text-lg">{p.price}</p>
          </div>
        ))}
      </div>
      
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 mb-6">
        {sellerProducts.slice(4,8).map((p, i) => (
          <div key={i} className="flex flex-col items-center text-center rounded-xl shadow-[1px_2px_5px_rgba(0,0,0,0.2)] p-2 lg:p-3">
            <div className="w-full h-60 mb-2 flex items-center justify-center rounded-xl overflow-hidden shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover rounded-2xl" />
            </div>
            <h3 className="text-xs lg:text-sm font-medium">{p.name}</h3>
            <p className="text-gray-400 text-xs">{p.brand}</p>
            <p className="text-gray-300 text-xs line-through">{p.oldPrice}</p>
            <p className="text-purple-600 font-bold text-lg">{p.price}</p>
          </div>
        ))}
      </div>

     
      <div className="flex justify-center">
        <button className="bg-yellow-main text-white px-28 py-2 rounded-lg font-bold hover:opacity-90 transition">
          Ver más
        </button>
      </div>

     

    </section>
  );
}
