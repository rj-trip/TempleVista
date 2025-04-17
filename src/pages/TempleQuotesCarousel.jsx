// src/components/TempleQuotesCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const quotes = [
  {
    quote:
      "The temple is not just a structure of stone, it is the embodiment of silence, spirituality, and cosmic rhythm.",
    author: "– Ancient Vedic Wisdom",
  },
  {
    quote:
      "Wherever the mind goes, let it return again to the feet of the Lord, the source of all peace.",
    author: "– Bhagavad Gita",
  },
  {
    quote:
      "In the sanctum of the temple, the soul bows not before idols, but before the divine energy they hold.",
    author: "– Adi Shankaracharya",
  },
  {
    quote:
      "Temples are the bridges between the earthly and the divine — where man meets God and finds himself.",
    author: "– Unknown",
  },
  {
    quote:
      "When you step into a temple, you step into a timeless world of devotion, light, and bliss.",
    author: "– Mahabharata",
  },
];

const TempleQuotesCarousel = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-100 to-orange-50 py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-orange-800 mb-10">
        Sacred Quotes from Temple Scriptures
      </h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={30}
        className="max-w-4xl mx-auto"
      >
        {quotes.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center max-w-3xl mx-auto">
              <p className="text-xl italic text-gray-800 mb-4">
                “{item.quote}”
              </p>
              <span className="text-orange-600 font-semibold">{item.author}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TempleQuotesCarousel;
