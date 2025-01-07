import React from 'react';
import { 
  Leaf, 
  Coffee, 
  Heart,
  ArrowRight
} from 'lucide-react';

const PremiumCard = ({ icon: Icon, title, description, gradient }) => (
  <div className={`
    relative overflow-hidden rounded-2xl p-6 space-y-4 
    transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
    ${gradient}
  `}>
    <div className="absolute inset-0 opacity-10 bg-white/20"></div>
    <div className="relative z-10">
      <div className="flex justify-between items-center mb-4">
        <Icon className="w-12 h-12 text-white" />
        <ArrowRight className="w-6 h-6 text-white opacity-70 group-hover:opacity-100" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  </div>
);

const Hero = () => {
  const premiumCards = [
    {
      icon: Leaf,
      title: 'Artisan Collection',
      description: 'Curated teas from rare global estates',
      gradient: 'bg-gradient-to-br from-tea-sage to-green-600'
    },
    {
      icon: Coffee,
      title: 'Brewing Mastery',
      description: 'Precision brewing techniques',
      gradient: 'bg-gradient-to-br from-tea-rose to-amber-600'
    }
  ];

  return (
    <section className="relative bg-tea-pattern min-h-screen flex items-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-tea-lavender rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-tea-sage rounded-full mix-blend-multiply filter blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-script text-tea-brown leading-tight">
                Mrs. Bell's Enchanted Tea Experience
              </h1>
              <p className="text-xl text-tea-brown/80 max-w-xl">
                Where every cup tells a story, and every sip is a journey through 
                centuries of tea craftsmanship and magical tradition.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="
                bg-tea-rose text-white px-8 py-4 rounded-full 
                flex items-center space-x-3 
                transform transition-all hover:scale-105 hover:shadow-xl
                group
              ">
                <Coffee className="w-6 h-6" />
                <span>Book Experience</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="
                border-2 border-tea-lavender text-tea-brown 
                px-8 py-4 rounded-full 
                flex items-center space-x-3
                transform transition-all hover:scale-105 hover:shadow-xl
                group
              ">
                <Heart className="w-6 h-6" />
                <span>Our Story</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>

          {/* Premium Cards */}
          <div className="space-y-6">
            {premiumCards.map((card, index) => (
              <PremiumCard 
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                gradient={card.gradient}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
