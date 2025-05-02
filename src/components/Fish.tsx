import React, { useMemo } from 'react';

const Fish: React.FC = () => {
  const fishes = useMemo(() => {
    return Array.from({ length: 10 }).map((_, index) => {
      const size = Math.random() * 30 + 15;
      const posY = Math.random() * 80 + 10;
      const delay = Math.random() * 15;
      const duration = Math.random() * 20 + 15;
      const isRightToLeft = Math.random() > 0.5;
      
      return {
        id: index,
        size,
        posY,
        delay,
        duration,
        isRightToLeft,
        colorClass: [
          'text-[#ff6e9c]',
          'text-[#64e9ff]',
          'text-[#ffaac1]',
          'text-[#78c3fb]',
          'text-[#ffccd5]',
        ][Math.floor(Math.random() * 5)],
      };
    });
  }, []);
  
  return (
    <>
      {fishes.map(({ id, size, posY, delay, duration, isRightToLeft, colorClass }) => (
        <div
          key={id}
          className={`absolute ${colorClass}`}
          style={{
            top: `${posY}%`,
            left: isRightToLeft ? '100%' : '-5%',
            transform: isRightToLeft ? 'scaleX(-1)' : '',
            animation: `${isRightToLeft ? 'swimLeftToRight' : 'swimRightToLeft'} ${duration}s linear ${delay}s infinite`,
          }}
        >
          <svg 
            width={size} 
            height={size * 0.6} 
            viewBox="0 0 100 60" 
            fill="currentColor"
          >
            <path d="M95,30c0,16.6-21.3,30-47.5,30C21.3,60,0,46.6,0,30S21.3,0,47.5,0C73.7,0,95,13.4,95,30z"/>
            <path d="M100,30l-15,15V15L100,30z" />
            <circle cx="25" cy="22" r="5" fill="#fff" />
            <circle cx="25" cy="22" r="2" fill="#000" />
          </svg>
          <div 
            className="absolute top-0 right-0 w-1/4 h-full animate-tailWiggle"
            style={{
              transformOrigin: 'left center',
              animationDelay: `${delay * 0.1}s`,
            }}
          />
        </div>
      ))}
    </>
  );
};

export default Fish;