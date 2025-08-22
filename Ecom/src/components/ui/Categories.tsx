import icon1 from "../../img/control.png";
import icon2 from "../../img/bola.png";
import icon3 from "../../img/casa.png";
import icon4 from "../../img/cubiertos.png";
import icon5 from "../../img/gancho.png";
import icon6 from "../../img/tool.png";
import icon7 from "../../img/lampara.png";

import bg1 from "../../img/gaming.jpg";
import bg2 from "../../img/deportes.jpg";
import bg3 from "../../img/Home.png";
import bg4 from "../../img/comida.jpg";
import bg5 from "../../img/ropa.jpeg";
import bg6 from "../../img/herramientas.jpg";
import bg7 from "../../img/decor.jpeg";

const categories = [
  { name: "Gaming", icon: icon1, bg: bg1 },
  { name: "Deporte", icon: icon2, bg: bg2 },
  { name: "Hogar", icon: icon3, bg: bg3 },
  { name: "Comida", icon: icon4, bg: bg4 },
  { name: "Ropa", icon: icon5, bg: bg5 },
  { name: "Herramientas", icon: icon6, bg: bg6 },
  { name: "Decoración", icon: icon7, bg: bg7 },
];

export default function Categories() {
  return (
    <section className="my-10 px-4 md:px-20">
      
      <div className="flex items-center justify-start mb-6">
        <h2 className="text-xl font-semibold mr-4">Categorías</h2>
        <div className="flex-1 h-2 bg-yellow-400 rounded"></div>
      </div>

      
      <div className="flex space-x-6 overflow-x-auto justify-center">
        {categories.map((c, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center justify-center min-w-[120px] h-40 rounded-2xl overflow-hidden text-center"
            style={{
              backgroundImage: `url(${c.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          
            <div className="flex flex-col items-center justify-center bg-black/30 w-full h-full p-4">
              <div className="w-10 h-10 mb-2">
                <img src={c.icon} alt={c.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-white font-semibold">{c.name}</span>
            </div>
          </div>
        ))}
      </div>

      
      <div className="text-center mt-6">
        <button className="bg-yellow-400 px-15 py-2 rounded-lg font-medium text-white">
          Ver más
        </button>
      </div>
    </section>
  );
}
