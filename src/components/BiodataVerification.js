import React from 'react';
import { useNavigate } from 'react-router-dom';

const BiodataVerification = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center mx-7 my-4 bg-gray-100">
        <div className="bg-gray-800 px-10 text-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
            {/* Back arrow */}
            <button onClick={() => navigate(-1)} className="text-yellow-500 mr-3">
                <i className="material-icons">arrow_back</i>
            </button>
            <h1 className="text-lg font-semibold">Biodata Verification</h1>
            </div>

            {/* Facial Verification */}
            <div className="mb-2">Facial</div>
            <div className="mb-6  bg-white rounded-lg flex flex-col items-center">
                <div className="text-6xl my-5 mx-28">👤</div>
                <button
                    className="text-yellow-500 mb-5"
                    onClick={() => alert('Facial verification clicked')}
                >
                    Click to proceed ...
                </button>
            </div>

            {/* Fingerprint Verification */}
            <div className="mb-2">Fingerprint</div>
            <div className="mb-16 bg-white rounded-lg flex flex-col items-center">
                <div className="text-6xl my-5 mx-28">🔍</div>
                <button
                    className="text-yellow-500 mb-5"
                    onClick={() => alert('Fingerprint verification clicked')}>
                    Click to proceed ...
                </button>
            </div>

            {/* Register Button */}
            <div className="mt-6">
                <button
                    className="w-full bg-yellow-400 text-gray-800 py-2 rounded-lg font-semibold disabled:opacity-50"
                    disabled>
                    Register
                </button>
            </div>
        </div>
    </div>
  );
};

export default BiodataVerification;
