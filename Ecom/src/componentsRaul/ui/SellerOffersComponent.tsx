
import audifonos from '../../img/resourcesRaul/audifonos.jpg';
import ProductCard from './ProductCard';
export default function SellerOffersPage() {
    return (
        <div className="mx-10 my-5">
            <h2 className="text-2xl font-semibold font-quicksand">Ofertas</h2>
            <div className="flex justify-between my-5">
                    <ProductCard shop="Razer" title="Audifonos Razer x Pokemon | Edición Gengar" price="100.000" discountPrice="50.000" img={audifonos} />
                    <ProductCard shop="Razer" title="Audifonos Razer x Pokemon | Edición Gengar" price="100.000" discountPrice="50.000" img={audifonos} />
                    <ProductCard shop="Razer" title="Audifonos Razer x Pokemon | Edición Gengar" price="100.000" discountPrice="50.000" img={audifonos} />
                    <ProductCard shop="Razer" title="Audifonos Razer x Pokemon | Edición Gengar" price="100.000" discountPrice="50.000" img={audifonos} />
                    <ProductCard shop="Razer" title="Audifonos Razer x Pokemon | Edición Gengar" price="100.000" discountPrice="50.000" img={audifonos} />
                </div>
        </div>
    );
}