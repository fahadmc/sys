"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About SYS", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/Contact" },
  ];

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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-lg sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <Link
                href="/"
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  textDecoration: "none",
                }}
              >
                <h1
                  className=""
                  style={{
                    color: "#007AC2",
                    fontFamily: "segoe UI",
                    fontSize: "50px",
                    margin: 0,
                    fontWeight: "bolder",
                  }}
                >
                  SYS
                </h1>
                <h2
                  className=""
                  style={{
                    color: "#003E5E",
                    fontFamily: "Segoe UI",
                    fontSize: "34px",
                    margin: 0,
                    fontWeight: "bolder",
                  }}
                >
                  PATTAMBI
                </h2>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-bold"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </Button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 bg-white shadow rounded-lg p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-700 hover:text-blue-600 font-semibold"
                  onClick={() => setIsMenuOpen(false)} // close menu on link click
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </motion.header>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-96 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 h-[50vh] bg-gradient-to-r from-blue-900/80 to-green-900/80 z-10"></div>
        {/* <Image 
          src="/images/hero-bg.png" 
          alt="Hero Background" 
          fill 
          className="object-cover" 
          priority
        /> */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-20 text-center text-white"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Get in Touch With Us
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-12">
        {[
          {
            icon: "📍",
            title: "Visit Our Office",
            desc: "SYS Pattambi Zone Youth Square - Vadee Hassan Pattambi",
          },
          {
            icon: "📞",
            title: "Call Us",
            desc: [
              { number: "+91 99612 92186" },
              { number: "+91 99464 10786" },
              { number: "+91 99466 93368" },
            ],
          },
          {
            icon: "📧",
            title: "Email Us",
            desc: "syspattambi@gmail.com",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:bg-gradient-to-r from-blue-900/80 to-green-900/80 hover:text-blue-50"
          >
            <div className="text-pink-600 text-3xl mb-2">{item.icon}</div>
            <h3 className="font-semibold text-lg">{item.title}</h3>

            {item.title === "Email Us" ? (
              <a
                href={`mailto:${item.desc}`}
                className="text-sm mt-1 block  hover:underline"
              >
                {item.desc}
              </a>
            ) : item.title === "Call Us" ? (
              <div className="text-sm mt-1 space-y-1">
                {item.desc.map((contact, idx) => (
                  <a
                    key={idx}
                    href={`tel:${contact.number.replace(/\s+/g, "")}`}
                    className="block  hover:underline hover:text-white"
                  >
                    {contact.number}
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-sm mt-1  ">{item.desc}</p>
            )}
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
            {[
              "Full Name *",
              "Email Address *",
              "Phone Number",
              "Message *",
            ].map((label, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label className="block mb-1">{label}</label>
                {label === "Message *" ? (
                  <textarea
                    rows="5"
                    className="w-full p-3 border rounded"
                    placeholder="Tell us about your project or questions..."
                    required
                  ></textarea>
                ) : (
                  <input
                    type={label.includes("Email") ? "email" : "text"}
                    className="w-full p-3 border rounded"
                    placeholder={label}
                    required={label.includes("*")}
                  />
                )}
              </motion.div>
            ))}
            <motion.button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-gradient-to-r from-blue-900/80 to-green-900/80"
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
              <Link
                href="/"
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  textDecoration: "none",
                }}
              >
                <h1
                  className=""
                  style={{
                    color: "#007AC2",
                    fontFamily: "segoe UI",
                    fontSize: "40px",
                    margin: 0,
                    fontWeight: "bolder",
                  }}
                >
                  SYS
                </h1>
                <h2
                  className=""
                  style={{
                    //  color: "#003E5E",
                    color: "white",
                    fontFamily: "Segoe UI",
                    fontSize: "23px",
                    margin: 0,
                    fontWeight: "bolder",
                  }}
                >
                  PATTAMBI
                </h2>
              </Link>
              <p className="text-gray-400">
                Sunni Yuvajana Sangam is a vibrant movement dedicated to
                nurturing the potential of youth. Through unity and shared
                values, we create a strong foundation for personal and community
                growth. Our focus on education equips the next generation with
                knowledge and confidence.
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
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
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
              <div className="space-y-3">
                {/* Address */}
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-gray-400 text-sm">
                    SYS Pattambi Zone Youth Square -<br></br> Vadee Hassan Pattambi
                  </span>
                </div>

                {/* Phone Numbers (Clickable) */}
                <div className="flex items-start space-x-2">
                  <Phone className="h-3 w-4 mt-1" />
                  <div className="flex flex-col space-y-1 text-sm text-gray-400 hover:text-white">
                    <a href="tel:+919961292186" className="hover:underline">
                      +91 99612 92186
                    </a>
                    <a href="tel:+919946410786" className="hover:underline">
                      +91 99464 10786
                    </a>
                    <a href="tel:+919946693368" className="hover:underline">
                      +91 99466 93368
                    </a>
                  </div>
                </div>

                {/* Email (Clickable) */}
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a
                    href="mailto:syspattambi@gmail.com"
                    className="text-gray-400 text-sm hover:text-white hover:underline"
                  >
                    syspattambi@gmail.com
                  </a>
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
            <p className="text-gray-400">
              Copyright ©{currentYear} All rights reserved
            </p>
          </motion.div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Contact;
