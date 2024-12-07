import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ElectionCard() {
  // State to store the time remaining
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 14,
    minutes: 47,
    seconds: 52,
  });

  // Effect to update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" max-w-sm xs:mx-3 xm:mx-auto my-3 bg-gradient-to-r  from-yellow-400 to-yellow-200 py-6 px-3 rounded-lg shadow-lg">
      <h2 className="text-custom-sm font-semibold text-gray-900">2023 Presidential Election</h2>
      <p className="text-custom-sm text-gray-700 mt-2 font-light">Total Votes</p>
      <h1 className="text-2xl tracking-widest font-semibold text-gray-900 mt-2">475,831</h1>
      <p className="text-sm text-gray-700 mt-2">End Time Countdown</p>
      <div className="flex justify-between text-center mt-2">
        <div> 
          <p className="text-sm font-normal text-gray-700">Days</p>
          <p className="text-xl font-semibold">{timeLeft.days}</p>
        </div>
        <div>
          <p className="text-sm text-gray-700">Hours</p>
          <p className="text-xl font-bold">{timeLeft.hours}</p>
        </div>
        <div>
          <p className="text-sm text-gray-700">Minutes</p>
          <p className="text-xl font-bold">{timeLeft.minutes}</p>
        </div>
        <div>
          <p className="text-sm text-gray-700">Seconds</p>
          <p className="text-xl font-bold">{timeLeft.seconds}</p>
        </div>
      </div>
      <Link to='/select-candidate'>        
        <button className="mt-6 w-full bg-gradient-to-r mx-auto from-blue-500 to-black text-white py-2 rounded-lg text-lg font-semibold hover:shadow-lg">
          Cast a vote
        </button>
      </Link>
    </div>
  );
}

export default ElectionCard;
