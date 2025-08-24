import explore1Img from "../../img/au.png";
import explore2Img from "../../img/guantes.png";
import explore3Img from "../../img/grapas.png";
import explore4Img from "../../img/manga.png";

const exploreProducts = [
  { name: "Audífonos Razer Blackshark V2 X", price: "₡26.950", img: explore1Img },
  { name: "Caja de grapas Facela", price: "₡950", img: explore3Img },
  { name: "Guantes de Boxeo Premium", price: "₡52.725", img: explore2Img },
  { name: "Audífonos Razer Blackshark V2 X", price: "₡26.950", img: explore1Img },
  { name: "Caja de grapas Facela", price: "₡950", img: explore3Img },
  { name: "Manga Land Of The Lustrus", price: "₡16.000", img: explore4Img },
];

export default function Explore() {
  return (
    <section className="my-10 px-4 lg:px-20">

      <div className="flex items-center my-6">
        <h2 className="text-xl lg:text-4xl font-quicksand mr-4">Explora</h2>
        <div className="flex-1 lg:h-1 h-0.5 bg-yellow-main rounded"></div>
      </div>

      <div className="flex lg:flex-row flex-wrap justify-between mx-4 lg:mx-10 mb-6">
        {exploreProducts.map((p, i) => (
          <div className="flex lg:h-95 h-60 w-38 my-2 lg:w-65" key={i}>
            <div className="w-38 lg:w-full h-full rounded-xl flex flex-col shadow-[1px_2px_5px_rgba(0,0,0,0.2)] items-center text-center p-2 lg:p-3">
              <div className="w-full h-60 mb-2 flex items-center justify-center rounded-xl overflow-hidden shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
                <img src={p.img} alt={p.name} className="w-full h-full object-center object-cover rounded-2xl" />
              </div>
              <div className="lg:w-full w-35 h-20 lg:h-10 flex flex-col items-center justify-center space-y-2 lg:pt-20 ">
                <h3 className="text-xs lg:text-sm font-medium">{p.name}</h3>
                <p className="text-xs text-cyan-600 font-bold">{p.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
