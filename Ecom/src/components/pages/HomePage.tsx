import Header from "../ui/NavBar"
import HeroBanner from "../ui/HeroBanner";
import FeaturedProducts from "../ui/FeaturedProducts";
import Categories from "../ui/Categories";
import Explore from "../ui/Explore";
import Footer from "../ui/Footer";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Header />
      <HeroBanner />
    <section className="my-10 px-10 lg:ml-4">
        <div className=" flex items-center justify-start mb-6">
          <h2 className="text-xl lg:text-4xl font-quicksand mr-4">Productos destacados</h2>
          <div className="flex-1 lg:h-1 h-0.5 bg-yellow-main rounded"></div>
        </div>
        <FeaturedProducts />
    </section>
    <section className="my-10 px-10 lg:ml-4">
        <div className="flex items-center justify-start mb-6">
          <h2 className="text-xl lg:text-4xl font-quicksand mr-4">Categorías</h2>
          <div className="flex-1 lg:h-1 h-0.5 bg-yellow-main rounded"></div>
        </div>
        <Categories />
    </section>
    <section className="my-10 px-10 lg:ml-4 ">
        <div className="flex items-center justify-start mb-6">
          <h2 className="text-xl lg:text-4xl font-quicksand mr-4">Explorar</h2>
          <div className="flex-1 lg:h-1 h-0.5 bg-yellow-main rounded"></div>
        </div>
        <Explore />
    </section>
      <Footer />
    </div>
  );
}
