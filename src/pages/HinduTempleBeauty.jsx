import templeImg from "../images/28.jpg"; 
const HinduTempleBeauty = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-orange-50 to-pink-100 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-700 leading-tight">
            The Timeless Beauty of Hindu Temples
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hindu temples are not just places of worship — they are sacred
            centers of art, culture, and spirituality. Every stone speaks of
            devotion, every carving sings tales from the Vedas and epics, and
            every towering spire points to the divine.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With intricate architecture, vibrant rituals, and a deep connection
            to cosmic energies, these temples represent a unique fusion of
            science and spirituality. They are built with precise vastu
            principles, aligned with stars, and energized with chants and
            prayers.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            From the snow-capped Kedarnath to the coastal Rameswaram, every
            temple offers a journey — not just across India, but within your
            soul.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <img
            src={templeImg}
            alt="Hindu Temple Beauty"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default HinduTempleBeauty;
