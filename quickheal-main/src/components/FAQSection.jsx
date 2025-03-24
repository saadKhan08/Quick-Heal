import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState, memo, useCallback } from 'react';

const faqs = [
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment through our online booking system, mobile app, or by calling our reception. We offer both in-person and virtual consultations based on your preference."
  },
  {
    question: "What insurance plans do you accept?",
    answer: "We accept most major insurance plans and provide flexible payment options. Contact our billing department for specific information about your insurance coverage."
  },
  {
    question: "How do virtual consultations work?",
    answer: "Virtual consultations are conducted through our secure video platform. Once scheduled, you'll receive a link to join the video call with your doctor at the appointed time."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring your ID, insurance card, medical history, list of current medications, and any relevant medical records or test results from previous healthcare providers."
  },
];

import PropTypes from 'prop-types';

const FAQItem = memo(({ faq, index, isActive, onToggle }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-2xl shadow-sm"
  >
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onToggle}
      className="w-full px-6 py-5 flex items-center justify-between gap-4"
    >
      <span className="text-left font-medium">{faq.question}</span>
      <div className="flex-shrink-0">
        {isActive ? (
          <div className="bg-purple-100 p-2 rounded-full">
            <Minus className="w-4 h-4 text-purple-600" />
          </div>
        ) : (
          <div className="bg-gray-100 p-2 rounded-full">
            <Plus className="w-4 h-4 text-gray-600" />
          </div>
        )}
      </div>
    </motion.button>

    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-5 text-gray-600">
            {faq.answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
));

FAQItem.displayName = 'FAQItem';

FAQItem.propTypes = {
  faq: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = useCallback((index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }, [activeIndex]);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-medium">FAQ</span>
          <h2 className="text-4xl font-normal mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and healthcare procedures.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isActive={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FAQSection);