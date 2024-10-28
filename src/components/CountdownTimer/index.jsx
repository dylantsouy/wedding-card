import React, { useState, useEffect } from 'react';
import './styles.scss';

const CountdownTimer = ({ targetDate, targetHour = 12 }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      target.setHours(targetHour, 0, 0, 0);
      
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      if (timeLeft.days === 0 && timeLeft.hours === 0 && 
          timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, targetHour]);

  return (
    <div className="countdown-timer-vertical">
      <div className="time-block">
        <div className="time-content">
          <div className="number">{timeLeft.days}</div>
          <div className="unit">天</div>
        </div>
      </div>
      
      <div className="time-block">
        <div className="time-content">
          <div className="number">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="unit">時</div>
        </div>
      </div>
      
      <div className="time-block">
        <div className="time-content">
          <div className="number">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="unit">分</div>
        </div>
      </div>
      
      <div className="time-block">
        <div className="time-content">
          <div className="number">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="unit">秒</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;