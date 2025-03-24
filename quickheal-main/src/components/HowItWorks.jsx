import { memo } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, VideoIcon, ClipboardCheck, MessageSquare } from 'lucide-react';
import PropTypes from 'prop-types';

const steps = [
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: "Book Appointment",
    description: "Choose your preferred doctor and select a convenient time slot for consultation.",
    color: "bg-blue-50",
    iconColor: "text-blue-500"
  },
  {
    icon: <VideoIcon className="w-8 h-8" />,
    title: "Video Consultation",
    description: "Connect with your doctor through our secure video platform for your appointment.",
    color: "bg-purple-50",
    iconColor: "text-purple-500"
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Get Prescription",
    description: "Receive your digital prescription and treatment plan right after consultation.",
    color: "bg-green-50",
    iconColor: "text-green-500"
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Follow-up Care",
    description: "Access follow-up support and chat with your doctor for any concerns.",
    color: "bg-rose-50",
    iconColor: "text-rose-500"
  }
];



const StepCard = memo(({ step, index, totalSteps }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative"
  >
    {index < totalSteps - 1 && (
      <div className="hidden lg:block absolute top-1/4 left-full w-full h-px bg-gray-200 -translate-y-1/2 z-0" />
    )}
    <motion.div
      whileHover={{ y: -5 }}
      className={`${step.color} rounded-2xl p-4 md:p-6 relative z-10`}
    >
      <div className={`${step.iconColor} mb-3 md:mb-4`}>
        {step.icon}
      </div>
      <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3">{step.title}</h3>
      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
        {step.description}
      </p>
      <div className="absolute top-2 md:top-4 right-2 md:right-4 text-3xl md:text-4xl font-light text-gray-200">
        {index + 1}
      </div>
    </motion.div>
  </motion.div>
));

StepCard.displayName = 'StepCard';

StepCard.propTypes = {
  step: PropTypes.shape({
    color: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired
};

const HowItWorks = () => {
  const headerAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...headerAnimation}
          className="text-center mb-16"
        >
          <span className="text-sm text-gray-500 uppercase tracking-wider">Process</span>
          <h2 className="text-4xl font-normal mt-4 mb-6">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get the care you need in four simple steps. Our streamlined process ensures 
            a seamless healthcare experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step}
              index={index}
              totalSteps={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(HowItWorks);