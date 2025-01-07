import React from 'react';
    import Header from './components/Header';
    import Hero from './components/Hero';
    import CTA from './components/CTA';
    import Services from './components/Services';

    const App = () => {
      return (
        <div>
          <Header />
          <Hero />
          <CTA />
          <Services />
        </div>
      );
    };

    export default App;
