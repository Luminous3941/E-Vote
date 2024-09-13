import React from 'react';
import Apc from './Img/apc-logo.png'

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
    <div className="max-w-lg mx-10 my-6 bg-gray-800 md:mx-auto text-white p-2 md:p-4 rounded-lg">
      <div className='p-5'>
        <div className='flex flex-row justify-between'>
          <h1 className="text-xs font-semibold mb-2">2019 Presidential Election Result</h1>
          <p className='text-xs'>Finished</p>
        </div>
        <div className="py-2 border-b-4 border-white">
          <div className="flex justify-between items-center mb-4">
            <div className='flex justify-between pb-4'>
              <div className='mr-6'>
                <p className='text-xxs font-normal'>Total Votes</p>
                <p className='text-lg font-bold tracking-widest text-center'>{results.totalVotes.toLocaleString()}</p>
              </div>
              <div className=''>
                <p className='text-xxs font-normal'>Win Percent</p>
                <p className='text-lg font-bold tracking-widest text-center'>{results.winPercent}%</p>
              </div>
            </div>
            <div>
              <img src={Apc} alt="APC" className="h-14 w-16"/>
            </div>
          </div>
          <p className='text-sm font-normal'>Date Started: {results.startDate}</p>
          <p className='text-sm font-normal'>Date Ended:   {results.endDate}</p>
        </div>
        <div className="mt-4">
              <h2 className="font-bold text-lg">Candidates Votes</h2>
              {results.candidates.map((candidate, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-500 to-black my-2 p-4 rounded-xl">
                  <div className="flex justify-between items-center pb-4">
                      {/* <div className="flex justify-between items-center"> */}
                          <div className='flex-row justify-between items-center '>
                              <h3 className='mb-2 text-xl tracking-widest font-bold'>{candidate.party}</h3>
                              <div className='flex flex-row mx-auto items-center space-x-8 md:space-x-20 w-full'>
                                  <div className=''>
                                      <p className='text-xs font-normal'>Votes</p>
                                      <p className='text-base font-bold tracking-widest text-center'>{candidate.votes.toLocaleString()}</p>
                                  </div>
                                  <div className=''>
                                      <p className='text-xs font-normal'>Win Percent</p>
                                      <p className='text-base font-bold tracking-widest text-center'>{candidate.winPercent}%</p>
                                  </div>
                                  <img src={Apc} alt={candidate.party} className="h-14 w-16"/>
                              </div>
                              
                          </div>
                      {/* </div> */}
                      
                  </div>
              </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ElectionResults;
