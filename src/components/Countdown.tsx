import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZeros = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="pt-8 pb-8 mt-10 text-center">
      <h3 className="mb-5 text-2xl font-semibold text-[#64e9ff]">¡Cuenta Regresiva para el Gran Día!</h3>
      
      <div className="flex flex-wrap justify-center gap-3 px-4 md:gap-6">
        <div className="flex flex-col items-center justify-center w-20 h-20 p-2 rounded-lg shadow-inner bg-gradient-to-b from-[#0a2463] to-[#135486] md:w-24 md:h-24">
          <span className="text-2xl font-bold md:text-3xl">{addLeadingZeros(timeLeft.days)}</span>
          <span className="mt-1 text-xs text-[#78c3fb] md:text-sm">Días</span>
        </div>
        
        <div className="flex flex-col items-center justify-center w-20 h-20 p-2 rounded-lg shadow-inner bg-gradient-to-b from-[#0a2463] to-[#135486] md:w-24 md:h-24">
          <span className="text-2xl font-bold md:text-3xl">{addLeadingZeros(timeLeft.hours)}</span>
          <span className="mt-1 text-xs text-[#78c3fb] md:text-sm">Horas</span>
        </div>
        
        <div className="flex flex-col items-center justify-center w-20 h-20 p-2 rounded-lg shadow-inner bg-gradient-to-b from-[#0a2463] to-[#135486] md:w-24 md:h-24">
          <span className="text-2xl font-bold md:text-3xl">{addLeadingZeros(timeLeft.minutes)}</span>
          <span className="mt-1 text-xs text-[#78c3fb] md:text-sm">Minutos</span>
        </div>
        
        <div className="flex flex-col items-center justify-center w-20 h-20 p-2 rounded-lg shadow-inner bg-gradient-to-b from-[#0a2463] to-[#135486] md:w-24 md:h-24">
          <span className="text-2xl font-bold md:text-3xl">{addLeadingZeros(timeLeft.seconds)}</span>
          <span className="mt-1 text-xs text-[#78c3fb] md:text-sm">Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;