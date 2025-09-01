import { Button } from "./button";
import product1 from "../../img/sombras.png";
import product2 from "../../img/sombrasClaro.png";
import product3 from "../../img/figuras.png";
import product4 from "../../img/dinosaurio.png";
import product5 from "../../img/slayOscuro.png";
import product6 from "../../img/slayClaro.png";
import product7 from "../../img/unicornio.png";
import product8 from "../../img/productos.png";
import editcIcon from "../../img/editIconw.png";

const sellerProductsList = [
  { name: "Criaturas de las Sombras -Juego de mesa", brand: "Unstable Games", oldPrice: "₡30.900", price: "₡26.950 ", img: product1 },
  { name: "Criaturas de las Sombras - Expansión roca fundida", brand: "Unstable Games", oldPrice: "₡30.900", price: "₡26.950 ", img: product2 },
  { name: "Figuras coleccionables Happy Little Dinosaurs", brand: "Unstable Games", oldPrice: "₡30.900", price: "₡26.950 ", img: product3 },
  { name: "Happy Litter Dinosaurs - Juego de mesa", brand: "Unstable Games", oldPrice: "₡30.900", price: "₡26.950 ", img: product4 },
  { name: "Here to Slay - Juego de mesa", brand: "Unstable Games", oldPrice: "₡30.900", price: "₡26.950 ", img: product5 },
  { name: "Here to Slay- Expansión Berserkers y Nigromantes", brand: "Unstable Games", oldPrice: "30.900", price: "₡26.950 ", img: product6 },
  { name: "Unstable Unicorns for Kids - Juego de mesa", brand: "Unstable Games", oldPrice: "30.900", price: "₡26.950 ", img: product7 },
  { name: "Unstable Unicorns - Set 6 expansiones", brand: "Unstable Games", oldPrice: "₡30.900", price: "₡26.950 ", img: product8 },
];

export default function SellerProductsList() {
  return (
    <section className="my-10 px-4 lg:px-20">
   
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-xl font-bold text-black">Mi lista de productos</h2>
        <Button className="bg-purple-main text-white px-4 py-2 rounded-lg font-medium hover:opacity-90">
          Registrar nuevo producto
        </Button>
      </div>

   
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-4">
        {sellerProductsList.slice(0, 4).map((p, i) => (
          <div key={i} className="relative flex flex-col items-center text-center rounded-lg shadow-md p-2 lg:p-3 bg-white">
          
            <div className="absolute top-2 right-2 w-8 h-8 bg-yellow-main rounded-full flex items-center justify-center shadow-sm">
              <img src={editcIcon} alt="Editar" className="w-4 h-4"/>
            </div>

           
            <div className="w-full h-40 mb-2 flex items-center justify-center rounded-lg overflow-hidden shadow-sm">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover rounded-lg" />
            </div>

           
            <h3 className="text-xs lg:text-sm font-medium">{p.name}</h3>
            <p className="text-gray-400 text-xs">{p.brand}</p>
            <p className="text-gray-300 text-xs line-through">{p.oldPrice}</p>
            <p className="text-purple-main font-bold text-sm lg:text-lg">{p.price}</p>
          </div>
        ))}
      </div>

    
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
        {sellerProductsList.slice(4, 8).map((p, i) => (
          <div key={i} className="relative flex flex-col items-center text-center rounded-lg shadow-md p-2 lg:p-3 bg-white">
          
            <div className="absolute top-2 right-2 w-8 h-8 bg-yellow-main rounded-full flex items-center justify-center shadow-sm">
              <img src={editcIcon} alt="Editar" className="w-4 h-4"/>
            </div>

          
            <div className="w-full h-40 mb-2 flex items-center justify-center rounded-lg overflow-hidden shadow-sm">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover rounded-lg" />
            </div>

            
            <h3 className="text-xs lg:text-sm font-medium">{p.name}</h3>
            <p className="text-gray-400 text-xs">{p.brand}</p>
            <p className="text-gray-300 text-xs line-through">{p.oldPrice}</p>
            <p className="text-purple-main font-bold text-sm lg:text-lg">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
