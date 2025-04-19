import { Link } from 'react-router-dom';


const Footer = () => {
    return (
      <footer id="contact" className="bg-gradient-to-tr from-orange-200 to-yellow-100 text-orange-900 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold border-b-4 border-orange-400 pb-2 mb-4">
              🛕 Mandir Darshan
            </h2>
            <p className="text-sm leading-relaxed">
              Mandir Darshan is a divine digital platform to explore the sacred temples of India, the Char Dham, Jyotirlingas, Shakti Peethas and more. Step into spiritual journeys through visuals, stories, and devotion.
            </p>
          </div>
  
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b-2 border-orange-300 pb-1">
              📍 Contact Us
            </h2>
            <ul className="text-sm space-y-2">
              <li><strong>Address:</strong> Mandir Marg, Spiritual City, Bharat - 123456</li>
              <li><strong>Email:</strong> darshan@mandirbharat.org</li>
              <li><strong>Phone:</strong> +91 98765 43210</li>
              <li><strong>Hours:</strong> Daily - 5:00 AM to 9:00 PM</li>
            </ul>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b-2 border-orange-300 pb-1">
              🔗 Quick Links
            </h2>
            <ul className="text-sm space-y-2">
              <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
              <li><Link to="/HinduTempleBeauty" className="hover:text-orange-500 transition">About Us</Link></li>
              {/* <li><a href="/" className="hover:text-orange-500 transition">Char Dham</a></li> */}
              <li><Link to="/Blog" className="hover:text-orange-500 transition">Blog</Link></li> 
              <li><Link to="/Contact" className="hover:text-orange-500 transition">Contact</Link></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="mt-10 border-t border-orange-300 pt-6 text-center text-sm text-orange-700">
        © {new Date().getFullYear()} Mandir Darshan | Made with devotion in Bharat 🇮🇳
      </div>
      </footer>
  );
};

export default Footer;