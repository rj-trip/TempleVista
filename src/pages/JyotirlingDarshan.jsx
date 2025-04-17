// src/pages/JyotirlingDarshan.jsx
import { useNavigate } from 'react-router-dom';

const jyotirlingas = [
  {
    name: "Somnath",
    img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Fsomnath-gir-somnath-in-gujarat-250x250.jpg&w=1920&q=75",
    description: "Located in Gujarat, Somnath is the first of the 12 Jyotirlingas and symbolizes the beginning of spiritual enlightenment.",
  },
  {
    name: "Mallikarjuna",
    img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Fmallikarjuna-srisailam-in-andhra-pradesh-250x250.jpg&w=1920&q=75",
    description: "Located in Andhra Pradesh, it is also one of the 18 Maha Shakti Peethas.",
  },
  {
    name: "Mahakaleshwar",
    img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Fmahakaleshwar-ujjain-in-madhya-pradesh-250x250.jpg&w=1920&q=75",
    description: "Situated in Ujjain, MP, it is one of the most sacred abodes of Lord Shiva.",
  },
  {
    name: "Omkareshwar",
    img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Fomkareshwar-khandwa-in-madhya-pradesh-250x250.jpg&w=1920&q=75",
    description: "Located on an island in the Narmada River, this temple is shaped like the Om symbol.",
  },
  {
    name: "Kedarnath",
    img: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRX0Ic0Rgbs22qyut36I9MkVYo2w1UndGmbBzD-XjXEbexbJPLN5EW_Rl0HeOJjHUz6",
    description: "One of the holiest Hindu shrines located in the Himalayas, Uttarakhand.",
  },
  {
    name: "Bhimashankar",
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcSqFHIAvMQzchaOO8WVAfd9QfZMieZnkRvdb4qLA5W-msE4pySi",
    description: "Located in Maharashtra, this temple is surrounded by dense forests and hills.",
  },
  {
    name: "Kashi Vishwanath",
    img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Fkashi-vishwanath-varanasi-in-uttar-pradesh-250x250.jpg&w=1920&q=75",
    description: "Situated in Varanasi, Uttar Pradesh, this temple is a major spiritual center.",
  },
  {
    name: "Trimbakeshwar",
    img: "http://t0.gstatic.com/images?q=tbn:ANd9GcRRUpR7CBHqC5dlktqNrjq4eeyuc5s4MeL7dWwLyAWEULFCX35-",
    description: "Located in Nashik, Maharashtra, near the origin of the Godavari river.",
  },
  {
    name: "Vaidyanath",
    img: "https://cms.patrika.com/wp-content/uploads/2022/11/03/08_jyotirlinga_7849416-m.png",
    description: "Found in Jharkhand, it’s believed that worshipping here can cure diseases.",
  },
  {
    name: "Nageshwar",
    img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Fnageshwar-daarukavanam-in-gujarat-250x250.jpg&w=1920&q=75",
    description: "Located near Dwarka, it’s known for the tall statue of Lord Shiva.",
  },
  {
    name: "Rameshwar",
    img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Frameshwaram-rameshwaram-island-in-tamil-nadu-250x250.jpg&w=1920&q=75",
    description: "Situated in Tamil Nadu, it’s one of the Char Dham sites as well.",
  },
  {
    name: "Grishneshwar",
    img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Fgrishneshwar-aurangabad-in-maharashtra-250x250.jpg&w=1920&q=75",
    description: "Near the Ellora caves in Maharashtra, it's the last Jyotirlinga.",
  },
];

const JyotirlingDarshan = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-yellow-50 min-h-screen p-6 md:p-12">


      <h1 className="text-4xl mt-10 font-bold text-yellow-800 text-center mb-10">
        Jyotirling Darshan – Divine Shrines of Lord Shiva
      </h1>

      <div className="space-y-10 max-w-6xl mx-auto">
        {jyotirlingas.map((ling) => (
          <div
            key={ling.name}
            className="bg-white shadow-lg rounded-xl overflow-hidden md:flex"
          >
            <img
              src={ling.img}
              alt={ling.name}
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-yellow-700 mb-2">
                {ling.name}
              </h2>
              <p className="text-gray-700">{ling.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 mb-10">
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-600 text-white py-2 px-6 rounded-lg font-semibold text-lg shadow-md hover:bg-yellow-700 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default JyotirlingDarshan;
