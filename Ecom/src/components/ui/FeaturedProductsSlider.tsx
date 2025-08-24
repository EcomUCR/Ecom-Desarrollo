import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselStatus, } from "./carousel"

import audifonosImg from "../../img/audifonos.png";
import cacaoImg from "../../img/cacao.png";
import cuchillosImg from "../../img/cuchillos.png";
import parlanteImg from "../../img/parlante.png";
import React from "react";

const products = [
    { name: "Audífonos Gamer Razer", price: "₡26.950", img: audifonosImg },
    { name: "Parlante bluetooth JBL", price: "₡24.500", img: parlanteImg },
    { name: "Chocolate amargo OKKO", price: "₡44.950", img: cacaoImg },
    { name: "Audífonos Gamer Razer", price: "₡26.950", img: audifonosImg },
    { name: "Set cuchillos Telstar", price: "₡15.750", img: cuchillosImg },
    { name: "Parlante bluetooth JBL", price: "₡24.500", img: parlanteImg },
    { name: "Chocolate amargo OKKO", price: "₡44.950", img: cacaoImg },
    { name: "Parlante bluetooth JBL", price: "₡24.500", img: parlanteImg }
];

function useMediaQuery(query: string) {
    const [matches, setMatches] = React.useState(false)

    React.useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        media.addEventListener("change", listener)
        return () => media.removeEventListener("change", listener)
    }, [matches, query])

    return matches
}

export default function FeaturedProductsSlider() {

    const isSmall = useMediaQuery("(max-width: 640px)")
    return (
        <div className="max-w-full">
            <Carousel  opts={{ loop: isSmall }}>
                <CarouselContent>
                    {products.map((p, i) => (
                        <CarouselItem className="h-95 w-10" key={i}>
                            <div className="w-60 lg:w-[85%] h-full rounded-xl flex flex-col shadow-[1px_2px_5px_rgba(0,0,0,0.2)] items-center text-center p-3">
                                <div className="w-full h-[65%] mb-2 flex items-center justify-center rounded-xl overflow-hidden shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
                                    <img src={p.img} alt={p.name} className="w-full h-full object-center object-cover rounded-2xl " />
                                </div>
                                <div className="w-[50%] h-auto flex flex-col items-center justify-center  space-y-2 lg:pt-7">
                                    <h3 className="text-sm font-medium">{p.name}</h3>
                                    <p className="text-cyan-600 font-bold">{p.price}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                <CarouselStatus className="lg:hidden flex justify-center" />
            </Carousel>
        </div>
    );
}