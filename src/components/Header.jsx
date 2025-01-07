import React from 'react';
import { Coffee, Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-tea-lavender/10 py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-3">
          <Coffee className="text-tea-brown w-10 h-10" />
          <h1 className="text-3xl font-script text-tea-brown font-bold">
            Mrs. Bell's Tea Room
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6 text-tea-brown">
            {['Home', 'Menu', 'About', 'Contact'].map((item) => (
              <li 
                key={item} 
                className="hover:text-tea-rose transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
