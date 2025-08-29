
interface ProductCardProps {
    imageSrc: string;
    name: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, name }) => {
    return (
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
            <div className="w-24 h-24 mb-2 rounded-lg overflow-hidden">

                <img
                    src={imageSrc}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
          
        </div>
    );
};

export default ProductCard;