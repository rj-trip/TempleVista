// src/components/CharDhamSection.jsx
import { useNavigate } from 'react-router-dom';

const dhams = [
  {
    name: "Badrinath",
    img: "https://bharattravelguru.com/wp-content/uploads/2024/04/Panch-Badri-in-Uttarakhand.jpg",
    desc: "Nestled in the Himalayas, abode of Lord Vishnu",
  },
  {
    name: "Dwarka",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/dwarkadish-temple-01-attr-hero?qlt=82&ts=1726734784547",
    desc: "Kingdom of Lord Krishna on the western coast",
  },
  {
    name: "Puri",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yDS5GyC7eCV5tv55Q2dt3htyPHKQJmPZXQ&s",
    desc: "The holy city of Lord Jagannath in Odisha",
  },
  {
    name: "Rameswaram",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgEebIzyAWW-XzAH6HVjDlUo_-bRU-iyG9w&s",
    desc: "Southern spiritual gateway of Lord Shiva",
  },
];

const CharDhamSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-orange-50 py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-orange-800 text-center mb-10">
        The Sacred Char Dham
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {dhams.map((dham) => (
          <div
            key={dham.name}
            onClick={() => navigate("/char-dham")}
            className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <img
              src={dham.img}
              alt={dham.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-orange-700">
                {dham.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{dham.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharDhamSection;
