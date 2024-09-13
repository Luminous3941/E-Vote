import React from 'react';
import Apc from './Img/apc-logo.png'

const Results = () => {

    const results = {
        candidates: [
          {
            party: "APC",
            winPercent: 43.5,
          },
          {
            party: "APC",
            winPercent: 35.7,
          },
          {
            party: "APC",
            winPercent: 20.8,
          }
        ]
      };

  return (
    <div>
        <div className="relative max-w-md mx-12 md:mx-auto my-3 bg-gray-900 rounded-lg shadow-lg p-4">
            <div className="flex items-center bg-white px-1 rounded-lg mb-4">
                <button className='text-gray-400 mt-1'>
                    <span className="material-icons">search</span>
                </button>
                <input className="flex-grow ml-2 p-2 outline-none" type="text" placeholder="Search"/>
            </div>
            <div className="mt-4 block justify-between px-3">
                {results.candidates.map((candidate, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-500 to-black my-2 p-4 rounded-xl">
                    <div className="flex justify-between items-center pb-4">
                        <div className='flex-row justify-between items-center '>
                            <div className='flex space-x-14 md:space-x-40 text-white justify-between'>
                                <h1 className="text-xs font-semibold mb-2">2019 Presidential Election</h1>
                                <p className='text-xs'>Finished</p>
                            </div>
                            <div className='flex flex-row mx-auto text-white items-center space-x-24 md:space-x-56 w-full'>
                                <div className=''>
                                    <p className='text-xs font-normal'>Win Percent</p>
                                    <p className='text-2xl font-bold tracking-widest text-center'>{candidate.winPercent}%</p>
                                </div>
                                <div className='items-center pt-3 '>
                                    <img src={Apc} alt={candidate.party} className="h-14 w-16"/>
                                    <h3 className='mb-2 text-xs tracking-widest items-center text-center font-bold'>{candidate.party}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>

        </div>
    </div>
  );
};

export default Results;
