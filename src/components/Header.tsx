import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import images from '../assets/images';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const connectWallet = async () => {
    try {
      // Check if Phantom is installed
      const { solana } = window as any;
      
      if (!solana?.isPhantom) {
        alert("Please install the Phantom extension!");
        window.open("https://phantom.app/", "_blank");
        return;
      }
      
      // Connect to wallet
      const response = await solana.connect();
      const publicKey = response.publicKey.toString();
      setWalletAddress(publicKey);
      console.log('Wallet connected:', publicKey);
      
      // You can add more logic here, like saving the address in localStorage
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Whitepaper', href: '#whitepaper' },
    { name: 'Community', href: '#links' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2 group"
        >
          <img 
            src={images.parrotLogo} 
            alt="ParrotSwap" 
            className="h-10 w-auto transition-transform duration-300 group-hover:rotate-6"
          />
          <span className="font-poppins font-bold text-xl">ParrotSwap</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a 
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 hover:text-parrot-green transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-parrot-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name}
                to={link.href}
                className="font-medium text-gray-700 hover:text-parrot-green transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-parrot-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </Link>
            )
          ))}
          
          <button 
            onClick={connectWallet}
            className="parrot-button-blue ml-2"
          >
            {walletAddress 
              ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}` 
              : "Connect Wallet"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 glass-card animate-fade-in-down">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a 
                  key={link.name}
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-parrot-green py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name}
                  to={link.href}
                  className="font-medium text-gray-700 hover:text-parrot-green py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <button 
              onClick={() => {
                connectWallet();
                setMobileMenuOpen(false);
              }}
              className="parrot-button-blue text-center"
            >
              {walletAddress 
                ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}` 
                : "Connect Wallet"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
