"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link"; // ✅ Proper Link import from Next.js

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

const PrivacyPolicy = () => {
  const currentYear=new Date().getFullYear();
  const sections = [
    {
      title: "Privacy Policy for Samastha Kerala Sunni Yuvajana Samgam",
      content: `At SYS Online, accessible from sysonline.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SYS Online and how we use it.

If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.

This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in SYS Online. This policy is not applicable to any information collected offline or via channels other than this website.`,
    },
    {
      title: "Consent",
      content: `By using our website, you hereby consent to our Privacy Policy and agree to its terms.`,
    },
    {
      title: "Information we collect",
      content: `The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.`,
    },
    {
      title: "How we use your information",
      content: `We use the information we collect in various ways, including to:

Provide, operate, and maintain our webste
Improve, personalize, and expand our webste
Understand and analyze how you use our webste
Develop new products, services, features, and functionality
Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes
Send you emails
Find and prevent fraud`,
    },
    {
      title: "Log Files",
      content: `SYS Online follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.`,
    },
    {
      title: "Advertising Partners Privacy Policies",
      content: `You may consult this list to find the Privacy Policy for each of the advertising partners of SYS Online.

Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on SYS Online, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.

Note that SYS Online has no access to or control over these cookies that are used by third-party advertisers.`,
    },
    {
      title: "Third Party Privacy Policies",
      content: `SYS Online's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.

You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.

`,
    },
    {
      title: "CCPA Privacy Rights (Do Not Sell My Personal Information)",
      content: `Under the CCPA, among other rights, California consumers have the right to:

Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.

Request that a business delete any personal data about the consumer that a business has collected.

Request that a business that sells a consumer's personal data, not sell the consumer's personal data.

If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.`,
    },
    {
      title: "GDPR Data Protection Rights",
      content: `We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:

The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.

The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.

The right to erasure – You have the right to request that we erase your personal data, under certain conditions.

The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.

The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.

The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.

If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.

`,
    },
    {
      title: "Children’s Information",
      content: `Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

SYS Online does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.`,
    },
  ];

  return (
    <div>
      {/* ✅ Header/Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white shadow-lg sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-around">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <div className="flex flex-col items-center">
              <Link href={"/"}>
                  
                  <img
                src="/logo-text.png"
                alt="SYS Logo"
                className="w-64 h-12 mb-2"
              />
                  </Link>
              </div>
            </motion.div>

            <nav className="hidden md:flex space-x-10">
              {["Home", "About SYS", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : item === "About SYS"
                        ? "/about"
                        : "/Contact"
                    }
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-bold"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
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

export default PrivacyPolicy;
