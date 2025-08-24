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


type Category = {
    name: string
    icon: React.ElementType
    bg: string
}

const categories: Category[] = [
    { name: "Gaming", icon: IconDeviceGamepad2, bg: bg1 },
    { name: "Deporte", icon: IconBallBaseball, bg: bg2 },
    { name: "Hogar", icon: IconHome, bg: bg3 },
    { name: "Comida", icon: IconToolsKitchen2, bg: bg4 },
    { name: "Ropa", icon: IconHanger, bg: bg5 },
    { name: "Herramientas", icon: IconTool, bg: bg6 },
    { name: "Decoración", icon: IconLamp, bg: bg7 },
    { name: "Gaming", icon: IconDeviceGamepad2, bg: bg1 }
]

export default function CardCategory() {
    return (
        <div className="flex flex-wrap gap-7 justify-center lg:justify-between lg:px-10 py-10">
            {categories.map((c, i) => (
                <div
                    key={i}
                    className="relative lg:flex lg:flex-col lg:flex-wrap lg:items-center lg:justify-center h-20 w-30 lg:h-40 lg:w-40 rounded-xl lg:rounded-4xl overflow-hidden shadow-[2px_3px_3px_rgba(0,0,0,0.5)]">
                    <div className="flex lg:flex-col justify-center lg:w-full h-full p-4 ">
                        <div className="flex flex-col z-10 text-white items-center justify-center text:lg lg:text-2xl">
                            {<c.icon className="w-8 h-8" />}
                            <p className="font-quicksand">{c.name}</p>
                        </div>
                    <div className="absolute inset-0 w-full h-full z-1 bg-purple-main/60" />
                    <img src={c.bg} alt="" className="absolute z-0 inset-0 w-full h-full object-cover" />
                    </div>
                </div>
            ))}
        </div>

    );
}