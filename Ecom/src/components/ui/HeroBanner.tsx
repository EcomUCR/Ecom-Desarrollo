import heroImage from "../../img/herobander.png";

export default function HeroBanner() {
  return (
    <div>
    <section className="flex w-full h-[20rem]">
      {/*<div className="flex font-quicksand justify-center items-center h-full bg-purple-main z-1 relative">
          <h1 className="lg:text-4xl font-bold text-white px-4 text-center">
            Descubre productos únicos y ofertas exclusivas
          </h1>
      </div>*/}
    { <img
        src={heroImage}
        alt="Hero Banner"
        className="relative w-full h-full object-cover"
        />}
    </section>
        </div>
  );
}
