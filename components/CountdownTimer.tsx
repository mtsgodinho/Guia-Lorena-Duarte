
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [seconds, setSeconds] = useState(900); // 15 minutes

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds(s => s - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [seconds]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-red-50 text-red-600 font-bold py-2 px-4 rounded-full text-sm inline-flex items-center gap-2 border border-red-200">
      <span className="animate-pulse">●</span>
      OFERTA EXPIRA EM: {formatTime(seconds)}
    </div>
  );
};

export default CountdownTimer;
