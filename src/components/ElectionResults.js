import React from 'react';
import Apc from '../Img/apc-logo.png'

const ElectionResults = () => {
  const results = {
    totalVotes: 11754239,
    winPercent: 43.5,
    startDate: "Tue, 26 Feb 2019 09:00 AM",
    endDate: "Tue, 26 Feb 2019 18:00 PM",
    candidates: [
      {
        party: "APC",
        votes: 5113094,
        winPercent: 43.5,
      },
      {
        party: "APC",
        votes: 4196263,
        winPercent: 35.7,
      },
      {
        party: "APC",
        votes: 2444882,
        winPercent: 20.8,
      }
    ]
  };

  return (
    <div className="max-w-md mx-3 xm:mx-auto my-3 py-6 px-3 rounded-lg shadow-lg text-white bg-gray-900">
      <div className=''>
        <div className='flex flex-row justify-between'>
          <h1 className="text-xs font-semibold mb-2">2019 Presidential Election Result</h1>
          <p className='text-xs'>Finished</p>
        </div>
        <div className="py-2 border-b-4 border-white">
          <div className="flex justify-between items-center mb-4">
            <div className='flex justify-between pb-4 w-[60%] '>
              <div className='mr-6 w-[30%] '>
                <p className='text-xxs font-normal'>Total Votes</p>
                <p className='text-sm md:text-lg font-bold tracking-widest text-center'>{results.totalVotes.toLocaleString()}</p>
              </div>
              <div className='w-[30%]'>
                <p className='text-xxs font-normal'>Win Percent</p>
                <p className='text-sm md:text-lg font-bold tracking-widest text-center'>{results.winPercent}%</p>
              </div>
            </div>
            <div className='w-[30%] rounded-md'>
              <img src={Apc} alt="APC" className="h-auto w-2/3 object-fill ml-auto"/>
            </div>
          </div>
          <p className='text-sm font-normal'>Date Started: {results.startDate}</p>
          <p className='text-sm font-normal'>Date Ended:   {results.endDate}</p>
        </div>
        <div className="mt-4">
              <h2 className="font-bold text-base md:text-lg">Candidates Votes</h2>
              {results.candidates.map((candidate, index) => (
              <div key={index} className="w-full bg-gradient-to-r from-blue-500 to-black my-2 p-4 rounded-xl">
                  {/* <div className="flex justify-between items-center pb-4"> */}
                      {/* <div className="flex justify-between items-center"> */}
                          <div className='grid space-x-auto w-full '>
                              <h3 className='mb-2 text-base md:text-lg tracking-widest font-bold'>{candidate.party}</h3>
                              <div className='flex justify-between w-full'>
                                  <div className='w-[30%]'>
                                      <p className='text-xs font-normal'>Votes</p>
                                      <p className='text-base font-bold tracking-wide'>{candidate.votes.toLocaleString()}</p>
                                  </div>
                                  <div className='w-[30%] ml-auto'>
                                      <p className='text-xs truncate font-normal'>Win Percent</p>
                                      <p className='text-base font-bold tracking-wide truncate'>{candidate.winPercent}%</p>
                                  </div>
                                  <div className='w-[30%]'>
                                    <img src={Apc} alt={candidate.party} className="h-auto w-2/3 object-fill ml-auto"/>
                                  </div>
                              </div>
                              
                          </div>
                      {/* </div> */}
                      
                  {/* </div> */}
              </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ElectionResults;
