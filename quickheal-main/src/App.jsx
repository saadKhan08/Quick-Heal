import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Lazy load components
const HeroSection = lazy(() => import('./components/HeroSection'))
const DoctorSection = lazy(() => import('./components/DoctorSection'))
const ServiceSection = lazy(() => import('./components/ServiceSection'))
const GoalsSection = lazy(() => import('./components/GoalsSection'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const AboutSection = lazy(() => import('./components/AboutSection'))
const CTASection = lazy(() => import('./components/CTASection'))
const TestimonialSection = lazy(() => import('./components/TestimonialSection'))
const Blog = lazy(() => import('./components/Blog'))
const FAQSection = lazy(() => import('./components/FAQSection'))
const Footer = lazy(() => import('./components/Footer'))
const DoctorProfile = lazy(() => import('./pages/DoctorProfile'))
const BookAppointment = lazy(() => import('./pages/BookAppointment'))
const ContactUs = lazy(() => import('./pages/ContactUs'))

// Loading component
const LoadingSpinner = () => <div>Loading...</div>

const Home = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
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
    </Suspense>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/services" element={<ServiceSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/doctors" element={<DoctorSection />} />
          <Route path="/reviews" element={<TestimonialSection />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/goals" element={<GoalsSection />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App