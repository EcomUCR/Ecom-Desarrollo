import FeaturedProductsSlider from "./FeaturedProductsSlider";


export default function FeaturedProducts() {
  return (
    <section className="py-10 px-5 lg:px-10">
    
      <div className="flex items-center justify-start my-6">
        <h2 className="text-xl lg:text-4xl font-quicksand mr-4">Productos destacados</h2>
        <div className="flex-1 lg:h-1 h-0.5 bg-yellow-main rounded"></div>
      </div>

      <div className="flex justify-center">
        <FeaturedProductsSlider />      
      </div>
    </section>
  );
}
