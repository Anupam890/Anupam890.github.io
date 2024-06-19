import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_upcy9pc',
      'template_117b5gr',
      formData,
      'emNdATS4g2Ze01Ht3'
    ).then((result) => {
      console.log(result.text);
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, (error) => {
      console.log(error.text);
      toast.error('Failed to send the message, please try again.');
    });
  };

  return (
    <div className="contact-container p-4 bg-gray-900 h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white/10 p-6 rounded-lg shadow-md">
        <motion.h1
          className="skills-title text-white text-3xl text-center mb-4 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Us 📩
        </motion.h1>
        <motion.div
          className="bar text-center w-20 h-[1px] bg-primary mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1 }}
        />
        <form onSubmit={handleSubmit} className="space-y-4 bg-[#171F38] p-7 rounded-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white/20 border border-white/20 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white/20 border border-white/20 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="mt-1 block w-full px-3 py-2 bg-white/20 border border-white/20 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#3B82F6] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default ContactUs;
