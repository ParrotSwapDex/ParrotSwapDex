
import React from 'react';
import images from '../assets/images';

interface ParrotMascotProps {
  className?: string;
  width?: number;
  height?: number;
  animated?: boolean;
  pose?: 'default' | 'talking' | 'flying' | 'waving';
}

const ParrotMascot: React.FC<ParrotMascotProps> = ({
  className = '',
  width = 200,
  height = 200,
  animated = true,
  pose = 'default'
}) => {
  const animationClass = animated 
    ? pose === 'flying' 
      ? 'animate-float' 
      : pose === 'talking' 
        ? 'animate-wiggle' 
        : pose === 'waving' 
          ? 'animate-bounce-slight' 
          : 'animate-pulse-soft'
    : '';

  return (
    <div className={`${animationClass} ${className} transition-all duration-300 relative`}>
      <img 
        src={images.parrotMascot} 
        alt="ParrotSwap Mascot" 
        width={width} 
        height={height}
        className="object-contain transition-transform duration-300 hover:scale-105"
      />
      
      {/* Speech bubble that appears on hover for the talking pose */}
      {pose === 'talking' && (
        <div className="absolute -top-14 -right-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-xl p-2 shadow-md">
          <p className="text-sm font-comic">HODL!! Squawk!</p>
          <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default ParrotMascot;
