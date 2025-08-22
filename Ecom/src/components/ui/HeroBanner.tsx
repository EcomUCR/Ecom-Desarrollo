import heroImage from "../../img/herobander.png";

export default function HeroBanner() {
  return (
    <section className="w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Hero Banner"
        className="w-full h-auto object-cover"
      />
    </section>
  );
}
