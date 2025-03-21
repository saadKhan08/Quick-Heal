import { motion } from 'framer-motion';
import { Calendar, Star, Clock, GraduationCap, Stethoscope, ArrowLeft } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import Doc1 from '../assets/img/WhatsApp Image 2025-02-03 at 16.10.11_a2b9cd3f.jpg';
import Doc2 from '../assets/img/WhatsApp Image 2025-02-03 at 16.10.10_22525a78.jpg';
import Doc3 from '../assets/img/WhatsApp Image 2025-02-03 at 16.10.12_694d2431.jpg';
import Doc4 from '../assets/img/onbording-screen-slider-img4.png';
import Doc5 from '../assets/img/onbording-screen-slider-img5.png';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // In a real app, fetch doctor data based on id
  const doctor = {
    id: 1,
    name: 'Dr. Kullok Dash',
    specialty: ' finance',
    image: Doc1,
    experience: '15+ Years',
    education: [
      'MBBS - Harvard Medical School',
      'MD - Johns Hopkins University'
    ],
    specializations: [
      'General Medicine',
      'Cardiology',
      'Internal Medicine'
    ],
    rating: 4.9,
    reviews: 128,
    price: 499,
    availability: 'Mon - Fri, 11:00 AM - 5:00 PM'
  };  
  


  // Simulated doctor data - in a real app this would come from an API
  const doctors = [
    {
      id: 1,
      name: 'Dr. Arshi Khan',
      specialty: 'Strategic & finance',
      image: Doc1,
      experience: '15+ Years',
      education: [
        'MBBS - Harvard Medical School',
        'MD - Johns Hopkins University'
      ],
      specializations: [
        'General Medicine',
        'Cardiology',
        'Internal Medicine'
      ],
      rating: 4.9,
      reviews: 128,
      price: 499,
      availability: 'Mon - Fri, 11:00 AM - 5:00 PM'
    },
    {
      id: 2,
      name: 'Dr. Zubair ',
      specialty: 'Physiotherapist',
      image: Doc2, 
      experience: '10+ Years',
      education: [
        'Teerthanker Mahaveer University(TMU)',
        'Moradabad, Uttar Pradesh'
      ],
      specializations: [
        'Pediatric Care',
        'Child Development',
        'Pediatric Emergency'
      ],
      rating: 4.8,
      reviews: 95,
      price: 499,
      availability: 'Mon - Fri, 11:00 AM - 5:00 PM'
    },
    {
      id: 3,
      name: 'Dr. Abdul Khalik ',
      specialty: 'Optomestics',
      image: Doc3, 
      experience: '4+ Years',
      education: [
        'Teerthanker Mahaveer University(TMU)',
        'Moradabad, Uttar Pradesh'
      ],
      specializations: [
        'Pediatric Care',
        'Child Development',
        'Pediatric Emergency'
      ],
      rating: 4.8,
      reviews: 95,
      price: 299,
      availability: 'Mon - Fri, 11:00 AM - 5:00 PM'
    },
    {
      id: 4,
      name: 'Dr. Zubair ',
      specialty: 'Physiotherapist',
      image: Doc4, 
      experience: '10+ Years',
      education: [
        'MBBS - Stanford Medical School',
        'MD - Yale University'
      ],
      specializations: [
        'Pediatric Care',
        'Child Development',
        'Pediatric Emergency'
      ],
      rating: 4.8,
      reviews: 95,
      price: 499,
      availability: 'Mon - Fri, 11:00 AM - 5:00 PM'
    },
    {
      id: 5,
      name: 'Dr. Zubair ',
      specialty: 'Physiotherapist',
      image: Doc5, 
      experience: '10+ Years',
      education: [
        'MBBS - Stanford Medical School',
        'MD - Yale University'
      ],
      specializations: [
        'Pediatric Care',
        'Child Development',
        'Pediatric Emergency'
      ],
      rating: 4.8,
      reviews: 95,
      price: 499,
      availability: 'Mon - Fri, 11:00 AM - 5:00 PM'
    }
  ];

  // Find doctor by id from URL params
  const selectedDoctor = doctors.find(doc => doc.id === parseInt(id)) || doctor;
  return (
    
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-4 text-gray-600 hover:text-gray-900"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img 
                src={selectedDoctor.image} 
                alt={selectedDoctor.name}
                className="w-48 h-48 rounded-2xl object-cover"
              />
              <div>
                <h1 className="text-3xl font-medium mb-2">{selectedDoctor.name}</h1>
                <p className="text-gray-600 mb-4">{selectedDoctor.specialty}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{selectedDoctor.rating}</span>
                  <span className="text-gray-500">({selectedDoctor.reviews} reviews)</span> 
                </div>
              </div>
            </div>
            <div className="mt- text-right">
              <span className="text-lg font-semibold text-purple-600">INR: {selectedDoctor.price}/-</span>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Experience */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <h3 className="font-medium">Experience</h3>
                </div>
                <p>{selectedDoctor.experience}</p>
              </div>

              {/* Availability */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <h3 className="font-medium">Availability</h3>
                </div>
                <p>{selectedDoctor.availability}</p>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                  <h3 className="font-medium">Education</h3>
                </div>
                <ul className="space-y-2">
                  {selectedDoctor.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>

              {/* Specializations */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Stethoscope className="w-5 h-5 text-purple-600" />
                  <h3 className="font-medium">Specializations</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedDoctor.specializations.map((spec, index) => (
                    <span 
                      key={index}
                      className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Book Appointment Button */}
            <a href="/book-appointment">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full mt-8 bg-black text-white rounded-full py-4 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default DoctorProfile;