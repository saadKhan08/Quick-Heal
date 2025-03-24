import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Review1 from "../assets/doctor-with-his-arms-crossed-white-background_1368-5790.avif"
import Review2 from "../assets/doctor-home.jpg"
import Review3 from "../assets/doctor-with-his-arms-crossed-white-background_1368-5790.avif"
import PropTypes from 'prop-types';

const testimonials = [
  {
    id: 1,
    quote: "Provided exceptional care, diagnosing and treating my condition with compassion. I'm on the road to recovery.",
    name: "Austin Brown",
    title: "Heart Patient",
    image: Review1
  },
  {
    id: 2,
    quote: "The medical team went above and beyond expectations. Their expertise and dedication made all the difference in my treatment.",
    name: "Sarah Johnson",
    title: "Cancer Survivor",
    image: Review2
  },
  {
    id: 3,
    quote: "From diagnosis to recovery, the care I received was outstanding. The staff treated me like family throughout my journey.",
    name: "Michael Chen",
    title: "Rehabilitation Patient",
    image: Review3
  }
];




const TestimonialCard = memo(({ testimonial, variants, direction }) => (
  <motion.div
    key={testimonial.id}
    custom={direction}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }}
    className="bg-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm"
  >
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="mb-5 md:mb-0 md:mr-6 lg:mr-10 flex-shrink-0">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1">
        <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 italic mb-4 sm:mb-6">
          “{testimonial.quote}”
        </blockquote>
        <div className="flex flex-col">
          <span className="font-medium text-gray-900">{testimonial.name}</span>
          <span className="text-gray-500 text-xs sm:text-sm">{testimonial.title}</span>
        </div>
      </div>
    </div>
  </motion.div>
));

TestimonialCard.displayName = 'TestimonialCard';

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quote: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  variants: PropTypes.object.isRequired,
  direction: PropTypes.number.isRequired,
};

const NavigationButton = memo(({ onClick, direction, ariaLabel }) => (
  <motion.button 
    onClick={onClick}
    className="bg-black hover:bg-blue-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    aria-label={ariaLabel}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={direction === 'prev' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
    </svg>
  </motion.button>
));

NavigationButton.displayName = 'NavigationButton';

NavigationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  ariaLabel: PropTypes.string.isRequired
};
const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (current === testimonials.length - 1) {
        setDirection(-1);
      } else if (current === 0) {
        setDirection(1);
      }
      setCurrent(prevCurrent => 
        direction === 1 ? 
          (prevCurrent + 1) % testimonials.length : 
          (prevCurrent - 1 + testimonials.length) % testimonials.length
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, [current, direction]);

  const handleNext = useCallback(() => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
    setDirection(1);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrent((prevCurrent) => (prevCurrent - 1 + testimonials.length) % testimonials.length);
    setDirection(-1);
  }, []);

  const getAnimationDistance = useCallback(() => {
    if (width < 640) return 300;
    if (width < 1024) return 600;
    return 1000;
  }, [width]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? getAnimationDistance() : -getAnimationDistance(),
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -getAnimationDistance() : getAnimationDistance(),
      opacity: 0
    })
  };

  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 max-w-md mb-4 lg:mb-0">
            What People Are Saying About Our Services
          </h2>
          <div className="text-left lg:text-right mt-2 lg:mt-0">
            <p className="text-gray-500 text-xs sm:text-sm">Trustworthy reviews from our</p>
            <p className="text-gray-500 text-xs sm:text-sm">valued patients who have experienced</p>
            <p className="text-gray-500 text-xs sm:text-sm">first-hand our quality care</p>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <TestimonialCard 
              testimonial={testimonials[current]}
              variants={variants}
              direction={direction}
            />
          </AnimatePresence>
          
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 right-4 sm:right-6 md:right-8 lg:right-10 flex space-x-2">
            <NavigationButton onClick={handlePrev} direction="prev" ariaLabel="Previous testimonial" />
            <NavigationButton onClick={handleNext} direction="next" ariaLabel="Next testimonial" />
          </div>
        </div>
        
        <div className="flex justify-center mt-6 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`mx-1 w-2 h-2 rounded-full ${
                index === current ? "bg-yellow-400" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(TestimonialSection);