
import React from 'react';
import images from '../assets/images';

interface RoadmapItemProps {
  phase: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  isLast?: boolean;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({
  phase,
  title,
  description,
  icon,
  color,
  isLast = false
}) => {
  const bgColor = {
    'red': 'bg-parrot-red',
    'yellow': 'bg-parrot-yellow',
    'blue': 'bg-parrot-blue',
    'green': 'bg-parrot-green',
    'orange': 'bg-parrot-orange'
  }[color] || 'bg-parrot-blue';
  
  const textColor = {
    'yellow': 'text-gray-900',
    'green': 'text-gray-900',
    'default': 'text-white'
  }[color] || 'text-white';

  return (
    <div className="flex items-start gap-4 md:gap-6 group">
      {/* Icon & Timeline */}
      <div className="flex flex-col items-center">
        <div className={`${bgColor} w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
        
        {!isLast && (
          <div className="w-1 h-20 bg-gray-200 mt-2 relative">
            <div className={`absolute top-0 left-0 right-0 w-full ${bgColor} transform-gpu origin-top transition-transform duration-700 h-0 group-hover:h-full`}></div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="glass-card p-5 flex-1 group-hover:shadow-xl transition-shadow duration-300 mb-6">
        <div className={`${bgColor} ${textColor} text-xs font-medium inline-block px-2 py-1 rounded mb-2`}>
          {phase}
        </div>
        <h3 className="text-xl font-bold font-poppins mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const RoadmapSection: React.FC = () => {
  const roadmapItems = [
    {
      phase: 'Q1 2025',
      title: 'Out of the Egg',
      description: 'Project inception, idea born, and Twitter community created.',
      icon: images.roadmapEgg,
      color: 'green'
    },
    {
      phase: 'Q2 2025',
      title: 'Learning to Fly',
      description: 'Website launch and whitepaper release.',
      icon: images.roadmapHatching,
      color: 'blue'
    },
    {
      phase: 'Q3 2025',
      title: 'First Flight',
      description: 'ParrotSwap platform prototype (testnet) for the community to experience.',
      icon: images.roadmapFlying,
      color: 'orange'
    },
    {
      phase: 'Q4 2025',
      title: 'Talking Parrot',
      description: 'ParrotSwap launches public beta and starts repeating the best offers in DeFi!',
      icon: images.roadmapTalking,
      color: 'red',
      isLast: true
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="headline-badge bg-parrot-blue text-white mx-auto text-center">
          Our Journey
        </div>
        <h2 className="section-title mb-6">ParrotSwap <span className="text-parrot-green">Roadmap</span></h2>
        <p className="section-subtitle mb-16">
          Follow the evolution of our project! Each stage brings us closer to a colorful and fun DeFi ecosystem.
        </p>
        
        <div className="max-w-3xl mx-auto">
          {roadmapItems.map((item, index) => (
            <RoadmapItem
              key={index}
              phase={item.phase}
              title={item.title}
              description={item.description}
              icon={item.icon}
              color={item.color}
              isLast={item.isLast}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
