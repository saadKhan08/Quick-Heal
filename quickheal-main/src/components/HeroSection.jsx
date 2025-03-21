import { motion } from "framer-motion";
import {
  Phone,
  Video,
  Mic,
  ArrowUpRight,
  Calendar,
  Linkedin,
  Instagram,
  X,
} from "lucide-react";
import HomeImg from "../assets/home-img/male-doctor.jpg";
import HomeImg2 from "../assets/doctor-hero.png";
import HomeBg from "../assets/home-img/6A4Gc4xE7koOyVvBo1V2xt94aso.mp4";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="relative px-3 sm:px-6 py-4 sm:py-12 min-h-[calc(100vh-80px)]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src={HomeBg} type="video/mp4" />
        </video>
        <div className="max-w-7xl mx-auto h-full flex items-center">
          <motion.div
            className="bg-gradient-to-r from-purple-100/90 to-green-100/90 rounded-xl sm:rounded-3xl p-4 sm:p-8 md:p-12 relative overflow-hidden w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            layout
          >
            <div className="absolute top-2 sm:top-6 right-2 sm:right-6 flex gap-1.5 sm:gap-2 z-10">
              <button className="p-1 sm:p-2 bg-black rounded-full hover:bg-gray-800 transition-colors">
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </button>
              <button className="p-1 sm:p-2 bg-black rounded-full hover:bg-gray-800 transition-colors">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </button>
              <button className="p-1 sm:p-2 bg-black rounded-full hover:bg-gray-800 transition-colors">
                <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white rounded-full px-2.5 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                  <span className="text-purple-600 font-medium">Trusted</span>
                  <span className="text-gray-600 text-[10px] sm:text-sm">
                    Best Medical Service in 1 place
                  </span>
                </div>

                <h1 className="text-2xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight">
                  Personalized
                  <br />
                  Medical Services
                  <br />
                  for Better Health
                </h1>

                <Link to="/book-appointment" className="inline-block">
                  <button
                    onClick={() => window.scrollTo(0, 0)}
                    className="bg-black text-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3.5 flex items-center gap-2 sm:gap-3 hover:bg-gray-800 transition-colors text-sm sm:text-base"
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    Schedule an appointment
                  </button>
                </Link>

                {/* Patient and Test Sections Container */}
                <div className="flex flex-wrap gap-4">
                  {/* Patient Image Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-16 sm:w-20 h-16 sm:h-20"
                    >
                      <img
                        src={HomeImg}
                        alt="Patient"
                        className="w-full h-full rounded-xl sm:rounded-2xl object-cover"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Mitochondrial Test Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg"
                  >
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base font-medium mb-1.5 sm:mb-2">
                        Mitochondrial Test
                      </h3>
                      <div className="space-y-1 sm:space-y-1.5">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ width: "0%" }}
                            animate={{ width: `${Math.random() * 100}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-1 bg-purple-100 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Our Specialists Doctor Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg w-[253px] sm:w-[301px] flex-grow-0"
                  >
                    <div className="flex items-center justify-between gap-2 sm:gap-3">
                      <div className="flex -space-x-2 sm:-space-x-3 overflow-hidden">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          className="inline-block size-8 sm:size-10 rounded-full ring-2 ring-white"
                        />
                        <img
                          alt=""
                          loading="lazy"
                          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          className="inline-block size-8 sm:size-10 rounded-full ring-2 ring-white"
                        />
                        <img
                          alt=""
                          loading="lazy"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                          className="inline-block size-8 sm:size-10 rounded-full ring-2 ring-white"
                        />
                      </div>
                      <span className="text-sm sm:text-base font-medium">Our Specialists Doctor</span>
                    </div>
                  </motion.div>                
                  </div>
              </div>

              <div className="relative mt-4 sm:mt-0">
                <img
                  src={HomeImg2}
                  alt="Doctor"
                  loading="lazy"
                  className="w-full h-[300px] sm:h-[600px] rounded-xl sm:rounded-2xl object-cover object-center shadow-xl"
                />

                <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-transparent backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={HomeImg}
                        alt="Caller"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm text-gray-600">
                        Calling .......
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center"
                    >
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                    </motion.button>
                  </div>
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 sm:p-3 rounded-full bg-gray-100"
                    >
                      <Video className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 sm:p-3 rounded-full bg-red-500 text-white"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 sm:p-3 rounded-full bg-gray-100"
                    >
                      <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
