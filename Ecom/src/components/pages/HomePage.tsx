import NavBar from "../ui/NavBar"
import HeroBanner from "../ui/HeroBanner";
import Categories from "../ui/Categories";
import Explore from "../ui/Explore";
import Footer from "../ui/Footer";
import ProductsSlider from "../ui/ProductsSlider";

export default function HomePage() {
  return (
    <section>
      <NavBar />
      <div className="bg-white mx-auto max-w-[90rem]">
        <section className="">
          <HeroBanner />
        </section>
        <section className="my-10 px-10 lg:mr-4 flex flex-col ">
          
          <ProductsSlider />
        </section>
        <section className="my-10 w-full lg:mr-4">
          <Categories />
        </section>
        <section className="my-10 w-full lg:mr-4 ">
          <Explore />
        </section>
        <Footer />
      </div>
    </section>
  );
}
