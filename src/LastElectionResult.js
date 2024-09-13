import React from 'react';
import Apc from './Img/apc-logo.png'

const LastElectionResult = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" max-w-sm mx-10 md:mx-auto my-3 bg-gradient-to-r  from-yellow-400 to-yellow-200 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-sm font-semibold mb-1">Last Election Result</h2>
            <div className='flex justify-between mb-1'>
                <h1 className="text-xs font-semibold mb-2">2019 Presidential Election Result</h1>
                <p className='text-xs'>Finished</p>
            </div>
            {/* <div className="mt-4">
              <p className='text-xxs font-normal'>Accredited Votes</p>
              <p className='text-lg font-bold tracking-widest text-left'>1,483,032</p>
              <p className='text-xxs font-normal'>Win Percent</p>
              <p className="text-xl text-center ml-1 font-normal">43%</p>
            </div> */}
            <div className='flex flex-row mx-auto items-center space-x-10 md:space-x-16 w-full'>
              <div className=''>
                <p className='text-xs font-normal'>Accredited Votes</p>
                <p className='text-base font-bold tracking-widest text-center'>1,483,032</p>
              </div>
              <div className=''>
                <p className='text-xs font-normal'>Win Percent</p>
                <p className='text-base font-bold tracking-widest text-center'>43%</p>
              </div>
              <img src={Apc} alt='APC logo' className="w-24 h-24 object-contain"/>
            </div>
            <div className='flex flex-row mt-3 justify-between'>
                <p className='text-xxs font-normal'>Start Time: 12 Feb, 2019 09:00 AM</p>
                <p className='text-xxs font-normal'>Finish Time: 12 Feb, 2019 18:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastElectionResult;
