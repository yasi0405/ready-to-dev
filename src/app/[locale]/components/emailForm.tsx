"use client"

import React, { useState } from 'react';

const EmailForm: React.FC = () => {
  const [formData, setFormData] = useState({
    from: '', 
    to: 'yannick.simon@readytodev.be',
    subject: '',
    body: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("DATA POST ", formData);
    // Post request to your API route
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.message) {
        alert('Email sent successfully!');
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Failed to send email', error);
      alert('Failed to send email. Check the console for more details.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
            <label className="block">
                <span className="text-gray-700">From</span>
                <input type="email" id="from" name="from" required value={formData.from} onChange={handleChange} className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="" />
            </label>
            <label className="block">
                <span className="text-gray-700">Subject</span>
                <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="" />
            </label>
            <label className="block">
                <span className="text-gray-700">Message</span>
                <textarea id="body" name="body" required value={formData.body} onChange={handleChange} className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"></textarea>
            </label>
            <button type="submit">Send Email</button>
        </div>
    </form>
  );
};

export default EmailForm;
