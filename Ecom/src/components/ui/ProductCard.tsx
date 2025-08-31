interface ProductCardProps {
  imageSrc: string;
  name: string;
  details: string;
  brand: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, name, details, brand, price }) => {
  return (
    <div className="flex flex-col items-center border border-blue-main rounded-lg p-4 w-48">
      <div className="w-full h-32 mb-4">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="text-center text-base text-gray-700">
        <p>{name}</p>
        <p>{details}</p>
        <p className="text-sm text-gray-500">{brand}</p>
        <p className="font-bold text-lg text-[#5B2A86]">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
