'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      custom={0}
      className="text-gray-800"
    >
      {/* Header */}
      <motion.header
        variants={fadeInUp}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white shadow-lg sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
         <div className="flex items-center justify-around">
            <motion.div
              variants={fadeInUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
                 <Link href={"/"}>
                  
                  <img
                src="/logo-text.png"
                alt="SYS Logo"
                className="w-64 h-12 mb-2"
              />
                  </Link>
             
            </motion.div>
            <nav className="hidden md:flex space-x-10">
              {['Home', 'About SYS', 'Contact'].map((item, i) => (
                <motion.div
                  key={item}
                  variants={fadeInUp}
                  custom={i + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link
                    href={
                      item === 'Home'
                        ? '/'
                        : item === 'About SYS'
                        ? '/about'
                        : '/Contact'
                    }
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-bold "
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Contact Info Cards */}
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-12">
  {[
    {
      icon: '📍',
      title: 'Visit Our Office',
      desc:
        'SYS STATE COMMITTEE, Samatha centre, Jaffarkhan colony, Eranhipalam PO, Kozhikode',
    },
    {
      icon: '📞',
      title: 'Call Us',
      desc: '0495 2771538',
    },
    {
      icon: '📧',
      title: 'Email Us',
      desc: 'statesys@gmail.com',
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={i}
      whileHover={{ scale: 1.05, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:bg-blue-600 hover:text-blue-50"
    >
      <div className="text-pink-600 text-3xl mb-2">{item.icon}</div>
      <h3 className="font-semibold text-lg">{item.title}</h3>
      <p className="text-sm mt-1">{item.desc}</p>
    </motion.div>
  ))}
</div>


      {/* Form + Map Section */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            {['Full Name *', 'Email Address *', 'Phone Number', 'Message *'].map(
              (label, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label className="block mb-1">{label}</label>
                  {label === 'Message *' ? (
                    <textarea
                      rows="5"
                      className="w-full p-3 border rounded"
                      placeholder="Tell us about your project or questions..."
                      required
                    ></textarea>
                  ) : (
                    <input
                      type={label.includes('Email') ? 'email' : 'text'}
                      className="w-full p-3 border rounded"
                      placeholder={label}
                      required={label.includes('*')}
                    />
                  )}
                </motion.div>
              )
            )}
            <motion.button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700"
              variants={fadeInUp}
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={6}
        >
          <h2 className="text-2xl font-semibold mb-4">Visit Our Office</h2>
        <iframe
  title="sys-office-location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0034971027876!2d76.30844087473607!3d10.004676472490914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c363f13c245d%3A0x63e2adad5cb8b92f!2sSamatha%20Centre!5e0!3m2!1sen!2sin!4v1717328421543!5m2!1sen!2sin"
  width="100%"
  height="350"
  style={{ border: 0 }}
//   allowFullScreen=""
//   loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </motion.div>
      </div>

     <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">SYS Kerala</h3>
              <p className="text-gray-400">
                Sunni Yuvajana Samgam - Empowering youth through unity,
                education, and social welfare.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Refund"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>
                    SYS STATE COMMITTEE, Samatha centre, Jaffarkhan colony,
                    Eranhipalam PO, Kozhikode
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>0495 2771538</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>statesys@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-8 pt-8 text-center"
          >
            <p className="text-gray-400">Copyright ©{currentYear} All rights reserved</p>
          </motion.div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Contact;
