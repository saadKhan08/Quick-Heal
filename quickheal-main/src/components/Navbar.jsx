import { Link, useLocation } from 'react-router-dom'
import { User } from 'lucide-react'
import { memo } from 'react'
import Logo from "../assets/logo/main-logo.png"

const Navbar = memo(() => {
  const location = useLocation()

  const isActiveLink = (path) => {
    return location.pathname === path ? "text-purple-600" : "text-gray-800"
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' }
  ]

  return (
    <header className="sticky top-0 bg-white z-50">
      <nav className="px-4 sm:px-6 py-4 max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="h-12 sm:h-16 flex items-center">
            <img 
              src={Logo} 
              alt="QuickHeal Logo" 
              className="max-h-full object-contain w-auto" 
              width="200"
              height="64"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Link>
    
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ path, label }) => (
            <Link 
              key={path}
              to={path} 
              className={`${isActiveLink(path)} hover:text-purple-600 transition-colors duration-200`}
            >
              {label}
            </Link>
          ))}
        </div>
    
        <div className="flex items-center gap-2 sm:gap-4">
          <Link 
            to="/auth" 
            className={`bg-black text-white px-3 sm:px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base ${location.pathname === '/contact' ? 'bg-purple-600' : ''}`}
          >
            <span>Login</span>
            <User className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  )
})

Navbar.displayName = 'Navbar'

export default Navbar