'use client'

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert('Your message has been sent!');
    } else {
      alert('Failed to send the message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4 p-5 text-sm text-black">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="p-2 border min-h-40 border-gray-300 rounded"
        required
      />
      <button
        type="submit"
        className="p-2 mx-10 bg-indigo-500 text-white rounded hover:bg-indigo-600 hover:mx-5 transition-all duration-500"
      >
        Send Message
      </button>
    </form>
  );
}