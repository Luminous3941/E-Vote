import React, { useState, useEffect } from 'react';

const UpcomingElect = () =>{

    // State to store the time remaining
  const [timeLeft, setTimeLeft] = useState({
    years: 2,
    months: 2,
    days: 2,
    hours: 2,
    minutes: 2,
    seconds: 2,
  });

  // Effect to update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { years, months, days, hours, minutes, seconds } = prevTime;
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
        if (days < 0) {
            days = 30;
            years -= 1;
          }
        return { years, months, days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    return(
        <div className=" max-w-sm mx-3 xm:mx-auto my-3 bg-gradient-to-r  from-yellow-400 to-yellow-200 py-6 px-3 rounded-lg shadow-lg">
            <div className='flex flex-row justify-between'>
                <h1 className="text-xs font-semibold mb-2">2019 Presidential Election Result</h1>
                <p className='text-xs'>Upcoming</p>
            </div>
            <p className="text-sm text-gray-700 mt-2">Start Time Countdown</p>
            <div className="flex justify-between text-center mt-2">
                <div>
                    <p className="text-sm font-normal text-gray-700">Years</p>
                    <p className="text-xl font-semibold">0{timeLeft.years}</p>
                </div>
                <div>
                    <p className="text-sm font-normal text-gray-700">Months</p>
                    <p className="text-xl font-semibold">0{timeLeft.months}</p>
                </div>
                <div>
                    <p className="text-sm font-normal text-gray-700">Days</p>
                    <p className="text-xl font-semibold">0{timeLeft.days}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-700">Hours</p>
                    <p className="text-xl font-bold">0{timeLeft.hours}</p>
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
        </div>
    )
}

export default UpcomingElect;