import React from 'react';
import { 
  Leaf, 
  CakeSlice, 
  Utensils, 
  CalendarHeart, 
  BookOpen, 
  GlassWater,
  ArrowRight
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, gradient, features }) => (
  <div className={`
    relative group overflow-hidden rounded-3xl p-6 space-y-4 
    transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
    ${gradient}
  `}>
    <div className="absolute inset-0 opacity-10 bg-white/20"></div>
    <div className="relative z-10">
      <div className="flex justify-between items-center mb-4">
        <Icon className="w-12 h-12 text-white" />
        <ArrowRight className="w-6 h-6 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/80 mb-4">{description}</p>
      
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-white/90 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Leaf,
      title: 'Artisan Tea Selection',
      description: 'Curated teas from around the world, handpicked for exceptional flavor.',
      gradient: 'bg-gradient-to-br from-tea-sage to-green-600',
      features: [
        'Rare single-origin teas',
        'Monthly limited editions',
        'Expert tea sommelier curation'
      ]
    },
    {
      icon: CakeSlice,
      title: 'Gourmet Pastry Pairing',
      description: 'Exquisite pastries crafted to complement our tea collection.',
      gradient: 'bg-gradient-to-br from-tea-rose to-amber-600',
      features: [
        'Handmade daily',
        'Seasonal flavor rotations',
        'Vegan and gluten-free options'
      ]
    },
    {
      icon: Utensils,
      title: 'High Tea Experience',
      description: 'Elegant dining with traditional and modern tea service.',
      gradient: 'bg-gradient-to-br from-tea-lavender to-purple-600',
      features: [
        'Multi-course tea journey',
        'Vintage china and silverware',
        'Personalized tea pairing'
      ]
    },
    {
      icon: CalendarHeart,
      title: 'Private Events',
      description: 'Host your special moments in our charming tea room.',
      gradient: 'bg-gradient-to-br from-pink-400 to-pink-600',
      features: [
        'Customizable event packages',
        'Intimate venue settings',
        'Professional event planning'
      ]
    },
    {
      icon: BookOpen,
      title: 'Tea Workshops',
      description: 'Learn the art of tea brewing and appreciation.',
      gradient: 'bg-gradient-to-br from-blue-400 to-blue-600',
      features: [
        'Brewing masterclasses',
        'Cultural tea traditions',
        'Interactive tasting sessions'
      ]
    },
    {
      icon: GlassWater,
      title: 'Custom Blends',
      description: 'Create your own unique tea blend with expert guidance.',
      gradient: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
      features: [
        'Personalized flavor profiling',
        'Blend creation workshop',
        'Take-home custom blend'
      ]
    }
  ];

  return (
    <section className="py-16 bg-tea-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-tea-lavender rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-tea-sage rounded-full mix-blend-multiply filter blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-script text-tea-brown mb-4">
            Magical Tea Experiences
          </h2>
          <p className="text-xl text-tea-brown/70 max-w-2xl mx-auto">
            Discover a world of enchanting tea experiences crafted with passion, 
            precision, and a touch of magic.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              gradient={service.gradient}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
