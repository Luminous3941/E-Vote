import React from 'react';
import Apc from '../Img/apc-logo.png'
import { Link } from 'react-router-dom';

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
    <div className=" max-w-md mx-3 xm:mx-auto my-3 py-6 px-3 rounded-lg shadow-lg bg-gray-900">
        <div className="relative ">
            <div className="flex items-center bg-white px-1 rounded-lg ">
                <button className='text-gray-400 mt-1'>
                    <span className="material-icons">search</span>
                </button>
                <input className=" ml-2 p-2 outline-none" type="text" placeholder="Search"/>
            </div>
            <div className="my-4 block justify-between px-3">
                {results.candidates.map((candidate, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-500 to-black my-2 p-4 rounded-xl">
                    {/* <div className="flex justify-between items-center pb-4"> */}
                        <Link to='/election-result' className='flex-row justify-between items-center '>
                            <div className='flex text-white justify-between'>
                                <h1 className="text-xs font-semibold mb-2">2019 Presidential Election</h1>
                                <p className='text-xs'>Finished</p>
                            </div>
                            <div className='flex text-white items-center justify-between w-full'>
                                <div className='w-1/2'>
                                    <p className='text-xs font-normal'>Win Percent</p>
                                    <p className='text-2xl font-bold tracking-widest'>{candidate.winPercent}%</p>
                                </div>
                                <div className='grid justify-items-end pt-3 w-1/2'>
                                    <img src={Apc} alt={candidate.party} className="w-1/2 h-24 object-contain" />
                                    <h3 className='mb-2 text-xs tracking-widest pl-[50%] mx-auto text-center font-bold'>{candidate.party}</h3>
                                </div>
                            </div>
                        </Link>
                    {/* </div> */}
                </div>
                ))}
            </div>

        </div>
    </div>
  );
};

export default Results;
