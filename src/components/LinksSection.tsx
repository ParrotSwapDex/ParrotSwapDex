
import React from 'react';
import images from '../assets/images';

interface SocialCardProps {
  title: string;
  description: string;
  url: string;
  icon: string;
  color: string;
  buttonText: string;
}

const SocialCard: React.FC<SocialCardProps> = ({
  title,
  description,
  url,
  icon,
  color,
  buttonText
}) => {
  const buttonClass = {
    'red': 'parrot-button-red',
    'yellow': 'parrot-button-yellow',
    'blue': 'parrot-button-blue',
    'green': 'parrot-button-green',
    'orange': 'parrot-button-orange'
  }[color] || 'parrot-button-blue';

  return (
    <div className="glass-card p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group">
      <img 
        src={icon} 
        alt={title}
        className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300"
      />
      
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} w-full`}
      >
        {buttonText}
      </a>
    </div>
  );
};

const LinksSection: React.FC = () => {
  return (
    <section id="links" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="headline-badge bg-parrot-red text-white mx-auto text-center">
            Community
          </div>
          <h2 className="section-title mb-6">Follow ParrotSwap</h2>
          <p className="section-subtitle mb-12">
            Stay up to date with the latest news, join the discussions, and follow the project's development on our social media.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <SocialCard
              title="Official Twitter"
              description="Follow the parrot on Twitter to not miss any tweet! Announcements, updates, and fresh memes."
              url="https://twitter.com/ParrotSwapDex"
              icon={images.twitterIcon}
              color="blue"
              buttonText="Follow on Twitter"
            />
            
            <SocialCard
              title="GitHub"
              description="Explore the code, follow the technical progress, and, if you're a developer, contribute to the project!"
              url="https://github.com/ParrotSwap"
              icon={images.githubIcon}
              color="green"
              buttonText="View Code on GitHub"
            />
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg font-medium text-gray-700 mb-6">
              💬 The idea is evolving in real-time – come discuss with us on Twitter!
            </p>
            
            <a 
              href="https://twitter.com/intent/tweet?text=I%20just%20discovered%20%40ParrotSwapDex%2C%20a%20fun%20DeFi%20project%20with%20a%20parrot%20mascot!%20brl.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="parrot-button-red inline-flex items-center gap-2"
            >
              <span>Share on Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
