"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  User,
  ArrowRight,
  Heart,
  MessageCircle,
  Eye,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "Education First: Transforming Lives Through Knowledge",
    excerpt:
      "Discover how our educational initiatives are creating opportunities for thousands of students across the community, fostering growth and development.",
    author: "SYS Team",
    date: "December 15, 2024",
    category: "Education",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Charity and Relief Activities: Making a Difference",
    excerpt:
      "Supporting communities through various charitable initiatives and relief programs. Learn about our recent efforts and how you can contribute.",
    author: "Relief Committee",
    date: "December 12, 2024",
    category: "Charity",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Santhwanath Volunteers: Building Stronger Communities",
    excerpt:
      "Dedicated volunteers working together for social welfare and community development. Discover the impact of our volunteer programs.",
    author: "Volunteer Coordinator",
    date: "December 10, 2024",
    category: "Community",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "Sunni Voice and Read Press: Spreading Knowledge",
    excerpt:
      "Publishing and media services to spread knowledge and awareness through various publications and digital platforms.",
    author: "Editorial Team",
    date: "December 8, 2024",
    category: "Media",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    title: "Board School Exam Success Stories",
    excerpt:
      "Celebrating the achievements of our students in board examinations and highlighting the success of our educational programs.",
    author: "Academic Team",
    date: "December 5, 2024",
    category: "Education",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    title: "Our Organizations: Unity in Diversity",
    excerpt:
      "Exploring the various organizations under our umbrella and how they work together to serve the community effectively.",
    author: "SYS Leadership",
    date: "December 3, 2024",
    category: "Organization",
    image: "/placeholder.svg?height=300&width=500",
  },
];

const categories = [
  "All",
  "Education",
  "Charity",
  "Community",
  "Media",
  "Organization",
];

// Fixed main component structure
export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About SYS", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
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
                <h1 className="text-[#007AC2] font-segoe text-[50px] m-0 font-bold">
                  SYS
                </h1>
                <h2 className="text-[#003E5E] font-segoe text-[34px] m-0 font-bold">
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
            Our Blog
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Exploring Perspectives, One Post at a Time
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 pb-16">
        <AnimatePresence>
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredPost(post.id)}
                onHoverEnd={() => setHoveredPost(null)}
                className="group cursor-pointer"
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="p-0 relative overflow-hidden">
                    <motion.div
                      className="relative h-48 overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredPost === post.id ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4"
                      >
                        <Badge
                          variant="secondary"
                          className="bg-white/90 text-gray-800"
                        >
                          {post.category}
                        </Badge>
                      </motion.div>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <motion.h3
                      className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {post.title}
                    </motion.h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{post.readTime}</span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div> */}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredPost === post.id ? 1 : 0,
                        y: hoveredPost === post.id ? 0 : 20,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* <Button
                        className="w-full group/btn bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                        asChild
                      >
                        <Link href={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button> */}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
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
}
