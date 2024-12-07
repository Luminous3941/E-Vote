import React from 'react';

const RegistrationSuccess = () => {
  return (
    <div className=" my-4 mx-7 items-center justify-center">
        <h1 className="text-left text-sm font-semibold my-7">
            Register Voter
        </h1>
        <div className="bg-gray-800 text-white w-full max-w-md p-10 rounded-lg shadow-lg">
            {/* Title */}
            <h1 className="text-left text-sm font-semibold mb-4">
            Registration Successful!
            </h1>

            {/* Wallet Information */}
            <div className="bg-gray-300 text-gray-800 p-4 rounded-md mb-16">
                <p className="mb-2">Your wallet address is:</p>
                <p className="text-sm font-mono mb-2">
                    0x83DAC850B4F8...01E903CC40BBE
                </p>
                <p className="text-red-500 text-sm">
                    Write down your seed phrases in order. <br /> Keep it private, safe, and secure!
                </p>
                {/* Seed Phrases */}
                <h2 className="text-sm font-semibold my-2">Seed Phrases</h2>
                <div className="bg-white text-gray-800 p-2 border-solid border-2 border-black rounded-md mb-4">
                    <div className="grid grid-cols-3 text-center gap-2 text-sm font-semibold">
                        <p>1. rice</p>
                        <p>2. bus</p>
                        <p>3. vast</p>
                        <p>4. pistol</p>
                        <p>5. penalty</p>
                        <p>6. defense</p>
                        <p>7. camp</p>
                        <p>8. trophy</p>
                        <p>9. mystery</p>
                        <p>10. legal</p>
                        <p>11. autumn</p>
                        <p>12. remind</p>
                    </div>
                </div>
            </div>

            

            {/* Done Button */}
            <button className="w-full bg-yellow-400 text-gray-800 py-2 rounded-lg font-semibold">
            Done
            </button>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
