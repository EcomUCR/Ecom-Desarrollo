import Header from "./Header"
import HeroBanner from "./HeroBanner";
import FeaturedProducts from "./FeaturedProducts";
import Categories from "./Categories";
import Explore from "./Explore";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <HeroBanner />
      <main className="max-w-7xl mx-auto px-4">
        <FeaturedProducts />
        <Categories />
        <Explore />
      </main>
      <Footer />
    </div>
  );
}
