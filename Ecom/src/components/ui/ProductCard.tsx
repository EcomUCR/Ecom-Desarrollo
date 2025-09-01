interface ProductCardProps {
  imageSrc: string;
  name: string;
  discountPrice?: string;
  brand: string;
  price: string;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className="w-60 lg:w-[85%] h-full rounded-xl flex flex-col shadow-[1px_2px_5px_rgba(0,0,0,0.2)] items-center text-center p-3">
      <div className="w-full h-[65%] mb-2 flex items-center justify-center rounded-xl overflow-hidden shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
        <img
          src={props.imageSrc}
          alt={props.name}
          className="w-full h-full object-center object-cover rounded-2xl "
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-between">
          <p className="font-bold font-quicksand h-[70%]">{props.name}</p>
          <p className="text-sm text-gray-main/50 h-[30%] ">{props.brand}</p>
        </div>
        <div className="">
          <p className={props.discountPrice ? "text-sm text-gray-main/50 line-through" : "font-bold text-lg text-purple-main"}>{props.price}</p>
          {props.discountPrice && <p className="font-bold text-lg text-purple-main">{props.discountPrice}</p>}
        </div>
      </div>
    </div>
  );
}

