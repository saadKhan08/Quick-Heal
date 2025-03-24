import { memo } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo/main-logo.png";
import PropTypes from 'prop-types';

const socialIcons = [
  { Icon: Facebook, url: '#' },
  { Icon: Twitter, url: '#' },
  { Icon: Linkedin, url: '#' },
  { Icon: Instagram, url: '#' }
];

const quickLinks = ['Home', 'About Us', 'Services', 'Doctors', 'Contact'];
const services = ['Primary Care', 'Emergency Care', 'Surgery', 'Pharmacy', 'Laboratory'];

const SocialIcon = memo(({ Icon, url }) => (
  <motion.a
    href={url}
    whileHover={{ y: -3 }}
    className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
  >
    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
  </motion.a>
));

SocialIcon.displayName = 'SocialIcon';

SocialIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  url: PropTypes.string.isRequired
};
const NavLink = memo(({ to, children }) => (
  <motion.li whileHover={{ x: 5 }}>
    <Link to={to} className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
      {children}
    </Link>
  </motion.li>
));

NavLink.displayName = 'NavLink';

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2 sm:space-y-6"
          >
            <div className="flex items-center gap-2">
              <img 
                src={Logo} 
                alt="QuickHeal Logo" 
                className="max-h-full object-contain" 
                style={{ maxWidth: '200px' }}
                loading="lazy"
              />
            </div>
            <p className="text-gray-300 text-sm sm:text-base max-w-xs">
              Providing quality healthcare services and ensuring your well-being is our top priority.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialIcons.map((item, index) => (
                <SocialIcon key={index} {...item} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-0"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((item, index) => (
                <NavLink key={index} to="/">{item}</NavLink>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 sm:mt-0"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-3 sm:space-y-4">
              {services.map((item, index) => (
                <NavLink key={index} to="/">{item}</NavLink>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 sm:mt-0"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
                <address className="text-sm sm:text-base text-gray-300 not-italic">
                  1323 Chandni Chowk, Delhi 110006
                </address>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
                <a href="tel:+918383854967" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  +91 (838) 385-4967
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
                <a href="mailto:contact@medicare.com" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  contact@medicare.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-left">
            © {new Date().getFullYear()} QuickHeal. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="bg-white/10 p-2 sm:p-3 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default memo(Footer);