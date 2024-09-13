import React from 'react';
import Apc from './Img/apc-logo.png'


const candidates = [
    { id: 'B', party: 'APC', },
  ];

const CastVote = () =>{
    return(
    <div className="flex justify-center items-center my-4 bg-gray-100">
        <div className="bg-gray-800 text-white rounded-lg max-w-md shadow-lg min-w-72">
            <h2 className="text-sm pl-2 font-normal text-left my-4">Vote ...</h2>
            <div className="space-y-4 mb-14 pt-0">
                {candidates.map((candidate) => (
                <div key={candidate.id} className="flex flex-col items-center mx-16 bg-gradient-to-r from-blue-500 to-black rounded-lg">
                    <p className="text-2xl text-center font-bold">{candidate.id}</p>
                    <img
                    src={Apc}
                    alt={`${candidate.party} Logo`}
                    className="w-24 h-20 object-contain mx-16"
                    />
                    <p className="text-lg">{candidate.party}</p>
                    <div className='my-1'>
                        <input className='bg-transparent mr-1 ' type="checkbox" id="myCheckbox" name="myCheckbox" />
                        <label htmlFor="myCheckbox" className='text-xs font-light'>Verify</label>
                    </div>
                    <div className='flex space-x-6 mt-1 mx-5 mb-7'>
                        <button className="bg-yellow-500 text-black rounded-xl  py-2 px-6 hover:bg-yellow-600 transition duration-200">
                        Vote
                        </button>
                        <button className="bg-white text-black rounded-xl py-2 px-6 hover:bg-gray-200 transition duration-200">
                        Cancel
                        </button>
                    </div>
                </div>
             ))}
            </div>
        </div>
    </div>
    );
};
export default CastVote;