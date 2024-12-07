import React from 'react';
import Apc from '../Img/apc-logo.png'
import { Link } from 'react-router-dom';


const candidates = [
    { id: 'B', party: 'APC', },
  ];

const CastVote = () =>{
    return(
    <div className="mt-4 bg-gray-100 mb-auto ">
            {/* max-w-md mx-3 xm:mx-auto my-3 py-6 px-3 rounded-lg shadow-lg bg-gray-900 */}
        <div className="max-w-md mx-3 xm:mx-auto my-3 py-6 px-1 rounded-lg shadow-lg text-white bg-gray-900">
            <h2 className="text-sm pl-2 font-normal text-left my-4">Vote ...</h2>
            <div className="max-w-md space-y-4 mb-14 pt-0">
                {candidates.map((candidate) => (
                <div key={candidate.id} className="grid justify-center items-center mx-3 border border-blue-500 bg-gradient-to-r from-blue-500 to-black rounded-lg">
                    <p className="text-2xl text-center font-bold">{candidate.id}</p>
                    <img
                    src={Apc}
                    alt={`${candidate.party} Logo`}
                    className="w-1/3 h-20 object-contain mx-auto"
                    />
                    <p className="text-lg mx-auto">{candidate.party}</p>
                    <div className='my-1'>
                        <input className='text-transparent mr-1 ' type="checkbox" id="myCheckbox" name="myCheckbox" />
                        <label htmlFor="myCheckbox" className='text-xs font-light'>Verify</label>
                    </div>
                    <div className='flex space-x-6 mt-1 mx-5 mb-7'>
                        <Link to='/vote-confirmed' className="bg-yellow-500 text-black rounded-xl  py-2 px-6 hover:bg-yellow-600 transition duration-200">
                        Vote
                        </Link>
                        <Link to='/select-candidate' className="bg-white text-black rounded-xl py-2 px-6 hover:bg-gray-200 transition duration-200">
                        Cancel
                        </Link>
                    </div>
                </div>
             ))}
            </div>
        </div>
    </div>
    );
};
export default CastVote;