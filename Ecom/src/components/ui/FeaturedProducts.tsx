import audifonosImg from "../../img/audifonos.png";
import cacaoImg from "../../img/cacao.png";
import cuchillosImg from "../../img/cuchillos.png";
import parlanteImg from "../../img/parlante.png";

const products = [
  { name: "Audífonos Gamer Razer", price: "₡26.950", img: audifonosImg },
  { name: "Chocolate amargo OKKO", price: "₡44.950", img: cacaoImg },
  { name: "Set cuchillos Telstar", price: "₡15.750", img: cuchillosImg },
  { name: "Parlante bluetooth JBL", price: "₡24.500", img: parlanteImg },
];

export default function FeaturedProducts() {
  return (
    <section className="my-10 ">
    
      <div className="flex items-center justify-start mb-6">
        <h2 className="text-xl font-semibold mr-4">Productos destacados</h2>
        <div className="flex-1 h-2 bg-yellow-400 rounded"></div>
      </div>

    
      <div className="flex space-x-6 overflow-x-auto justify-center">
        {products.map((p, i) => (
          <div
            key={i}
            className="min-w-[180px] bg-white shadow rounded-xl p-4 flex flex-col items-center text-center"
          >
            
            <div className="w-24 h-24 mb-2 flex items-center justify-center">
              <img
                src={p.img} 
                alt={p.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-sm font-medium">{p.name}</h3>
            <p className="text-cyan-600 font-bold">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
