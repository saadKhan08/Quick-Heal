import { motion } from 'framer-motion';
import { User, Check } from 'lucide-react';
import { useState, useCallback, useMemo } from 'react';

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

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const validateForm = useCallback(() => {
    const tempErrors = {};
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
  }, [formData, selectedDate, selectedTime]);

  const resetForm = useCallback(() => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      notes: ''
    });
    setSelectedDate('');
    setSelectedTime('');
    setErrors({});
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        resetForm();
      }, 3000);
    }
  }, [validateForm, resetForm]);

  const BackButton = useMemo(() => (
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
  ), []);

  const FormFields = useMemo(() => (
    <div className="space-y-3 sm:space-y-4">
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
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
      </div>
    </div>
  ), [formData, errors, handleInputChange]);

  return (
    <div className="min-h-screen py-10 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {BackButton}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-normal mb-3 sm:mb-4">Book Your Appointment</h1>
          <p className="text-gray-600 text-sm sm:text-base">Schedule a consultation with our experienced doctors</p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {FormFields}
            </form>
          </motion.div>
        </div>
      </div>

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