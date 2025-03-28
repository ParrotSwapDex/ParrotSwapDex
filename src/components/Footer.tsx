
import React from 'react';
import images from '../assets/images';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={images.parrotLogo} 
                alt="ParrotSwap" 
                className="h-10 w-auto"
              />
              <span className="font-poppins font-bold text-xl">ParrotSwap</span>
            </div>
            
            <p className="text-gray-400 mb-6">
              A fun and transparent DEX inspired by parrot communication. Bringing color and humor to the DeFi world.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://twitter.com/ParrotSwapDex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-parrot-blue transition-colors duration-300 p-2 rounded-full"
              >
                <svg width="24" height="24" className="fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              
              <a 
                href="https://github.com/ParrotSwap" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-parrot-green transition-colors duration-300 p-2 rounded-full"
              >
                <svg width="24" height="24" className="fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-parrot-yellow transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#roadmap" 
                  className="text-gray-400 hover:text-parrot-yellow transition-colors duration-300"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a 
                  href="#whitepaper" 
                  className="text-gray-400 hover:text-parrot-yellow transition-colors duration-300"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <a 
                  href="#links" 
                  className="text-gray-400 hover:text-parrot-yellow transition-colors duration-300"
                >
                  Community
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="text-gray-400 hover:text-parrot-yellow transition-colors duration-300"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Soon we'll have our newsletter to keep you informed about the project's updates.
            </p>
            
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-parrot-green transition-all duration-300"
                disabled
              />
              <button 
                className="bg-parrot-green text-gray-900 font-medium rounded-lg px-4 py-2 hover:bg-parrot-green/90 transition-colors duration-300"
                disabled
              >
                Coming soon
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-2">
              * Follow our Twitter to be notified when the newsletter is available.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ParrotSwap. All rights reserved.
            </p>
            
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Made with 💚 for the crypto community | <a href="https://brl.finance" className="hover:text-parrot-green transition-colors duration-300">brl.finance</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
