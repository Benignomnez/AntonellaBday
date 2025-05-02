import React, { useMemo } from 'react';

const Bubbles: React.FC = () => {
  const bubbles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, index) => {
      const size = Math.random() * 50 + 10;
      const speedFactor = Math.random() * 0.5 + 0.2;
      const initialX = Math.random() * 100;
      const initialY = Math.random() * 100 + 100;
      const delay = Math.random() * 10;
      const opacityValue = Math.random() * 0.5 + 0.1;
      
      return {
        id: index,
        size,
        speedFactor,
        initialX,
        initialY,
        delay,
        opacityValue,
      };
    });
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {bubbles.map(({ id, size, speedFactor, initialX, initialY, delay, opacityValue }) => (
        <div
          key={id}
          className="absolute rounded-full bubble"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${initialX}%`,
            bottom: `-${initialY}px`,
            opacity: opacityValue,
            background: 'radial-gradient(circle at 33% 33%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
            animation: `float ${15 / speedFactor}s ease-in-out ${delay}s infinite`,
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles;