import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login: you can add real validation here
    if (form.email && form.password) {
      navigate('/'); // redirect to home page after login
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-md w-full text-center border border-orange-200">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-orange-700 mb-2">🛕 Welcome Back</h1>
          <p className="text-sm text-orange-600">Please login to continue your spiritual journey.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="text-left">
            <label className="block text-orange-800 text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div className="text-left">
            <label className="block text-orange-800 text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-xl font-semibold hover:bg-orange-600 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-sm text-orange-500">
          Don't have an account? <span className="text-orange-700 underline cursor-pointer">Register</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
