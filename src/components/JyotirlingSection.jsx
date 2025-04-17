// src/components/JyotirlingSection.jsx
import { useNavigate } from 'react-router-dom';

const jyotirlingas = [
  { name: "Somnath", img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Fsomnath-gir-somnath-in-gujarat-250x250.jpg&w=1920&q=75" },
  { name: "Mallikarjuna", img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Fmallikarjuna-srisailam-in-andhra-pradesh-250x250.jpg&w=1920&q=75" },
  { name: "Mahakaleshwar", img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Fmahakaleshwar-ujjain-in-madhya-pradesh-250x250.jpg&w=1920&q=75" },
  { name: "Omkareshwar", img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Fomkareshwar-khandwa-in-madhya-pradesh-250x250.jpg&w=1920&q=75" },
  { name: "Kedarnath", img: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRX0Ic0Rgbs22qyut36I9MkVYo2w1UndGmbBzD-XjXEbexbJPLN5EW_Rl0HeOJjHUz6" },
  { name: "Bhimashankar", img: "http://t2.gstatic.com/images?q=tbn:ANd9GcSqFHIAvMQzchaOO8WVAfd9QfZMieZnkRvdb4qLA5W-msE4pySi" },
  { name: "Kashi Vishwanath", img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Fkashi-vishwanath-varanasi-in-uttar-pradesh-250x250.jpg&w=1920&q=75" },
  { name: "Trimbakeshwar", img: "http://t0.gstatic.com/images?q=tbn:ANd9GcRRUpR7CBHqC5dlktqNrjq4eeyuc5s4MeL7dWwLyAWEULFCX35-" },
  { name: "Vaidyanath", img: "https://cms.patrika.com/wp-content/uploads/2022/11/03/08_jyotirlinga_7849416-m.png" },
  { name: "Nageshwar", img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Fnageshwar-daarukavanam-in-gujarat-250x250.jpg&w=1920&q=75" },
  { name: "Rameshwar", img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Frameshwaram-rameshwaram-island-in-tamil-nadu-250x250.jpg&w=1920&q=75" },
  { name: "Grishneshwar", img: "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2F12-jyotirlingas-of-shiva-in-india%2Fgrishneshwar-aurangabad-in-maharashtra-250x250.jpg&w=1920&q=75" },
];

const JyotirlingSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-yellow-50 py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-yellow-800 text-center mb-10">
         Jyotirling Darshan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {jyotirlingas.map((ling) => (
          <div
            key={ling.name}
            onClick={() => navigate("/jyotirling-darshan")}
            className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={ling.img}
              alt={ling.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-yellow-800">
                {ling.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JyotirlingSection;
