import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Optional if using shadcn/ui or Tailwind button

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg text-center border border-orange-200">
        <h1 className="text-6xl font-bold text-orange-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-orange-600 mb-2">Page Not Found</h2>
        <p className="text-orange-500 mb-6">
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate('/')}
          className="bg-orange-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-orange-600 transition duration-300"
        >
          🔙 Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
