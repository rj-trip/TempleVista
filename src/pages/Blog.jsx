import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="bg-orange-50 pt-24 pb-16 px-4 md:px-12 text-orange-900 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-orange-800">
        🛕 Hindu Temple Blog
      </h1>

      {/* Blog Post 1: Kedarnath */}
      <div className="mb-16 md:flex md:items-start gap-10">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipMCLMBZ4Oa11R0EZ3Uk1eVUdtoG061cy2C8O4Uz=w243-h174-n-k-no-nu"
          alt="Kedarnath Temple"
          className="w-full md:w-1/3 rounded-xl shadow-xl mb-6 md:mb-0"
        />
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-3 text-orange-700">🔱 Kedarnath Temple – The Sacred Himalayan Retreat</h2>
          <p className="text-sm leading-relaxed mb-2">
            Kedarnath Temple, nestled in the majestic Garhwal Himalayas at 3,583 meters above sea level, is one of the most revered temples dedicated to Lord Shiva. It's part of the Char Dham Yatra and one of the twelve Jyotirlingas.
          </p>
          <p className="text-sm leading-relaxed mb-2">
            The journey to Kedarnath is not just physical but spiritual. Pilgrims walk over 16 km through snow-clad mountains, chanting “Har Har Mahadev.” The present temple is believed to be re-constructed by Adi Shankaracharya in the 8th century.
          </p>
          <p className="text-sm leading-relaxed">
            Despite facing natural calamities, the temple remains a symbol of eternal faith and divine strength. It is surrounded by powerful silence, majestic peaks, and unmatched tranquility.
          </p>
        </div>
      </div>

      {/* Blog Post 2: Brihadeeswarar Temple */}
      <div className="mb-16 md:flex md:items-start gap-10">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipN-uAlSTSIP0sWjeqeVte2mxjfr1b9Juj9kW44_=s1360-w1360-h1020"
          alt="Brihadeeswarar Temple"
          className="w-full md:w-1/3 rounded-xl shadow-xl mb-6 md:mb-0"
        />
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-3 text-orange-700">🌺 Brihadeeswarar Temple – The Big Temple of Thanjavur</h2>
          <p className="text-sm leading-relaxed mb-2">
            Built in 1010 AD by Raja Raja Chola I, this UNESCO World Heritage site in Tamil Nadu is a stunning testament to ancient Indian architecture. Its Vimana is over 200 feet tall and built entirely from granite.
          </p>
          <p className="text-sm leading-relaxed mb-2">
            The temple is dedicated to Lord Shiva and is famed for its symmetrical design, massive Nandi (sacred bull), and vibrant frescoes depicting scenes from Hindu mythology.
          </p>
          <p className="text-sm leading-relaxed">
            Brihadeeswarar Temple showcases the spiritual grandeur and engineering marvel of the Chola dynasty, making it a must-visit for devotees, historians, and art lovers.
          </p>
        </div>
      </div>

      {/* Blog Post 3: Kashi Vishwanath */}
      <div className="mb-16 md:flex md:items-start gap-10">
        <img
          src="https://swarajya.gumlet.io/swarajya/2022-12/dc9b62da-735f-48c4-9b3f-ec78d6c503c7/FhfrmLJX0AAIJXG.jfif?w=610&q=50&compress=true&format=auto"
          alt="Kashi Vishwanath Temple"
          className="w-full md:w-1/3 rounded-xl shadow-xl mb-6 md:mb-0"
        />
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-3 text-orange-700">💫 Kashi Vishwanath – Light of the Universe</h2>
          <p className="text-sm leading-relaxed mb-2">
            Situated in the spiritual heart of India, Varanasi, the Kashi Vishwanath Temple is one of the most sacred temples dedicated to Lord Shiva. It is said that a single visit here offers freedom from the cycle of rebirth.
          </p>
          <p className="text-sm leading-relaxed mb-2">
            The temple's spiritual magnetism attracts millions every year. The newly developed Kashi Corridor has added ease and beauty to the ancient temple complex, blending tradition with modernity.
          </p>
          <p className="text-sm leading-relaxed">
            One cannot describe the energy of the evening Ganga Aarti, where hundreds of lamps light up the riverfront and the chants of “Har Har Mahadev” echo across the city.
          </p>
        </div>
      </div>

      {/* Blog Post 4: Meenakshi Temple */}
      <div className="mb-16 md:flex md:items-start gap-10">
        <img
          src="https://img.etimg.com/thumb/msid-102428092,width-480,height-360,imgsize-176884,resizemode-75/meenakshi-amman-temple-madurai-tamil-nadu.jpg"
          alt="Meenakshi Temple"
          className="w-full md:w-1/3 rounded-xl shadow-xl mb-6 md:mb-0"
        />
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-3 text-orange-700">🌸 Meenakshi Temple – The Queen Goddess of Madurai</h2>
          <p className="text-sm leading-relaxed mb-2">
            The Meenakshi Temple in Madurai, Tamil Nadu, is dedicated to Goddess Parvati (Meenakshi) and her consort Lord Shiva (Sundareswarar). The temple is famous for its vibrant gopurams (gateway towers) covered in thousands of colorful sculptures.
          </p>
          <p className="text-sm leading-relaxed mb-2">
            It is not only an architectural wonder but also a symbol of feminine divinity in Hindu culture. The celestial wedding of Meenakshi and Sundareswarar is celebrated with grandeur each year.
          </p>
          <p className="text-sm leading-relaxed">
            The temple complex spans over 14 acres, reflecting the artistic brilliance and deep devotion of South Indian temple culture.
          </p>
        </div>
      </div>
      {/* Blog Post 5: Somnath Temple */}
<div className="mb-16 md:flex md:items-start gap-10">
  <img
    src="https://static.toiimg.com/thumb/46918916/POI-1-Somnath_ed.jpg?width=1200&height=900"
    alt="Somnath Temple"
    className="w-full md:w-1/3 rounded-xl shadow-xl mb-6 md:mb-0"
  />
  <div className="md:w-2/3">
    <h2 className="text-3xl font-bold mb-3 text-orange-700">🕉️ Somnath – The Eternal Shrine on the Arabian Sea</h2>
    <p className="text-sm leading-relaxed mb-2">
      Located in Gujarat, Somnath Temple is the first of the 12 Jyotirlingas of Lord Shiva. Known as the “Shrine Eternal,” it has been destroyed and rebuilt many times due to invasions.
    </p>
    <p className="text-sm leading-relaxed mb-2">
      Today, it stands tall on the seashore, representing unwavering devotion and cultural pride. The temple's sound and light show retells the glorious history each evening.
    </p>
    <p className="text-sm leading-relaxed">
      Its serene location and spiritual significance make it a must-visit pilgrimage for seekers of faith and resilience.
    </p>
  </div>
</div>

{/* Blog Post 6: Jagannath Temple */}
<div className="mb-16 md:flex md:items-start gap-10">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQzsUp13Jc2VYcWnGD4brW9_yKaYzr9P96A&s"
    alt="Jagannath Temple"
    className="w-full md:w-1/3 rounded-xl shadow-xl mb-6 md:mb-0"
  />
  <div className="md:w-2/3">
    <h2 className="text-3xl font-bold mb-3 text-orange-700">🚩 Jagannath Temple – The Lord of the Universe</h2>
    <p className="text-sm leading-relaxed mb-2">
      Located in Puri, Odisha, the Jagannath Temple is one of the Char Dham sites. The temple is dedicated to Lord Jagannath, an incarnation of Vishnu, along with Balabhadra and Subhadra.
    </p>
    <p className="text-sm leading-relaxed mb-2">
      Its world-famous Rath Yatra attracts millions every year, where the deities are taken on massive chariots in a divine procession.
    </p>
    <p className="text-sm leading-relaxed">
      The kitchen of Jagannath Temple is one of the largest in the world, serving thousands of devotees every day.
    </p>
  </div>
</div>

{/* Blog Post 7: Vaishno Devi */}
<div className="mb-16 md:flex md:items-start gap-10">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsb5pKyf6FX4atKZmbSRapm4QJqYwpK1gQg&s"
    alt="Vaishno Devi"
    className="w-full md:w-1/3 rounded-xl shadow-xl mb-6 md:mb-0"
  />
  <div className="md:w-2/3">
    <h2 className="text-3xl font-bold mb-3 text-orange-700">🕊️ Vaishno Devi – The Shaktipeeth of the Trikuta Hills</h2>
    <p className="text-sm leading-relaxed mb-2">
      Situated in Jammu & Kashmir, Vaishno Devi is one of the most visited pilgrimage sites in India. Devotees trek 13 kilometers to reach the cave temple nestled in the Trikuta mountains.
    </p>
    <p className="text-sm leading-relaxed mb-2">
      The shrine is dedicated to the Goddess Vaishnavi, a manifestation of Durga. It is believed that the goddess herself calls her devotees.
    </p>
    <p className="text-sm leading-relaxed">
      The divine energy and scenic beauty of this pilgrimage offer both spiritual and natural peace.
    </p>
  </div>
</div>

{/* Blog Post 8: Akshardham Temple */}
<div className="mb-16 md:flex md:items-start gap-10">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OD0zZI7X_UYFP7g0rnlqqHpIYJC_if3hpw&s"
    alt="Akshardham Temple"
    className="w-full md:w-1/3 rounded-xl shadow-xl mb-6 md:mb-0"
  />
  <div className="md:w-2/3">
    <h2 className="text-3xl font-bold mb-3 text-orange-700">🌟 Akshardham – Modern Marvel of Indian Spirituality</h2>
    <p className="text-sm leading-relaxed mb-2">
      Swaminarayan Akshardham in Delhi is one of the largest Hindu temples in the world. Built in 2005, it showcases Indian culture, history, and spirituality through architecture, exhibitions, and gardens.
    </p>
    <p className="text-sm leading-relaxed mb-2">
      The temple features breathtaking carvings, a musical fountain, and boat rides illustrating 10,000 years of Indian heritage.
    </p>
    <p className="text-sm leading-relaxed">
      Akshardham is not just a temple but a celebration of India’s timeless wisdom and cultural unity.
    </p>
  </div>
</div>
{/* Blog Post 9: Golden Temple */}
<div className="mb-16 md:flex md:items-start gap-10">
  <img
    src="https://assets.cntraveller.in/photos/6368e177a788c013ce0f6c13/4:3/w_1440,h_1080,c_limit/golden-temple-lead.jpg"
    alt="Golden Temple"
    className="w-full md:w-1/3 rounded-xl shadow-xl mb-6 md:mb-0"
  />
  <div className="md:w-2/3">
    <h2 className="text-3xl font-bold mb-3 text-orange-700">✨ Golden Temple – A Jewel of Amritsar</h2>
    <p className="text-sm leading-relaxed mb-2">
      Although a Sikh temple, the Golden Temple is one of the most peaceful and divine places in India. Known for its golden dome and serene lake, the Harmandir Sahib welcomes people of all religions to meditate, serve, and find peace.
    </p>
    <p className="text-sm leading-relaxed">
      The temple complex is known for its Langar (free food service), serving over 100,000 people every day, making it a symbol of unity, equality, and service.
    </p>
  </div>
</div>

{/* Blog Post 10: Padmanabhaswamy Temple */}
<div className="mb-16 md:flex md:items-start gap-10">
  <img
    src="https://s7ap1.scene7.com/is/image/incredibleindia/padmanabha-swamy-temple-thiruvananthapuram-kerala-1-attr-hero?qlt=82&ts=1727367640712"
    alt="Padmanabhaswamy Temple"
    className="w-full md:w-1/3 rounded-xl shadow-xl mb-6 md:mb-0"
  />
  <div className="md:w-2/3">
    <h2 className="text-3xl font-bold mb-3 text-orange-700">💰 Padmanabhaswamy Temple – The World’s Richest Temple</h2>
    <p className="text-sm leading-relaxed mb-2">
      Located in Thiruvananthapuram, Kerala, this Vishnu temple is famous not only for its Dravidian architecture and spiritual value, but also for its mysterious underground vaults that house immense wealth and artifacts.
    </p>
    <p className="text-sm leading-relaxed">
      The idol of Lord Vishnu reclining on Ananta (the serpent) is a rare sight and draws devotees from all over the world.
    </p>
  </div>
</div>

{/* Blog Post 11: Kamakhya Temple */}
<div className="mb-16 md:flex md:items-start gap-10">
  <img
    src="https://s7ap1.scene7.com/is/image/incredibleindia/kamakhya-temple-dispur-assam-2-attr-hero?qlt=82&ts=1726741392778"
    alt="Kamakhya Temple"
    className="w-full md:w-1/3 rounded-xl shadow-xl mb-6 md:mb-0"
  />
  <div className="md:w-2/3">
    <h2 className="text-3xl font-bold mb-3 text-orange-700">🩸 Kamakhya Temple – The Shakti Shrine of Assam</h2>
    <p className="text-sm leading-relaxed mb-2">
      Situated atop Nilachal Hill in Guwahati, Assam, Kamakhya Temple is one of the most powerful Shakti Peethas in India. This temple is dedicated to the goddess Kamakhya, representing the feminine energy and power of creation.
    </p>
    <p className="text-sm leading-relaxed">
      The temple is known for the Ambubachi Mela and its ancient tantric rituals that are rooted in deep mysticism.
    </p>
  </div>
</div>

{/* Blog Post 12: Annamalaiyar Temple */}
<div className="mb-16 md:flex md:items-start gap-10">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcPIbhk59HDaRSZjplF_6uLbVzRP-m2caWQ&s"
    alt="Annamalaiyar Temple"
    className="w-full md:w-1/3 rounded-xl shadow-xl mb-6 md:mb-0"
  />
  <div className="md:w-2/3">
    <h2 className="text-3xl font-bold mb-3 text-orange-700">🔥 Annamalaiyar Temple – The Fire Element of Shiva</h2>
    <p className="text-sm leading-relaxed mb-2">
      Located in Thiruvannamalai, Tamil Nadu, this massive Shiva temple is associated with the fire element (Agni) of the five elements of nature. It is one of the Pancha Bhoota Sthalams and is particularly revered during Karthigai Deepam.
    </p>
    <p className="text-sm leading-relaxed">
      The temple’s gopuram rises 66 meters and is visible from miles away, especially when lit with the sacred flame on Annamalai Hill.
    </p>
  </div>
</div>


      {/* Call to Action / Footer */}
      <div className="text-center mt-16">
        <Link to="/" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full shadow-md transition duration-300">
          🔙 Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Blog;
