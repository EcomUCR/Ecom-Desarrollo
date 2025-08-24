import Header from "../ui/NavBar"
import HeroBanner from "../ui/HeroBanner";
import FeaturedProducts from "../ui/FeaturedProducts";
import Categories from "../ui/Categories";
import Explore from "../ui/Explore";
//import Footer from "../ui/Footer";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Header />
      <HeroBanner />
      <main className=" w-full">
        <FeaturedProducts />
        <Categories />
        {<Explore />}
      </main>
      {/*<Footer />*/}
    </div>
  );
}
