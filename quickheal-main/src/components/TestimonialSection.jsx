import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Review1 from "../assets/doctor-with-his-arms-crossed-white-background_1368-5790.avif"
import Review2 from "../assets/doctor-home.jpg"
import Review3 from "../assets/doctor-with-his-arms-crossed-white-background_1368-5790.avif"

const TestimonialSection = () => {
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

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [width, setWidth] = useState(0);

  // Get the window width on mount and when it changes
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    // Set width on initial load
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
  }, [current, testimonials.length, direction]);

  const handleNext = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
    setDirection(1);
  };

  const handlePrev = () => {
    setCurrent((prevCurrent) => (prevCurrent - 1 + testimonials.length) % testimonials.length);
    setDirection(-1);
  };

  // Adjust animation distance based on screen size
  const getAnimationDistance = () => {
    if (width < 640) return 300;
    if (width < 1024) return 600;
    return 1000;
  };

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
    <div className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Responsive header section */}
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
        
        {/* Testimonial card with responsive padding and layout */}
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
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
                {/* Responsive image sizing */}
                <div className="mb-5 md:mb-0 md:mr-6 lg:mr-10 flex-shrink-0">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name} 
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover"
                  />
                </div>
                
                {/* Testimonial content with responsive typography */}
                <div className="flex-1">
                  <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 italic mb-4 sm:mb-6">
                    &quot;{testimonials[current].quote}&quot;
                  </blockquote>
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">{testimonials[current].name}</span>
                    <span className="text-gray-500 text-xs sm:text-sm">{testimonials[current].title}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Responsive navigation buttons */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 right-4 sm:right-6 md:right-8 lg:right-10 flex space-x-2">
            <motion.button 
              onClick={handlePrev}
              className="bg-black hover:bg-blue-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button 
              onClick={handleNext}
              className="bg-black hover:bg-blue-500  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
        
        {/* Optional: Indicator dots for mobile */}
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
    </div>
  );
};

export default TestimonialSection;