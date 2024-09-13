import React from 'react';

const VoteConfirmation = () => {
  return (
    <div className=" flex justify-center items-center h-screen bg-gray-800">
      <div className="p-6 w-96 bg-gray-900 flex-row text-white rounded-lg" >
        <h2 className="text- font-semibold mb-2">Successful!!!</h2>
        <p className="mb-2 flex items-center">Thank you for coming!</p>
        <p className="mb-4 flex items-center">Your vote is recorded.</p>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition duration-200">
          Done
        </button>
      </div>
    </div>
  );
};

export default VoteConfirmation;
