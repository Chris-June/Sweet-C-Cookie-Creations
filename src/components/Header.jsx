import React, { useState } from 'react'
import { CookieIcon, ShoppingCartIcon, MenuIcon, XIcon } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-cookie-cream shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <CookieIcon className="text-cookie-brown w-10 h-10" />
          <h1 className="text-2xl font-script text-cookie-brown font-bold">
            Sweet C's Cookie Creations
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-cookie-choco hover:text-cookie-caramel transition-colors">Home</a>
          <a href="#menu" className="text-cookie-choco hover:text-cookie-caramel transition-colors">Menu</a>
          <a href="#about" className="text-cookie-choco hover:text-cookie-caramel transition-colors">About</a>
          <a href="#contact" className="text-cookie-choco hover:text-cookie-caramel transition-colors">Contact</a>
          <ShoppingCartIcon className="text-cookie-brown w-6 h-6 hover:text-cookie-caramel cursor-pointer" />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-cookie-brown">
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-cookie-cream shadow-lg">
            <nav className="flex flex-col items-center py-4 space-y-4">
              <a href="#home" className="text-cookie-choco hover:text-cookie-caramel">Home</a>
              <a href="#menu" className="text-cookie-choco hover:text-cookie-caramel">Menu</a>
              <a href="#about" className="text-cookie-choco hover:text-cookie-caramel">About</a>
              <a href="#contact" className="text-cookie-choco hover:text-cookie-caramel">Contact</a>
              <ShoppingCartIcon className="text-cookie-brown w-6 h-6 hover:text-cookie-caramel" />
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
