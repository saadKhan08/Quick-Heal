import { Link, useLocation } from 'react-router-dom'
import { User } from 'lucide-react'
import Logo from "../assets/logo/main-logo.png"

const Navbar = () => {
  const location = useLocation()

  const isActiveLink = (path) => {
    return location.pathname === path ? "text-purple-600" : "text-gray-800"
  }

  return (
    <div>
      {/* Navigation */}
      <nav className="px-4 sm:px-6 py-4 max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="h-12 sm:h-16 flex items-center">
            <img 
              src={Logo} 
              alt="QuickHeal Logo" 
              className="max-h-full object-contain" 
              style={{ maxWidth: '200px' }}
              loading="lazy"
            />
          </div>
        </Link>
    
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`${isActiveLink('/')} hover:text-purple-600 transition-colors`}>Home</Link>
          <Link to="/about" className={`${isActiveLink('/about')} hover:text-purple-600 transition-colors`}>About</Link>
          <Link to="/services" className={`${isActiveLink('/services')} hover:text-purple-600 transition-colors`}>Services</Link>
          <Link to="/blog" className={`${isActiveLink('/blog')} hover:text-purple-600 transition-colors`}>Blog</Link>
        </div>
    
        <div className="flex items-center gap-2 sm:gap-4">
          
          <Link to="/auth" className={`bg-black text-white px-3 sm:px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors text-sm sm:text-base ${location.pathname === '/contact' ? 'bg-purple-600' : ''}`}>
            Login
            <User className="w-4 h-4" />
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar