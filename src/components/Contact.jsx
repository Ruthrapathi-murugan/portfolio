import React, { useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://portfolio-backend-v0qc.onrender.com/api/contact', formData);
      if (res.status === 200) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error('Error sending message', err);
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-[0_5px_20px_rgba(0,255,150,0.5)] animate-fadeIn">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Details */}
          <div className="flex-1 space-y-6 animate-slideLeft">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">Let's Talk</h3>
            <p className="text-gray-300">I'm open to discussing web development projects or partnership opportunities.</p>

            <div className="flex items-center space-x-3 text-lg">
              <FaEnvelope className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,150,0.7)]" />
              <a href="mailto:ruthrapathimurugan@outlook.com" className="hover:underline">ruthrapathimurugan@outlook.com</a>
            </div>
            <div className="flex items-center space-x-3 text-lg">
              <FaPhone className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,150,0.7)]" />
              <span>+91-9626380310</span>
            </div>
            <div className="flex items-center space-x-3 text-lg">
              <FaMapMarkedAlt className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,150,0.7)]" />
              <span>17/180 south car street, Palani Dindigul-624601</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full mt-12 md:mt-0">
            <div className="bg-gray-900 p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_70px_rgba(0,255,150,0.2)] transition-all duration-500 transform hover:-translate-y-2 animate-slideRight">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2 font-semibold">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    rows="5"
                    placeholder="Enter Your Message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold
                  transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1
                  py-3 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(0,255,150,0.6)]"
                >
                  🚀 Send Message
                </button>
              </form>

              {success && <p className="text-green-500 mt-6 text-center">✅ Message sent successfully!</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
