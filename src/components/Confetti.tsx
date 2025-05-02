import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  speedX: number;
  speedY: number;
}

const Confetti: React.FC = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  
  useEffect(() => {
    const colors = [
      '#ff6e9c', '#64e9ff', '#ffaac1', '#78c3fb', '#ffccd5', 
      '#1e50a6', '#135486', '#072142'
    ];
    
    const generatePieces = (): ConfettiPiece[] => {
      return Array.from({ length: 80 }).map((_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: -10 - Math.random() * 10,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        speedX: (Math.random() - 0.5) * 3,
        speedY: Math.random() * 3 + 2,
      }));
    };
    
    setPieces(generatePieces());
    
    // Animation loop
    let animationFrameId: number;
    let lastTime = Date.now();
    
    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime) / 16; // Normalize to 60fps
      lastTime = currentTime;
      
      setPieces(prevPieces => 
        prevPieces
          .map(piece => ({
            ...piece,
            y: piece.y + piece.speedY * deltaTime,
            x: piece.x + piece.speedX * deltaTime,
            rotation: piece.rotation + piece.rotationSpeed * deltaTime,
          }))
          .filter(piece => piece.y < 120) // Remove pieces that are off screen
      );
      
      if (pieces.length > 0) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none">
      {pieces.map(piece => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;