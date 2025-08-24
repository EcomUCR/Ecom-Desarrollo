import FeaturedProductsSlider from "./FeaturedProductsSlider";


export default function FeaturedProducts() {
  return (
    <section className="my-10 px-4 lg:ml-4 lg:mr-4 md:px-20">
      <div className="flex items-center justify-start mb-6">
        <h2 className="text-xl lg:text-4xl font-quicksand mr-4">Productos destacados</h2>
        <div className="flex-1 lg:h-1 h-0.5 bg-yellow-main rounded"></div>
      </div>

      <div className="flex items-center justify-center overflow-hidden w-full">
        <FeaturedProductsSlider />
      </div>
    </section>
  );
}
