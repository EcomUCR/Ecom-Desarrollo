import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "./carousel"

import audifonosImg from "../../img/audifonos.png";
import cacaoImg from "../../img/cacao.png";
import cuchillosImg from "../../img/cuchillos.png";
import parlanteImg from "../../img/parlante.png";

const products = [
    { name: "Audífonos Gamer Razer", price: "₡26.950", img: audifonosImg },
    { name: "Chocolate amargo OKKO", price: "₡44.950", img: cacaoImg },
    { name: "Set cuchillos Telstar", price: "₡15.750", img: cuchillosImg },
    { name: "Parlante bluetooth JBL", price: "₡24.500", img: parlanteImg },
    { name: "Parlante bluetooth JBL", price: "₡24.500", img: parlanteImg },
    { name: "Parlante bluetooth JBL", price: "₡24.500", img: parlanteImg },
    { name: "Parlante bluetooth JBL", price: "₡24.500", img: parlanteImg },
];

export default function FeaturedProductsSlider() {
    return (
        <div>
            <Carousel className="w-full h-auto">
                <CarouselContent>
                    {products.map((p, i) => (
                        <CarouselItem className="h-[40vh]" key={i}>
                            <div className="w-[28.5vh] h-full rounded-xl flex flex-col shadow-[1px_2px_5px_rgba(0,0,0,0.2)] items-center text-center p-3">
                                <div className="w-full h-[65%] mb-2 flex items-center justify-center rounded-xl overflow-hidden shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
                                    <img src={p.img} alt={p.name} className="w-full h-full object-center object-cover rounded-2xl " />
                                </div>
                                <div className="w-[50%] h-auto flex flex-col items-center justify-center space-y-1">
                                    <h3 className="text-sm font-medium">{p.name}</h3>
                                    <p className="text-cyan-600 font-bold">{p.price}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}