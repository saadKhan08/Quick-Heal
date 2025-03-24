import { memo } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Doc1 from '../assets/img/Dr.Arshi.png';
import Doc2 from '../assets/img/WhatsApp Image 2025-02-03 at 16.10.10_22525a78.jpg';
import Doc3 from '../assets/img/Dr.khalik.png';
import Doc4 from '../assets/img/onbording-screen-slider-img4.png';
import Doc5 from '../assets/img/onbording-screen-slider-img5.png';
import PropTypes from 'prop-types';

const doctors = [
  {
    id: 1,
    name: 'Arshi Khan',
    specialty: 'Strategic & Sergeant',
    image: Doc1,
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#',
      facebook: '#'
    }
  },
  {
    id: 2,
    name: 'Dr. Zubair',
    specialty: 'Physiotherapist',
    image: Doc2,
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#',
      facebook: '#'
    }
  },
  {
    id: 3,
    name: 'Abdul Khalik',
    specialty: 'Optommetrist',
    image: Doc3,
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#',
      facebook: '#'
    }
  },
  {
    id: 4,
    name: 'Kullok Dash',
    specialty: 'Strategic & finance',
    image: Doc4,
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#',
      facebook: '#'
    }
  },
  {
    id: 5,
    name: 'Kullok Dash',
    specialty: 'Strategic & finance',
    image: Doc5,
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#',
      facebook: '#'
    }
  }
];

const SocialIcon = memo(({ platform, link }) => {
  const icons = {
    linkedin: Linkedin,
    instagram: Instagram,
    twitter: Twitter,
    facebook: Facebook
  };
  const Icon = icons[platform];

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center cursor-pointer"
      onClick={() => window.open(link, '_blank')}
    >
      <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
    </motion.div>
  );
});

SocialIcon.displayName = 'SocialIcon';

SocialIcon.propTypes = {
  platform: PropTypes.oneOf(['linkedin', 'instagram', 'twitter', 'facebook']).isRequired,
  link: PropTypes.string.isRequired
};

const DoctorCard = memo(({ doctor }) => (
  <motion.div
    whileHover={{ y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="h-full"
  >
    <div className="bg-gray-50 rounded-3xl p-3 sm:p-4 h-full hover:bg-gradient-to-b from-purple-100 to-transparent transition-all duration-300">
      <Link to={`/doctor/${doctor.id}`} className="block">
        <div className="relative mb-3 sm:mb-4 rounded-2xl overflow-hidden">
          <img 
            src={doctor.image} 
            alt={doctor.name}
            className="w-full aspect-[4/5] object-cover"
            loading="lazy"
          />
        </div>
        <h3 className="text-lg sm:text-xl font-medium mb-1">{doctor.name}</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{doctor.specialty}</p>
      </Link>
      <div className="flex justify-center gap-2 sm:gap-3">
        {Object.entries(doctor.social).map(([platform, link]) => (
          <SocialIcon key={platform} platform={platform} link={link} />
        ))}
      </div>
    </div>
  </motion.div>
));

DoctorCard.displayName = 'DoctorCard';

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    social: PropTypes.objectOf(PropTypes.string).isRequired
  }).isRequired
};

const DoctorSection = memo(() => {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">Let&apos;s meet with expert doctors</h2>
          <p className="text-gray-600">We aim to share information about our team</p>
        </motion.div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="doctor-swiper px-2"
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <DoctorCard doctor={doctor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
});

DoctorSection.displayName = 'DoctorSection';

export default DoctorSection;