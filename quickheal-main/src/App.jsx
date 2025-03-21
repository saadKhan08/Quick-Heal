
import HeroSection from './components/HeroSection'
import DoctorProfile from './pages/DoctorProfile'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DoctorSection from './components/DoctorSection'
import ServiceSection from './components/ServiceSection'
import GoalsSection from './components/GoalsSection'
import HowItWorks from './components/HowItWorks'
import AboutSection from './components/AboutSection'
import BookAppointment from './pages/BookAppointment'

import ContactUs from './pages/ContactUs'
import CTASection from './components/CTASection'
import ReviewSection from './components/TestimonialSection'
import Footer from './components/Footer'
import FAQSection from './components/FAQSection'
import Blog from './components/Blog'
import TestimonialSection from './components/TestimonialSection'

// Create Home component that includes HeroSection
const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <DoctorSection />
      <ServiceSection />
      <GoalsSection />
      <AboutSection />
      <CTASection />
      <TestimonialSection />
      <Blog />
      <FAQSection />
      <ContactUs />
      <Footer />
      
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/faq" element={<FAQSection />} />
        <Route path="*" element={<Home />} />

        <Route path="/services" element={<ServiceSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/doctors" element={<DoctorSection />} />
        <Route path="/reviews" element={<ReviewSection />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/goals" element={<GoalsSection />} />


        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App