
import React from 'react';
import images from '../assets/images';
import ParrotMascot from './ParrotMascot';

const WhitepaperSection: React.FC = () => {
  return (
    <section id="whitepaper" className="py-20 feather-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="headline-badge bg-parrot-orange text-white mx-auto">
            Documentation
          </div>
          <h2 className="section-title mb-6">Whitepaper</h2>
          <p className="section-subtitle mb-10">
            Curious about the technical and economic details? Check out our complete Whitepaper to fully understand the technology and vision of ParrotSwap.
          </p>
          
          <div className="glass-card p-8 flex flex-col md:flex-row items-center gap-8 mb-8 hover:shadow-xl transition-all duration-300 group">
            <div className="md:w-1/3 flex justify-center">
              <img 
                src={images.documentIcon} 
                alt="Whitepaper document" 
                className="w-24 h-24 group-hover:rotate-6 transition-transform duration-300"
              />
            </div>
            
            <div className="md:w-2/3 text-left">
              <h3 className="text-2xl font-bold mb-2">ParrotSwap Whitepaper</h3>
              <p className="text-gray-600 mb-6">
                Complete technical document explaining the mechanism, tokenomics, governance, and vision of ParrotSwap.
              </p>
              
              <a 
                href="/whitepaper.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="parrot-button-orange inline-flex items-center gap-2 justify-center"
              >
                <span>📄 Download Whitepaper (PDF)</span>
              </a>
            </div>
          </div>
          
          <div className="mt-8 relative">
            <p className="italic text-gray-500 text-sm">
              * The whitepaper is continuously evolving as the project develops. Stay tuned for updates!
            </p>
            
            <div className="absolute -right-16 -top-20 hidden md:block opacity-80">
              <ParrotMascot width={100} height={100} pose="waving" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitepaperSection;
