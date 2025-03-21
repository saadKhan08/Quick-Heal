import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: ["+91 8383854967", "+91 8383854967"],
    color: "bg-blue-50",
    iconColor: "text-blue-500"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: ["support@medicare.com", "info@medicare.com"],
    color: "bg-purple-50",
    iconColor: "text-purple-500"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    details: ["Chandni Chowk", "Delhi, India 11006"],
    color: "bg-rose-50",
    iconColor: "text-rose-500"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 - 18:00", "Sat: 9:00 - 14:00"],
    color: "bg-green-50",
    iconColor: "text-green-500"
  }
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    // For now, we'll just simulate a submission
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-2 sm:mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Have questions about our services? We&apos;re here to help. Contact us through any of the following channels.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${info.color} p-4 sm:p-6 rounded-xl sm:rounded-2xl`}
            >
              <div className={`${info.iconColor} mb-3 sm:mb-4`}>
                {info.icon}
              </div>
              <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-xs sm:text-sm">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg"
          >
            <h2 className="text-xl sm:text-2xl font-normal mb-4 sm:mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="space-y-1 sm:space-y-2"
                >
                  <label className="text-xs sm:text-sm text-gray-600">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm sm:text-base"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="space-y-1 sm:space-y-2"
                >
                  <label className="text-xs sm:text-sm text-gray-600">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm sm:text-base"
                  />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ y: -2 }}
                className="space-y-1 sm:space-y-2"
              >
                <label className="text-xs sm:text-sm text-gray-600">Subject <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm sm:text-base"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="space-y-1 sm:space-y-2"
              >
                <label className="text-xs sm:text-sm text-gray-600">Message <span className="text-red-500">*</span></label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none text-sm sm:text-base"
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
                className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-colors flex items-center justify-center gap-2 ${
                  isSubmitted 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-black hover:bg-gray-900'
                } text-white`}
              >
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      Message Sent!
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5726827498635!2d77.21685731507721!3d28.52813198246139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f4a6cad689%3A0x9c505656b67c6c39!2sAIIMS%20Delhi!5e0!3m2!1sen!2sin!4v1645645098948!5m2!1sen!2sin"
              className="w-full h-full rounded-xl sm:rounded-2xl"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg flex items-center gap-1.5 sm:gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
              <span className="text-xs sm:text-sm font-medium">AIIMS, New Delhi, India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;