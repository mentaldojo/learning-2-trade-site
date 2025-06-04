'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Redirect to success page
      router.push('/contact/success');
    } catch (err) {
      setError('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
          First Name *
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent outline-none transition-all duration-200"
          placeholder="Enter your first name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent outline-none transition-all duration-200"
          placeholder="Enter your email address"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent outline-none transition-all duration-200"
          placeholder="How can I help you with your trading journey?"
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#ffe066] via-[#FFD700] to-[#bfa14a] text-black font-bold py-4 px-8 shadow-lg text-lg transition-all duration-200 uppercase font-sans rounded-full hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,215,0,0.5)] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
} 