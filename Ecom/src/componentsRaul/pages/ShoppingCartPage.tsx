import Footer from "../ui/Footer";
import FormShopping from "../ui/FormShopping";
import NavBar from "../ui/NavBar";
import ProductCardShopping from "../ui/ProductCardShopping";

export default function ShoppingCartPage() {
    return (
        <div>
            <NavBar />
            <section className="mx-10 flex">
                <div className=" my-5 w-2/3 border-r-2 pr-5 border-main">
                    <ProductCardShopping />
                    <ProductCardShopping />
                    <ProductCardShopping />
                </div>
                <div className=" my-10 pl-10 w-1/3">
                    <FormShopping />
                </div>
            </section>
            <section>

            </section>
            <Footer />
        </div>
    );

}