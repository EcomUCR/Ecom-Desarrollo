import { IconDeviceGamepad2 } from "@tabler/icons-react";
import { IconBallBaseball } from "@tabler/icons-react";
import { IconHome } from "@tabler/icons-react";
import { IconToolsKitchen2 } from "@tabler/icons-react";
import { IconHanger } from "@tabler/icons-react";
import { IconTool } from "@tabler/icons-react";
import { IconLamp } from "@tabler/icons-react";


import bg1 from "../../img/gaming.jpg";
import bg2 from "../../img/deportes.jpg";
import bg3 from "../../img/Home.png";
import bg4 from "../../img/comida.jpg";
import bg5 from "../../img/ropa.jpeg";
import bg6 from "../../img/herramientas.jpg";
import bg7 from "../../img/decor.jpeg";


const categories = [
    { name: "Gaming", icon: IconDeviceGamepad2, bg: bg1 },
    { name: "Deporte", iconx: IconBallBaseball, bg: bg2 },
    { name: "Hogar", icon: IconHome, bg: bg3 },
    { name: "Comida", icon: IconToolsKitchen2, bg: bg4 },
    { name: "Ropa", icon: IconHanger, bg: bg5 },
    { name: "Herramientas", icon: IconTool, bg: bg6 },
    { name: "Decoración", icon: IconLamp, bg: bg7 },
];
export default function CardCategory() {
    return (
        <div className="flex justify-center w-full ">
            {categories.map((c, i) => (
                <div
                    key={i}
                    className="relative flex flex-col items-center justify-center min-w-[120px] h-40 rounded-2xl overflow-hidden text-center">
                    <div className="flex flex-col items-center justify-center bg-black/30 w-full h-full p-4">
                        <div className="z-10 w-10 h-10 mb-2 text-white">
                            <c.icon />
                            <p>{c.name}</p>
                        </div>
                        <span className="text-white font-semibold">{c.name}</span>
                    </div>
                    <div className="absolute inset-0 w-full h-full z-1 bg-violet-900/40" />
                    <img src={c.bg} alt="" className="absolute z-0 inset-0 w-full h-full object-cover" />
                </div>
            ))}
        </div>

    );
}