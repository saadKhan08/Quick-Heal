import { memo } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Activity } from 'lucide-react';
import {  Suspense } from 'react';
import PropTypes from 'prop-types';
import AboutImg from "../assets/img/pngtree-illustration-of-male-doctor-png-image_12460967.png"

// Lazy load the image

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "10K+",
    label: "Active Patients"
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "15+",
    label: "Years Experience"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: "24/7",
    label: "Medical Support"
  },
  {
    icon: <Activity className="w-6 h-6" />,
    value: "98%",
    label: "Positive Feedback"
  }
];

// Animation variants for reusability
const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

// Memoized StatCard component for better performance


const StatCard = memo(({ icon, value, label, delay }) => {
  StatCard.propTypes = {
    icon: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired
  };

  return (
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="text-center"
    >
      <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
        <div className="text-purple-600">
          {icon}
        </div>
      </div>
      <h3 className="text-3xl font-semibold mb-2">{value}</h3>
      <p className="text-gray-600 text-sm">{label}</p>
    </motion.div>
  );
});StatCard.displayName = 'StatCard';

const AboutSection = memo(() => {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            {...fadeInLeft}
            className="relative"
          >
            <div className="relative z-10">
              <Suspense fallback={<div className="w-full h-96 bg-gray-200 rounded-2xl animate-pulse" />}>
                <img 
                  src={AboutImg} 
                  alt="Medical Team" 
                  className="w-full rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </Suspense>
              {/* Floating Stats Card */}
              <motion.div
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-10 -right-10 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold">15+ Years</h4>
                    <p className="text-gray-600">Of Excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Background Decoration */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            {...fadeInRight}
            className="space-y-8"
          >
            <div>
              <motion.span 
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                transition={{ delay: 0.2 }}
                className="text-purple-600 font-medium"
              >
                About Us
              </motion.span>
              <motion.h2 
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                transition={{ delay: 0.3 }}
                className="text-4xl font-normal mt-2 mb-6"
              >
                Providing Quality Healthcare Solutions
              </motion.h2>
              <motion.p 
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                transition={{ delay: 0.4 }}
                className="text-gray-600 leading-relaxed"
              >
                We are committed to providing accessible, high-quality healthcare services
                to our community. Our team of experienced medical professionals ensures
                that you receive the best possible care with a personal touch.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              {stats.map((stat, index) => (
                <StatCard
                  key={`stat-${index}`}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  delay={0.2 * index}
                />
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white px-8 py-3 rounded-full inline-flex items-center gap-2 mt-8 transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label="Learn More"
            >
              Learn More
              <svg 
                className="w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;