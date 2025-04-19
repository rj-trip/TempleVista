// src/pages/Register.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Dummy validation: all fields required
    if (form.name && form.email && form.password) {
      navigate('/'); // redirect to home page after successful registration
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-md w-full text-center border border-orange-200">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-orange-700 mb-2">🛕 Join Mandir Darshan</h1>
          <p className="text-sm text-orange-600">Start your spiritual journey with us.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="text-left">
            <label className="block text-orange-800 text-sm font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-orange-300 focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Your Name"
            />
          </div>
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
            Register
          </button>
        </form>

        <div className="mt-6 text-sm text-orange-500">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-orange-700 underline cursor-pointer"
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
