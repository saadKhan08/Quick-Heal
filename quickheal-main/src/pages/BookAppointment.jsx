import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Check } from 'lucide-react';
import { useState } from 'react';

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", 
    "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = '* Full name is required';
    if (!formData.phone.trim()) tempErrors.phone = '* Phone number is required';
    if (!formData.email.trim()) {
      tempErrors.email = '* Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = '* Email is invalid';
    }
    if (!selectedDate) tempErrors.date = '* Please select a date';
    if (!selectedTime) tempErrors.time = '* Please select a time slot';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      notes: ''
    });
    setSelectedDate('');
    setSelectedTime('');
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowModal(true);
      // Reset form after successful submission
      setTimeout(() => {
        setShowModal(false);
        resetForm();
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen py-10 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
                <button
                  onClick={() => window.history.back()}
                  className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Back
                </button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-normal mb-3 sm:mb-4">Book Your Appointment</h1>
          <p className="text-gray-600 text-sm sm:text-base">Schedule a consultation with our experienced doctors</p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Personal Information */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
                  Personal Information <span className="text-red-500">*</span>
                </h3>
                
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 sm:w-5 h-4 sm:h-5" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name *"
                    className={`w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border ${
                      errors.fullName ? 'border-red-500' : 'border-gray-200'
                    } focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm sm:text-base`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 sm:w-5 h-4 sm:h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm sm:text-base"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 sm:w-5 h-4 sm:h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm sm:text-base"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Appointment Details</h3>
                
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 sm:w-5 h-4 sm:h-5" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm sm:text-base"
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {timeSlots.map((time) => (
                    <motion.button
                      key={time}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border text-sm sm:text-base ${
                        selectedTime === time 
                          ? 'bg-purple-500 text-white border-purple-500' 
                          : 'border-gray-200 hover:border-purple-500'
                      }`}
                    >
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mx-auto mb-1" />
                      {time}
                    </motion.button>
                  ))}
                </div>
                {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-4 sm:w-5 h-4 sm:h-5" />
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Additional Notes"
                    rows="4"
                    className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm sm:text-base"
                  ></textarea>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium hover:bg-gray-900 transition-colors text-sm sm:text-base"
              >
                Confirm Appointment
              </motion.button>
            </form>
          </motion.div>

          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">What to Expect</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-500 text-white flex items-center justify-center flex-shrink-0 mt-1 text-sm sm:text-base">1</div>
                  <p className="text-sm sm:text-base">Confirmation email with appointment details</p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-500 text-white flex items-center justify-center flex-shrink-0 mt-1 text-sm sm:text-base">2</div>
                  <p className="text-sm sm:text-base">Reminder notification 24 hours before appointment</p>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-500 text-white flex items-center justify-center flex-shrink-0 mt-1 text-sm sm:text-base">3</div>
                  <p className="text-sm sm:text-base">Video consultation link 15 minutes before appointment</p>
                </li>
              </ul>
            </div>

            <div className="bg-black text-white p-6 sm:p-8 rounded-xl sm:rounded-2xl">
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Need Help?</h3>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">Our support team is available 24/7 to assist you with your appointment booking.</p>
              <button className="bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors text-sm sm:text-base">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded-xl shadow-xl"
          >
            <div className="flex items-center gap-2 text-green-600">
              <Check className="w-6 h-6" />
              <h3 className="text-xl font-medium">Appointment Booked!</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Your appointment has been successfully scheduled. Check your email for confirmation.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;