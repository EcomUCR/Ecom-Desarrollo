import CardCategory from "./CardCategory";

export default function Categories() {
  return (
    <section className="my-10 px-4 lg:px-20">
      <div className="flex items-center justify-start mb-6">
        <h2 className="text-xl lg:text-4xl font-quicksand mr-4">Categorías</h2>
        <div className="flex-1 lg:h-1 h-0.5 bg-yellow-main rounded"></div>
      </div>

      <CardCategory />
      <div className="text-center mt-6">
        <button className="bg-yellow-main font-quicksand px-25 py-3 rounded-lg font-bold text-lg text-white shadow-[1px_2px_5px_rgba(0,0,0,0.2)]">
          Ver más
        </button>
      </div>
    </section>
  );
}
