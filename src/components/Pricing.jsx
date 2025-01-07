import React from 'react'
import { CookieIcon, StarIcon } from 'lucide-react'

const PricingCard = ({ name, ingredients, price, isSpecial }) => (
  <div className={`
    bg-white rounded-2xl p-6 shadow-cookie-elegant relative overflow-hidden
    transform transition-all hover:scale-105
    ${isSpecial ? 'border-2 border-cookie-gold/50' : ''}
  `}>
    {isSpecial && (
      <div className="absolute top-2 right-2 flex items-center text-cookie-gold">
        <StarIcon className="w-5 h-5 mr-1" />
        <span className="text-sm font-bold">Chef's Special</span>
      </div>
    )}
    <div className="flex justify-between items-center mb-4">
      <CookieIcon className="w-10 h-10 text-cookie-caramel" />
      <span className="text-2xl font-bold text-cookie-choco">${price.toFixed(2)}</span>
    </div>
    <h3 className="text-xl font-bold text-cookie-brown mb-2">{name}</h3>
    <p className="text-cookie-choco/80 mb-4">{ingredients}</p>
    <button className="w-full bg-cookie-caramel text-white py-2 rounded-full hover:bg-cookie-brown transition-colors">
      Add to Cart
    </button>
  </div>
)

const Pricing = () => {
  const cookieMenu = [
    {
      name: 'Classic Chocolate Chip',
      ingredients: 'Butter, flour, chocolate chips, vanilla extract',
      price: 3.50,
      isSpecial: false
    },
    {
      name: 'Salted Caramel Dream',
      ingredients: 'Brown sugar, caramel chunks, sea salt, premium butter',
      price: 4.25,
      isSpecial: true
    },
    {
      name: 'Lavender Honey Shortbread',
      ingredients: 'Organic lavender, local honey, European butter',
      price: 4.00,
      isSpecial: false
    },
    {
      name: 'Double Chocolate Decadence',
      ingredients: 'Dark chocolate, cocoa powder, chocolate ganache',
      price: 4.50,
      isSpecial: true
    },
    {
      name: 'Maple Pecan Crunch',
      ingredients: 'Maple syrup, toasted pecans, brown butter',
      price: 4.75,
      isSpecial: false
    }
  ]

  return (
    <section className="bg-cookie-cream py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-script text-cookie-brown font-bold mb-4">
            Our Cookie Menu
          </h2>
          <p className="text-cookie-choco max-w-2xl mx-auto">
            Handcrafted cookies made with premium ingredients and a touch of love.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cookieMenu.map((cookie, index) => (
            <PricingCard 
              key={index}
              name={cookie.name}
              ingredients={cookie.ingredients}
              price={cookie.price}
              isSpecial={cookie.isSpecial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
