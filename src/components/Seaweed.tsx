import React, { useMemo } from 'react';

const Seaweed: React.FC = () => {
  const seaweedPlants = useMemo(() => {
    return Array.from({ length: 8 }).map((_, index) => {
      const position = (index / 8) * 100;
      const width = Math.random() * 20 + 30;
      const height = Math.random() * 150 + 100;
      const delay = Math.random() * 2;
      
      return {
        id: index,
        position,
        width,
        height,
        delay,
      };
    });
  }, []);
  
  return (
    <div className="absolute bottom-0 left-0 w-full h-40 opacity-40 pointer-events-none">
      {seaweedPlants.map(({ id, position, width, height, delay }) => (
        <div
          key={id}
          className="absolute bottom-0"
          style={{
            left: `${position}%`,
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          <div 
            className="absolute bottom-0 w-full rounded-t-full bg-gradient-to-t from-[#075e54] to-[#128c7e]"
            style={{
              height: '100%',
              animation: `sway 8s ease-in-out ${delay}s infinite alternate`,
              transformOrigin: 'bottom',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Seaweed;