import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AnimatedDot = memo(({ rowIndex, colIndex }) => (
  <motion.div
    key={colIndex}
    className="w-2 h-2 bg-white rounded-full m-4"
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: (rowIndex + colIndex) * 0.1,
    }}
  />
));

AnimatedDot.displayName = 'AnimatedDot';

AnimatedDot.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired
};
const DotRow = memo(({ rowIndex }) => (
  <motion.div
    key={rowIndex}
    className="flex justify-around"
    initial={{ y: 20, opacity: 0 }}
    animate={{ 
      y: 0, 
      opacity: 1,
      transition: { delay: rowIndex * 0.1 }
    }}
  >
    {[...Array(20)].map((_, colIndex) => (
      <AnimatedDot key={colIndex} rowIndex={rowIndex} colIndex={colIndex} />
    ))}
  </motion.div>
));

DotRow.displayName = 'DotRow';

DotRow.propTypes = {
  rowIndex: PropTypes.number.isRequired
};
const CTAButton = memo(() => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white text-purple-600 px-8 py-4 rounded-full inline-flex items-center gap-3 font-medium group"
  >
    Make a schedule
    <motion.div
      className="bg-purple-100 p-2 rounded-full"
      whileHover={{ x: 5 }}
    >
      <ArrowRight className="w-4 h-4" />
    </motion.div>
  </motion.button>
));

CTAButton.displayName = 'CTAButton';
const CTASection = () => {
  const animationProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700">
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, rowIndex) => (
          <DotRow key={rowIndex} rowIndex={rowIndex} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center text-white">
        <motion.h2
          {...animationProps}
          className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight"
        >
          Bring your customer services the next<br />
          level of excellence.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/book-appointment">
            <CTAButton />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(CTASection);