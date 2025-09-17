import { IconHeart, IconTrash } from "@tabler/icons-react";
import audifonos from "../../img/audifonos.png";
import StarRatingComponent from "./StarRatingComponent";
export default function ProductCardShopping() {
    return (
        <div className="flex border border-main rounded-xl m-10 w-full justify-between">
            <div>
                <img className="" src={audifonos} alt="" />
            </div>
            <div className="font-quicksand">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                        <p className="font-bold">Audifonos Razer edición Pokemon</p>
                        <p className="text-xs">Disponible</p>
                    </div>
                    <p className="text-xs">Unstable Games</p>
                    <StarRatingComponent value={4} size={10} />
                </div>
                <div className="flex justify-between">
                    <div className="flex justify-between items-center border border-contrast-secondary rounded-full p-1">
                        <p className="text-sm pl-4">Cantidad</p>
                        <div className="flex gap-8 border border-contrast-secondary rounded-full px-4">
                            <button>-</button>
                            <p className="font-bold">1</p>
                            <button>+</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex flex-col justify-between">
                <p className="text-xs">$10.000</p>
                <p className="font-bold text-2xl">$5000</p>
                <div className="flex justify-between">
                    <IconHeart />
                    <IconTrash />
                </div>
            </div>
        </div>
    );
}