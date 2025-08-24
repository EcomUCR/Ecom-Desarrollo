import CardCategory from "./CardCategory";

export default function Categories() {
  return (
    <section className="my-10 px-4 md:px-20">
      
      <div className="flex items-center justify-start mb-6">
        <h2 className="text-xl font-semibold mr-4">Categorías</h2>
        <div className="flex-1 h-2 bg-yellow-400 rounded"></div>
      </div>

      <CardCategory />
      
      <div className="text-center mt-6">
        <button className="bg-yellow-400 px-15 py-2 rounded-lg font-medium text-white">
          Ver más
        </button>
      </div>
    </section>
  );
}
