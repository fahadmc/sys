"use client";

import { motion } from "framer-motion";
import { Users, Heart, BookOpen, Award, Target, Eye, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { number: "50+", label: "Years of Service", icon: Award },
  { number: "10,000+", label: "Lives Touched", icon: Heart },
  { number: "100+", label: "Volunteers", icon: Users },
  { number: "25+", label: "Programs", icon: BookOpen },
];

const values = [
  {
    title: "Unity",
    description:
      "Bringing together youth from all backgrounds to work towards common goals",
    icon: Users,
  },
  {
    title: "Service",
    description:
      "Dedicated to serving the community through various charitable initiatives",
    icon: Heart,
  },
  {
    title: "Education",
    description:
      "Promoting knowledge and learning as the foundation of progress",
    icon: BookOpen,
  },
  {
    title: "Excellence",
    description: "Striving for the highest standards in all our endeavors",
    icon: Award,
  },
];

const timeline = [
  {
    year: "1970",
    title: "Foundation",
    description: "SYS was established with the vision of empowering youth",
  },
  {
    year: "1985",
    title: "First Major Initiative",
    description: "Launched our first major educational program",
  },
  {
    year: "2000",
    title: "Digital Transformation",
    description: "Embraced technology to reach more communities",
  },
  {
    year: "2020",
    title: "Modern Era",
    description:
      "Expanded our reach with online platforms and digital services",
  },
];

export default function AboutPage() {
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
    <div className="min-h-screen bg-white">
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
      <section className="relative h-[50vh] bg-gradient-to-r from-blue-900/80 to-green-900/80 z-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative text-center text-white max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About SYS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Sunni Yuvajana Samgam - Empowering Youth Since 1970
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <stat.icon className="h-12 w-12 mx-auto text-blue-600" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-600">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower youth through education, social welfare, and
                  community service, fostering unity and progress in society
                  while preserving our cultural values and promoting interfaith
                  harmony.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-blue-600  mr-3" />
                  <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-600">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To create a society where every individual has access to
                  quality education, healthcare, and opportunities for growth,
                  building a harmonious community based on justice, equality,
                  and mutual respect.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/hq720.jpg"
                alt="Our Mission and Vision"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="group h-full bg-blue-50 hover:bg-gradient-to-r from-blue-900/80 to-green-900/80 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
                    >
                      <value.icon className="h-12 w-12 mx-auto text-blue-600 group-hover:text-blue-50" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-50">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-blue-50">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800  "
          >
            Our Journey
          </motion.h2>
          <div className="max-w-4xl mx-auto ">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 md:px-8">
                  <Card className="group bg-blue-50 rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:bg-blue-600">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2 group-hover:text-blue-50">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-50">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-blue-50">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block w-4 h-4 bg-blue-600 rounded-full mx-4 relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/80 to-green-900/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Join Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Be part of our journey to create positive change in the community.
            Together, we can build a better future for all.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-x-4"
          >
             <Link href="/Contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Contact Now
                  </Button>
                </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
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
                    href="/Terms"
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
    </div>
  );
}
