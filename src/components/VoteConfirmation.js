import React from 'react';
import { Link } from 'react-router-dom';

const VoteConfirmation = () => {
  return (
    <div className="grid justify-center items-center h-full   bg-white">
      <div className="grid justify-center items-center max-w-md mt-4 mb-[90%] p-6 bg-gray-900 flex-row text-white rounded-lg" >
        <h2 className="text- mx-auto font-semibold mb-2">Successful!!!</h2>
        <p className="mb-2 mx-auto flex items-center">Thank you for coming!</p>
        <p className="mb-4 mx-auto flex items-center">Your vote is recorded.</p>
        <Link to='/elections' className="mx-auto bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition duration-200">
          Done
        </Link>
      </div>
    </div>
  );
};

export default VoteConfirmation;
