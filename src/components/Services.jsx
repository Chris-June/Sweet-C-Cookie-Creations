import React from 'react'
import { 
  CookieIcon, 
  CakeIcon, 
  GiftIcon, 
  StarIcon, 
  PaletteIcon, 
  HeartIcon 
} from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-3xl shadow-cookie-elegant transform transition-all hover:scale-105 hover:shadow-2xl space-y-4">
    <div className="flex justify-between items-center">
      <Icon className="w-12 h-12 text-cookie-caramel" />
      <StarIcon className="w-6 h-6 text-cookie-gold opacity-50" />
    </div>
    <h3 className="text-2xl font-bold text-cookie-choco">{title}</h3>
    <p className="text-cookie-brown/80">{description}</p>
  </div>
)

const Services = () => {
  const services = [
    {
      icon: CookieIcon,
      title: 'Artisan Cookie Selection',
      description: 'Handcrafted cookies using premium ingredients and time-honored recipes.'
    },
    {
      icon: CakeIcon,
      title: 'Custom Dessert Catering',
      description: 'Personalized dessert experiences for weddings, parties, and special events.'
    },
    {
      icon: GiftIcon,
      title: 'Gift Boxes & Packages',
      description: 'Beautifully curated cookie collections perfect for gifting.'
    },
    {
      icon: PaletteIcon,
      title: 'Seasonal & Themed Cookies',
      description: 'Unique cookie designs for holidays, celebrations, and corporate events.'
    },
    {
      icon: HeartIcon,
      title: 'Dietary Accommodations',
      description: 'Gluten-free, vegan, and allergen-friendly cookie options.'
    }
  ]

  return (
    <section className="bg-cookie-cream py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-script text-cookie-brown font-bold mb-4">
            Our Sweet Specialties
          </h2>
          <p className="text-cookie-choco max-w-2xl mx-auto">
            From classic favorites to innovative creations, we craft cookies that delight and inspire.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
