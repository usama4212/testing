// CountdownTimer.tsx
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const CountdownTimer: React.FC<{ initialTime: number }> = ({ initialTime }) => {
  const [bidTime, setBidTime] = useState(initialTime);
  const [days, setDays] = useState<number | string>('0');
  const [hours, setHours] = useState<number | string>('0');
  const [minutes, setMinutes] = useState<number | string>('0');
  const [seconds, setSeconds] = useState<number | string>('0');

  useEffect(() => {
    const diffTime = bidTime;
    let duration = moment.duration(diffTime * 1000, 'milliseconds');
    const interval = 1000;

    const timerID = setInterval(() => {
      if (duration.asMilliseconds() <= 0) {
        setDays('0');
        setHours('0');
        setMinutes('0');
        setSeconds('0');
      } else {
        duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');

        setDays(duration.days());
        setHours(duration.hours());
        setMinutes(duration.minutes());
        setSeconds(duration.seconds());
      }
    }, interval);

    return () => clearInterval(timerID);
  }, [bidTime]);

  return (
    <>
      <span className=''>
        {days}d {hours}h {minutes}m {seconds}s
       </span>
    </>
  );
};

export default CountdownTimer;
