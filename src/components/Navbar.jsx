import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/hinduTempleBeauty' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Login', href: '/login' },
  ];

  return (
    <div>
    <nav className="bg-orange-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-700 tracking-wide">
          🛕 Mandir Darshan
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-orange-800 hover:text-orange-600 font-medium transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-50 px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block text-orange-800 hover:text-orange-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
    <nav>
      
        <Link to="/">Home</Link>
        <Link to="/HinduTempleBeauty">About us</Link>
        <Link to="/Contact">Contact us</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/Login">Login</Link>
       

    </nav>
    </div>

  );
};

export default Navbar;
