import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-tea-lavender/10 py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-script text-tea-brown">
            Join Our Tea Community
          </h2>
          <p className="text-xl text-tea-brown/80 leading-relaxed">
            Experience the magic of Mrs. Bell's Tea Room. Whether you're a tea 
            enthusiast or a curious newcomer, we invite you to explore our 
            enchanting world of flavors.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-tea-sage" />
              <span className="text-tea-brown">
                123 Enchanted Lane, Teaberry Village
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-tea-sage" />
              <span className="text-tea-brown">
                (555) TEA-MAGIC
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-tea-sage" />
              <span className="text-tea-brown">
                hello@mrsbellstearoom.com
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-tea-rose text-white px-6 py-3 rounded-full 
              hover:bg-tea-rose/90 transition-colors magical-hover">
              Reserve Now
            </button>
            <button className="border-2 border-tea-lavender text-tea-brown 
              px-6 py-3 rounded-full hover:bg-tea-lavender/10 
              transition-colors magical-hover">
              View Menu
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="tea-card p-8 space-y-4 magical-hover">
            <h3 className="text-2xl font-bold text-tea-brown">
              Newsletter Subscription
            </h3>
            <p className="text-tea-brown/70 mb-4">
              Stay updated with our latest tea collections and special events.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 border border-tea-lavender 
                  rounded-l-full focus:outline-none focus:ring-2 
                  focus:ring-tea-rose"
              />
              <button className="bg-tea-rose text-white px-6 py-2 
                rounded-r-full hover:bg-tea-rose/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
