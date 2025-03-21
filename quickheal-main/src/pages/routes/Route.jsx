

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import Dashboard from '../Dashboard';
import Profile from '../Profile';
import Appointments from '../Appointments';
import PrivateRoute from './PrivateRoute';
import DoctorProfile from '../DoctorProfile';
import AboutSection from '../../components/AboutSection';
import ServiceSection from '../../components/ServiceSection';
import ContactUs from '../ContactUs';
import FAQSection from '../../components/FAQSection';
import Blog from '../../components/Blog';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/appointments"
          element={
            <PrivateRoute>
              <Appointments />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        
                <Route path="/about" element={<AboutSection />} />
                <Route path="/services" element={<ServiceSection />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/doctors" element={<DoctorProfile />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<FAQSection />} />
        
      </Routes>

    </Router>
  );
};

export default AppRoutes;
