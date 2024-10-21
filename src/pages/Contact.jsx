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
    <div className="min-h-screen grid grid-cols-2">
      {/* Left Half: Contact Form */}
      <div className="flex items-center justify-center p-8">
        <form
          className="w-full max-w-lg p-10 shadow-md rounded-lg space-y-6 bg-stone-300 relative"
          onSubmit={handleSubmit}
        >
          <h2 className="absolute top-4 left-4 text-2xl font-bold font-serif text-stone-700">
            Contact Me!
          </h2>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-stone-600 to-lime-900 text-white py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gradient-to-r hover:from-lime-900 hover:to-violet-200 hover:shadow-xl"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Right Half: Placeholder or Additional Info */}
      <div className="flex flex-col justify-center p-8">
        <p className="text-xl text-stone-800 mb-4">
          Feel free to reach out through the contact form! I will get back to
          you as soon as possible.
        </p>
        <p className="text-xl text-stone-800 mb-4">
          I appreciate your feedback and inquiries, and I look forward to
          connecting with you!
        </p>
        <p className="text-xl text-stone-800 mb-4">
          E-mail me at jjackson0228@gmail.com
        </p>
        <p className="text-xl text-stone-800 mb-4">
          Or call me at 904-444-9833
        </p>
      </div>
    </div>
  );
}
