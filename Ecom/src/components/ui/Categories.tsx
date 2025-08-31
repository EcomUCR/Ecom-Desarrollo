import CardCategory from "./CardCategory";

export default function Categories() {
  return (
    <section className="my-10 px-4">
      <CardCategory />
      
      <div className="text-center mt-6">
        <button className="bg-yellow-main font-quicksand px-25 py-3 rounded-lg font-bold text-lg text-white shadow-[1px_2px_5px_rgba(0,0,0,0.2)]">
          Ver más
        </button>
      </div>
    </section>
  );
}
