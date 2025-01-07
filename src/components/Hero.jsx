import React from 'react'
import { CookieIcon, ShoppingCartIcon, ChefHatIcon } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-cookie-cream min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-script text-cookie-brown font-bold leading-tight">
              Sweet C's Cookie Creations
            </h1>
            <p className="text-cookie-choco text-xl leading-relaxed">
              Indulge in handcrafted, artisanal cookies that blend traditional recipes with innovative flavors. Every bite tells a story of passion and sweetness.
            </p>
            
            <div className="flex space-x-4">
              <button className="bg-cookie-caramel text-white px-6 py-3 rounded-full hover:bg-cookie-brown transition-colors flex items-center space-x-2">
                <ShoppingCartIcon className="w-5 h-5" />
                <span>Order Now</span>
              </button>
              <button className="border-2 border-cookie-brown text-cookie-brown px-6 py-3 rounded-full hover:bg-cookie-brown hover:text-white transition-colors flex items-center space-x-2">
                <ChefHatIcon className="w-5 h-5" />
                <span>Custom Orders</span>
              </button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-cookie-gold/20 rounded-full w-[500px] h-[500px] absolute -top-20 -right-20 blur-3xl"></div>
            <div className="relative z-20 flex justify-center">
              <div className="bg-white shadow-cookie-elegant p-8 rounded-3xl transform hover:scale-105 transition-transform">
                <CookieIcon className="w-64 h-64 text-cookie-caramel" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute inset-0 bg-cookie-pattern opacity-50 z-0"></div>
    </section>
  )
}

export default Hero
