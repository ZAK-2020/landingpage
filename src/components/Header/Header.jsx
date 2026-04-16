import { useState } from 'react'
import LogoImage from '../../assets/Logo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = ['How It Works', 'Our Work', 'Pricing', 'About Us']

  return (
    <header className="w-full bg-white border-b border-black/20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] h-[88px] flex items-center justify-between">

        {/* Logo */}
        <div className="w-36 h-8 flex-shrink-0">
          <img src={LogoImage} alt="Embrace logo" className="w-full h-full object-contain" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <p
              key={link}
              className="text-base font-medium text-black capitalize cursor-pointer hover:text-[#3461FF] transition-colors duration-200"
            >
              {link}
            </p>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <button className="hidden md:flex items-center px-6 py-4 bg-[#3461FF] rounded-full text-white text-base font-medium capitalize hover:bg-blue-700 transition-colors duration-200">
          Book A Call
        </button>

        {/* Hamburger Button (mobile) */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 min-h-[44px] min-w-[44px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="border-t border-black/10 px-6 py-5 flex flex-col gap-5 bg-white">
          {navLinks.map((link) => (
            <p
              key={link}
              className="text-base font-medium text-black capitalize cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </p>
          ))}
          <button className="flex items-center justify-center px-6 py-3 bg-[#3461FF] rounded-full text-white text-base font-medium capitalize mt-1">
            Book A Call
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
