import { IconHeart } from "@tabler/icons-react";
import ButtonComponent from "./ButtonComponent";
import RaitingComponent from "./StarRatingComponent";
interface FeaturedProductCardProps {
    shop: string;
    img: string;
    title: string;
    price: string;
    discountPrice?: string;
    rating: number;
}
export default function FeaturedProductCard(props: FeaturedProductCardProps) {
    return (
        <figure className="w-full max-w-lg p-4 bg-light-gray rounded-2xl shadow-md overflow-hidden flex font-quicksand">
            <div className="w-1/2">
                <img className="w-full h-full object-cover rounded-2xl" src={props.img} alt={props.title} />
            </div>
            <div className="flex flex-col justify-between w-1/2 pl-6 py-1">
                <p className="font-light font-poiret">{props.shop}</p>
                <h3 className="font-semibold text-md">{props.title}</h3>
                <RaitingComponent value={props.rating} size={12} />
                <div>
                    {props.discountPrice && <p className="font-comme line-through text-xs text-black/30">₡ {props.price}</p> || <p className="font-comme">₡ {props.price}</p>}
                    {props.discountPrice && <p className="font-comme text-lg">₡ {props.discountPrice}</p>}
                </div>
                <div className="flex gap-2 w-full text-white h-12">
                    <ButtonComponent style="bg-contrast-secondary w-full rounded-full text-lg hover:bg-gradient-to-br from-contrast-main via-contrast-secondary to-main transition-all duration-400" text={"Añadir al carrito"} />
                    <ButtonComponent style="bg-contrast-main rounded-full h-full w-1/4 flex items-center justify-center hover:bg-contrast-secondary transition-all duration-400" icon={<IconHeart />} iconStyle="size-6" />
                </div>
            </div>
        </figure>
    );
}