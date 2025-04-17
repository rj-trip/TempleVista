// src/pages/CharDhamPage.jsx
const dhams = [
    {
      name: "Badrinath",
      img: "https://bharattravelguru.com/wp-content/uploads/2024/04/Panch-Badri-in-Uttarakhand.jpg",
      details: `Badrinath is located in Uttarakhand and dedicated to Lord Vishnu. It is surrounded by the Nar and Narayana mountain ranges and attracts lakhs of devotees each year. The temple is a part of both the Char Dham and the Chota Char Dham pilgrimage circuits.`,
    },
    {
      name: "Dwarka",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/dwarkadish-temple-01-attr-hero?qlt=82&ts=1726734784547",
      details: `Dwarka, located in Gujarat, is believed to be the ancient kingdom of Lord Krishna. The Dwarkadhish Temple is a key site here. Dwarka is known for its temple architecture, coastal beauty, and spiritual significance.`,
    },
    {
      name: "Puri",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yDS5GyC7eCV5tv55Q2dt3htyPHKQJmPZXQ&s",
      details: `Puri in Odisha is famous for the Jagannath Temple and its grand Rath Yatra. It is one of the four sacred Char Dham pilgrimage sites and represents the eastern part of the country.`,
    },
    {
      name: "Rameswaram",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgEebIzyAWW-XzAH6HVjDlUo_-bRU-iyG9w&s",
      details: `Rameswaram, located in Tamil Nadu, is associated with Lord Rama. The Ramanathaswamy Temple here houses one of the 12 Jyotirlingas. The site signifies spiritual purity and completion of one's Char Dham journey.`,
    },
  ];
  
//   const CharDhamPage = () => {
//     return (
//       <div className="bg-orange-50 min-h-screen p-6 md:p-12">
//         <h1 className="text-4xl font-bold text-center p-4 text-orange-800 mb-10">
//           Char Dham - Divine Gateways of India
//         </h1>
  
//         <div className="space-y-12 max-w-6xl mx-auto">
//           {dhams.map((dham) => (
//             <div
//               key={dham.name}
//               className="bg-white shadow-xl rounded-xl overflow-hidden md:flex"
//             >
//               <img
//                 src={dham.img}
//                 alt={dham.name}
//                 className="w-full md:w-1/2 h-72 object-cover"
//               />
//               <div className="p-6 md:p-8 flex flex-col justify-center">
//                 <h2 className="text-2xl font-semibold text-orange-700 mb-3">
//                   {dham.name}
//                 </h2>
//                 <p className="text-gray-700 text-base">{dham.details}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default CharDhamPage;
  

  // src/pages/CharDhamPage.jsx
import { useNavigate } from 'react-router-dom';

const CharDhamPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-orange-50 min-h-screen p-6 md:p-12">


      <h1 className="text-4xl font-bold text-center text-orange-800 mb-10 mt-10">
        Char Dham - Divine Gateways of India
      </h1>

      <div className="space-y-12 max-w-6xl mx-auto">
        {/* Char Dham Sections */}
        {dhams.map((dham) => (
          <div
            key={dham.name}
            className="bg-white shadow-xl rounded-xl overflow-hidden md:flex"
          >
            <img
              src={dham.img}
              alt={dham.name}
              className="w-full md:w-1/2 h-72 object-cover"
            />
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-orange-700 mb-3">
                {dham.name}
              </h2>
              <p className="text-gray-700 text-base">{dham.details}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-orange-600 text-white py-2 px-6 rounded-lg font-semibold text-lg shadow-md hover:bg-orange-700 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CharDhamPage;
