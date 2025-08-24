//import heroImage from "../../img/herobander.png";

export default function HeroBanner() {
  return (
    <section className="w-full h-[25vh] lg:h-[50vh] bg-purple-main">
      <div className="flex font-quicksand justify-center items-center h-full ">
          <h1 className="lg:text-4xl font-bold text-white px-4 text-center">
            Descubre productos únicos y ofertas exclusivas
          </h1>
      </div>
    {/* <img
        src={heroImage}
        alt="Hero Banner"
        className="w-full h-auto object-cover"
      />*/}
    </section>
  );
}
