"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Users,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Calendar,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import image1 from "../public/bg_1.jpg";
import image2 from "../public/bg_1.jpg";
import image3 from "../public/bg_1.jpg";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const slides = [
  {
    id: 1,
    image: image1,
    title: "SUNNI YUVAJANA SAMGAM",
    subtitle: "Empowering Youth Through Unity",
    description:
      "Building a stronger community through education, charity, and social welfare",
  },
  {
    id: 2,
    image: image2,
    title: "CHARITY & RELIEF",
    subtitle: "Helping Those in Need",
    description: "Our commitment to social welfare and community support",
  },
  {
    id: 3,
    image: image3,
    title: "EDUCATION FIRST",
    subtitle: "Knowledge for All",
    description: "Promoting education and learning opportunities for everyone",
  },
];
const gallery = [
  { id: 1, image: "/gl-1.jpg" },
  { id: 2, image: "/gl-2.jpg" },
  { id: 3, image: "/gl-4.jpg" },
];
const team = [
  { name: "AP", logo: "/team-1.jpg" },
  { name: "AP", logo: "/team-1.jpg" },
  { name: "AP", logo: "/team-1.jpg" },
  { name: "AP", logo: "/team-1.jpg" },
  { name: "AP", logo: "/team-1.jpg" },
  { name: "AP", logo: "/team-1.jpg" },
  { name: "AP", logo: "/team-1.jpg" },
  { name: "AP", logo: "/team-1.jpg" },
  { name: "AP", logo: "/team-1.jpg" },
  { name: "AP", logo: "/team-1.jpg" },
  { name: "AP", logo: "/team-1.jpg" },
  { name: "AP", logo: "/team-1.jpg" },
];

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
    name: " Hassan Ahmed",
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
const services = [
  {
    icon: Heart,
    title: "Charity and Relief Activities",
    description:
      "Supporting communities through various charitable initiatives and relief programs",
  },
  {
    icon: Users,
    title: "Santhwanam Volunteers",
    description:
      "Dedicated volunteers working together for social welfare and community development",
  },
  {
    icon: BookOpen,
    title: "Sunni Voice and Read Press",
    description:
      "Publishing and media services to spread knowledge and awareness",
  },
];

const organizations = [
  { name: "Read Press", logo: "/readpress.png" },
  { name: "Santhwanam", logo: "/santhwanam.png" },
  {
    name: "Islamic Media Mission",
    logo: "/imm.png",
  },
  { name: "Sunni Voice", logo: "/sunnivoice.png" },
];
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
export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About SYS", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/Contact" },
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

      {/* Hero Slider */}
      <section className="relative h-[92vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.h2
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-6 text-blue-200"
            >
              {slides[currentSlide].subtitle}
            </motion.h2>
            <motion.p
              key={`description-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl mb-8"
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link rel="stylesheet" href="/about">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slider Controls */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <Button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Announcement Banner */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#DC3545] mt-4 w-5/6 mx-auto justify-evenly text-white py-8"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-semibold"
          >
            Ibana School Exam
          </motion.h3>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="group h-full transition-all duration-300 hover:bg-gradient-to-r from-blue-900/80 to-green-900/80 hover:shadow-xl">
                  <CardContent className="p-8 text-center text-black group-hover:text-white transition-colors duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <service.icon className="h-16 w-16 mx-auto text-gray-400 transition-colors duration-300 group-hover:text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 transition-colors duration-300 group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-white">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              >
                About Sunni Yuvajana Samgam
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 mb-6 leading-relaxed"
              >
                Since 1970, Sunni Yuvajana Samgam has been at the forefront of
                youth empowerment and community development. We believe in
                creating positive change through education, social welfare, and
                unity among diverse communities.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Our organization has touched thousands of lives through various
                initiatives including educational programs, charitable
                activities, and community outreach. We continue to work towards
                building a harmonious society based on justice, equality, and
                mutual respect.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/about">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Learn More About Us
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    Our Mission
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <Image
                    src="/hq720.jpg"
                    alt="SYS Community Work"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                  <Image
                    src="/sys-manava-sancharam2-400x225.jpg"
                    alt="SYS Education Programs"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 pt-8"
                >
                  <Image
                    src="/sys.jpg"
                    alt="SYS Youth Activities"
                    width={300}
                    height={150}
                    className="rounded-lg shadow-lg"
                  />
                  <Image
                    src="/bg_1.jpg"
                    alt="SYS Community Events"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>

              {/* Floating stats */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
              </motion.div> */}

              {/* <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">10K+</div>
                  <div className="text-sm text-gray-600">Lives Touched</div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>


      {/* gallery */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-8">
                Our Gallery
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Captured Moments
              </p>
            </div>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="group h-full transition-all duration-300 hover:bg-blue-100 hover:shadow-xl">
                  <CardContent className="p-8 text-center text-black group-hover:text-white transition-colors duration-300">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <Image
                        src={item.image}
                        alt={`Gallery image ${item.id}`}
                        width={400}
                        height={250}
                      />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Link rel="stylesheet  justify-center" href="/gallery">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 flex justify-center"
            >
              View More
            </Button>
          </Link>
        </div>
      </section>

      {/* //team// */}

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-8">
               Our Cabinet
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet Our Leaders
              </p>
            </div>
          </motion.h2>

          {/* Static 2-column grid for mobile, dynamic for larger screens */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.slice(0, 4).map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-0">
                    {/* Image */}
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
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {member.position}
                      </p>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-colors duration-500 rounded-lg"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link href="/team">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View More Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-16 bg-white overflow-hidden w-[60%] mx-auto flex flex-col items-center text-center ">
        <div className=" px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Our Organizations
          </motion.h2>

          {/* Auto-sliding Organizations Carousel - Desktop only */}
          <div className="relative hidden md:block overflow-hidden">
            <motion.div
              animate={{ x: [0, -100 * organizations.length] }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="flex space-x-4 "
              // style={{ width: `${organizations.length * 200}px` }}
            >
              {[...organizations, ...organizations].map((org, index) => (
                <motion.div
                  key={`${org.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * (index % organizations.length),
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center flex-shrink-0 w-48"
                >
                  <div className="bg-gray-100 rounded-lg p-4 mb-3 w-[180px] h-[180px] flex items-center justify-center hover:shadow-lg transition-all duration-300">
                    <img
                      src={org.logo}
                      alt={org.name}
                      width={160}
                      height={160}
                      className="object-contain w-[160px] h-[160px]"
                    />
                  </div>

                  <h4 className="font-semibold text-gray-800 text-sm">
                    {org.name}
                  </h4>
                </motion.div>
              ))}
            </motion.div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r  to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l  to-transparent z-10 pointer-events-none" />
          </div>

          {/* Static grid for mobile */}
          <div className="md:hidden grid grid-cols-2 gap-6 mt-8 ">
            {organizations.map((org, index) => (
              <motion.div
                key={`mobile-${org.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-gray-100 rounded-lg p-4 mb-3 w-full max-w-[180px] h-[180px] mx-auto flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                  <Image
                    src={org.logo}
                    alt={org.name}
                    width={100}
                    height={100}
                    className="object-contain w-[100px] h-[100px]"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  {org.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* blog////////// */}
      <section className="container mx-auto px-4 pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-8">
              Inspiring Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Inspired by Resilience
            </p>
          </div>
        </motion.h2>
        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.slice(0, 3).map((post, index) => (
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

                    {/* Optional: Add Read More button here if needed */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          <div className="text-center mt-16">
            <Link href="/blog">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View More
              </Button>
            </Link>
          </div>
        </motion.h2>
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
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-gray-400 text-sm">
                    SYS Pttambi Zone Youth Square - Vadee Hassan Pattambi
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-3 w-4" />
                  <span className="text-gray-400">
                    +919961292186 +919946410786 +919946693368
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-gray-400">syspattambi@gmail.com</span>
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
