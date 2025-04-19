// src/pages/TempleMapPage.jsx
import React, { useState } from 'react';

const temples = [
  { name: 'Badrinath', location: 'Badrinath Temple, Uttarakhand' },
  { name: 'Dwarka', location: 'Dwarkadhish Temple, Gujarat' },
  { name: 'Puri', location: 'Jagannath Temple, Puri' },
  { name: 'Rameswaram', location: 'Ramanathaswamy Temple, Rameswaram' },
  { name: 'Somnath', location: 'Somnath Temple, Gujarat' },
  { name: 'Kashi Vishwanath', location: 'Kashi Vishwanath Temple, Varanasi' },
  { name: 'Mahakaleshwar', location: 'Mahakaleshwar Temple, Ujjain' },
  { name: 'Golden Temple', location: 'Golden Temple, Amritsar' },
  { name: 'Kedarnath', location: 'Kedarnath Temple, Uttarakhand' },
];

const TempleMapPage = () => {
  const [selectedTemple, setSelectedTemple] = useState('');
  const [mapSrc, setMapSrc] = useState('');

  const handleSearch = () => {
    if (selectedTemple) {
      const temple = temples.find(t => t.name === selectedTemple);
      const query = encodeURIComponent(temple.location);
      setMapSrc(`https://www.google.com/maps?q=${query}&output=embed`);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-700 mb-8">
        🗺️ Temple Locator
      </h1>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <select
            value={selectedTemple}
            onChange={(e) => setSelectedTemple(e.target.value)}
            className="w-full md:flex-1 px-4 py-2 border border-orange-300 rounded-lg text-orange-800 focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select a Temple</option>
            {temples.map((temple) => (
              <option key={temple.name} value={temple.name}>
                {temple.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleSearch}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            Show on Map
          </button>
        </div>
      </div>

      {mapSrc && (
        <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Temple Location"
            src={mapSrc}
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default TempleMapPage;
