import { motion } from 'framer-motion';
import { Brain, Heart, Bone, Shield, Activity } from 'lucide-react';

const services = [
  {
    icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Primary Care",
    description: "Comprehensive health management and preventive care."
  },
  {
    icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Cardiology",
    description: "Heart health and cardiovascular disease management."
  },
  {
    icon: <Bone className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Orthopedics",
    description: "Bone, joint, and muscle care, including surgeries and rehabilitation."
  },
  {
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Dermatology",
    description: "Skin, hair, and nail care, including treatments for skin conditions."
  },
  {
    icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Physical Therapy",
    description: "Rehabilitation and recovery through therapeutic exercises."
  }
];

const ServiceSection = () => {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            <span className="text-purple-600">Services</span>
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4"
          >
            What medical service<br />we offer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto"
          >
            These services represent a diverse range of medical specializations
            to cater to different health needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl hover:bg-gradient-to-b hover:from-purple-50 hover:to-transparent transition-all duration-300 relative overflow-hidden">
                {/* Animated border lines */}
                <div className="absolute inset-0">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    animate={{
                      x: [-100, 100],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.div 
                    className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"
                    animate={{
                      y: [-100, 100],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    animate={{
                      x: [100, -100],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.div 
                    className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"
                    animate={{
                      y: [100, -100],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>

                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors relative z-10">
                  <div className="text-purple-600">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-2xl font-medium mb-2 sm:mb-4 relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed relative z-10">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;