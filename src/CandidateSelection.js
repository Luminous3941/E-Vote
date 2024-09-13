import React from 'react';
import Apc from './Img/apc-logo.png'

const candidates = [
  { id: 'A', party: 'APC', },
  { id: 'B', party: 'APC', },
  { id: 'C', party: 'APC', },
];

const CandidateSelection = () => {
  return (
    <div className="flex justify-center items-center my-4 bg-gray-100">
      <div className="bg-gray-800 text-white rounded-lg max-w-md shadow-lg min-w-72">
        <h2 className="text-sm pl-1 font-normal text-left my-4">Select your candidate & proceed ...</h2>
        <div className="space-y-4 mb-4 pt-0">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="flex flex-col items-center mx-16 bg-gradient-to-r from-blue-500 to-black rounded-lg">
              <p className="text-2xl text-center font-bold">{candidate.id}</p>
              <img
                src={Apc}
                alt={`${candidate.party} Logo`}
                className="w-24 h-20 object-contain mx-16"
              />
              <p className="text-lg">{candidate.party}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidateSelection;
