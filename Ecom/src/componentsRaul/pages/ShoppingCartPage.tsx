import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import ProductCardShopping from "../ui/ProductCardShopping";

export default function ShoppingCartPage() {
    return (
        <div>
            <NavBar />
            <section>
                <div className="">
                    <ProductCardShopping />
                </div>
                <div>
                    <h1></h1>
                </div>
            </section>
            <section>

            </section>
            <Footer />
        </div>
    );

}