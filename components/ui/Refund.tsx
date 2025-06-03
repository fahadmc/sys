"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const Refund = () => {
   const currentYear=new Date().getFullYear();
        const [isMenuOpen, setIsMenuOpen] = useState(false);
           const navLinks = [
             { name: "Home", href: "/" },
             { name: "About SYS", href: "/about" },
             { name: "Contact", href: "/Contact" },
           ];
  const sections = [
    {
      title: "Return and Refund Policy",
      content: `Last updated: October 10, 2020

Thank you for shopping at SYS Online.

The following terms are applicable for any products that You purchased with Us.`,
    },
    {
      title: "Interpretation and Definitions",
      content: `The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.`,
    },
    {
      title: "Definitions",
      content: `For the purposes of this Return and Refund Policy:

Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Samastha Kerala Sunni Yujavaja Sangam, Samastha Building, Francis Rd, Kozhikode, Kerala 673003.

Goods refer to the items offered for sale on the Service.

Orders mean a request by You to purchase Goods from Us.

Service refers to the Website.

Website refers to SYS Online, accessible from sysonline.in

You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.`,
    },
    {
      title: "Your Order Cancellation Rights",
      content: `You are entitled to cancel Your Order within 7 days without giving any reason for doing so.

The deadline for cancelling an Order is 7 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.

In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:

By email: statesys@gmail.com
We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.`,
    },
    {
      title: "Conditions for Returns",
      content: `In order for the Goods to be eligible for a return, please make sure that:

The Goods were purchased in the last 7 days
The Goods are in the original packaging
The following Goods cannot be returned:

The supply of Goods made to Your specifications or clearly personalized.
The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.
The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.
The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.
We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.`,
    },
    {
      title: "Returning Goods",
      content: `You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:

Samastha Building, Francis Rd, Kozhikode, Kerala 673003

We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.`,
    },
    {
      title: "Gifts",
      content: `If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.

If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.`,
    },
    {
      title: "Contact Us",
      content: `If you have any questions about our Returns and Refunds Policy, please contact us:

By email: statesys@gmail.com`,
    },
    
  ];

  return (
    <div>
      {/* ✅ Header/Navbar */}
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
              <Link href="/">
                <img
                  src="/logo-text.png"
                  alt="SYS Logo"
                  className="w-64 h-12 mb-2"
                />
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
      {/* ✅ Privacy Policy Section */}
      <section className="bg-white px-4 md:px-16 py-16 text-gray-800">
        <div className="max-w-4xl mx-auto">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {sec.title}
              </h2>
              <p className="text-base leading-relaxed">{sec.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Footer */}
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
    </div>
  );
};

export default Refund;
