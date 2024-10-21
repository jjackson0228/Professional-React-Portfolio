import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Invalid email';
    if (!form.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Message sent!');
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen flex place-items-center">
      <form
        className="max-w-lg mx-auto p-14 shadow-md rounded-lg space-y-6 bg-stone-300"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 mt-1">{errors.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-stone-600 to-lime-900 ... text-white py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gradient-to-r hover:from-lime-900 hover:to-violet-200"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
