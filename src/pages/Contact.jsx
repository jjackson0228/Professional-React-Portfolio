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
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        ></textarea>
        {errors.message && <p className="text-red-500">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Send
      </button>
    </form>
  );
}
