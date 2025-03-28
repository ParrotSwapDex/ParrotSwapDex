import React from 'react';
import ParrotMascot from './ParrotMascot';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-32 pb-16 md:pt-40 md:pb-24 feather-bg overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 animate-fade-in-up">
            <div className="headline-badge bg-parrot-yellow text-gray-900">
              Introducing ParrotSwap
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-6">
              ParrotSwap — The most <span className="text-parrot-green">talkative</span> and <span className="text-parrot-red">fun</span> DEX in DeFi!
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 font-comic">
              The parrot is loose in the crypto world! ParrotSwap arrives to shake up the blockchain with humor and transparency. Here you can trade <span className="font-bold text-parrot-blue">crypto</span> like telling a joke, while taking <span className="font-bold text-parrot-orange">security and decentralization</span> seriously. Ready to fly with us?
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://x.com/ParrotSwapDex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="parrot-button-blue"
              >
                🕊️ Follow on Twitter
              </a>
              
              <a 
                href="#roadmap" 
                className="parrot-button-green"
              >
                View Roadmap
              </a>
            </div>
          </div>
          
          {/* Mascot */}
          <div className="md:w-1/2 flex justify-center items-center group animate-fade-in">
            <div className="relative">
              <div className="absolute -z-10 w-[80%] h-[80%] rounded-full bg-gradient-radial from-parrot-green/20 to-transparent blur-xl"></div>
              <img 
                src="/parrot_design.svg" 
                alt="Parrot Design" 
                width={400} 
                height={400} 
                className="drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="w-full h-24 mt-12">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path 
            d="M0 0L48 11.1C96 22.2 192 44.4 288 53.3C384 62.2 480 57.8 576 44.4C672 31.1 768 8.9 864 4.4C960 0 1056 13.3 1152 22.2C1248 31.1 1344 35.6 1392 37.8L1440 40V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" 
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
