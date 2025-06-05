"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  Linkedin,
  Calendar,
  User,
  ArrowRight,
  Heart,
  MessageCircle,
  Eye,
  MapPin,
} from "lucide-react";
import { useState } from "react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Abdul Rahman",
      position: "Chief Scholar & Director",
      image: "/placeholder.svg?height=200&width=200",
      //   bio: "Leading Islamic scholar with over 25 years of experience in education and community development.",
      //   email: "abdul.rahman@syspattambi.org",
      //   phone: "+91 9876543210",
    },
    {
      id: 2,
      name: "Maulana Yusuf Ali",
      position: "Senior Religious Advisor",
      image: "/placeholder.svg?height=200&width=200",
      //   bio: "Renowned religious teacher and author of several Islamic educational texts.",
      //   email: "yusuf.ali@syspattambi.org",
      //   phone: "+91 9876543211",
    },
    {
      id: 3,
      name: "Dr. Fatima Khatun",
      position: "Education Coordinator",
      image: "/placeholder.svg?height=200&width=200",
      //   bio: "PhD in Islamic Studies, specializing in modern educational methodologies.",
      //   email: "fatima.khatun@syspattambi.org",
      //   phone: "+91 9876543212",
    },
    {
      id: 4,
      name: "Imam Hassan Ahmed",
      position: "Community Outreach Head",
      image: "/placeholder.svg?height=200&width=200",
      //   bio: "Dedicated to community service and interfaith dialogue initiatives.",
      //   email: "hassan.ahmed@syspattambi.org",
      //   phone: "+91 9876543213",
    },
    {
      id: 5,
      name: "Dr. Zainab Begum",
      position: "Women's Affairs Director",
      image: "/placeholder.svg?height=200&width=200",
      //   bio: "Advocate for women's education and empowerment in Islamic communities.",
      //   email: "zainab.begum@syspattambi.org",
      //   phone: "+91 9876543214",
    },
    {
      id: 6,
      name: "Maulana Ibrahim Khan",
      position: "Youth Development Head",
      image: "/placeholder.svg?height=200&width=200",
      //   bio: "Passionate about youth engagement and modern Islamic education approaches.",
      //   email: "ibrahim.khan@syspattambi.org",
      //   phone: "+91 9876543215",
    },
    {
      id: 7,
      name: "Dr. Aisha Siddiqui",
      position: "Research & Publications",
      image: "/placeholder.svg?height=200&width=200",
      //   bio: "Leading researcher in Islamic jurisprudence and contemporary issues.",
      //   email: "aisha.siddiqui@syspattambi.org",
      //   phone: "+91 9876543216",
    },
    {
      id: 8,
      name: "Ustaz Omar Farooq",
      position: "Training & Development",
      image: "/placeholder.svg?height=200&width=200",
      //   bio: "Expert in teacher training and curriculum development for Islamic education.",
      //   email: "omar.farooq@syspattambi.org",
      //   phone: "+91 9876543217",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About SYS", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-lg sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <Link
                href="/"
                className="flex items-center gap-[15px] no-underline"
              >
                <h1 className="text-[#007AC2] font-['Segoe_UI'] text-[50px] m-0 font-bold">
                  SYS
                </h1>
                <h2 className="text-[#003E5E] font-['Segoe_UI'] text-[34px] m-0 font-bold">
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
                  onClick={() => setIsMenuOpen(false)}
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
          Our Cabinet
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Meet Our Awesome Team!
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced team of scholars, educators, and community leaders
              work together to advance our mission of knowledge and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-0">
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Social Icons */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                          <Button
                            size="icon"
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            aria-label={`Call ${member.name}`}
                          >
                            <Phone className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            aria-label={`View ${member.name}'s LinkedIn`}
                          >
                            <Linkedin className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {member.position}
                      </p>
                      {/* <p className="text-gray-600 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        {member.bio}
                      </p> */}

                      {/* Contact Info */}
                      <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        {/* <div className="flex items-center text-sm text-gray-500">
                          <Mail className="w-4 h-4 mr-2" />
                          <span className="truncate">{member.email}</span>
                        </div> */}
                        {/* <div className="flex items-center text-sm text-gray-500">
                          <Phone className="w-4 h-4 mr-2" />
                          <span>{member.phone}</span>
                        </div> */}
                      </div>
                    </div>

                    {/* Animated border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-colors duration-500 rounded-lg"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Join Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                    href="/refund"
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
            <p className="text-gray-400">
              Copyright ©{currentYear} All rights reserved
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Team;
