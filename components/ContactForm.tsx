'use client';

import React, { useState, useRef } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Turnstileのトークンを取得
      const token = turnstileRef.current?.querySelector('iframe')?.getAttribute('data-token');
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          token,
        }),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        // Turnstileをリセット
        // @ts-ignore
        window.turnstile?.reset();
      } else {
        console.error('Failed to submit form.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Your Message"
          className="w-full p-2 border rounded h-32"
          required
        />
      </div>
      <div ref={turnstileRef} className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;