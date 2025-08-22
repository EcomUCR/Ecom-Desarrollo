import explore1Img from "../../img/au.png";
import explore2Img from "../../img/guantes.png";
import explore3Img from "../../img/grapas.png";
import explore4Img from "../../img/manga.png";

const exploreProducts = [
  { name: "Audífonos Razer Blackshark V2 X", price: "₡26.950", img: explore1Img },
  { name: "Guantes de Boxeo Premium", price: "₡52.725", img: explore2Img },
  { name: "Caja de grapas Facela", price: "₡950", img: explore3Img },
  { name: "Manga Land Of The Lustrus", price: "₡16.000", img: explore4Img },
];

export default function Explore() {
  return (
    <section className="my-10 px-4 md:px-20">
     
      <div className="flex items-center justify-start mb-6">
        <h2 className="text-xl font-semibold mr-4">Explora</h2>
        <div className="flex-1 h-2 bg-yellow-400 rounded"></div>
      </div>

     
      <div className="flex space-x-6 overflow-x-auto justify-center mb-6">
        {exploreProducts.map((p, i) => (
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

      
      <div className="flex space-x-6 overflow-x-auto justify-center">
        {exploreProducts.map((p, i) => (
          <div
            key={i + exploreProducts.length} 
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
