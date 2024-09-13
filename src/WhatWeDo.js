import React from 'react';
import votingIcon from './Img/voting-icon.png';
import blockchainIcon from './Img/blockchain-icon.png';

const WhatWeDo = () => {
  return (
    <div className="bg-gray-800 text-white p-5 rounded-lg shadow-md max-w-4xl mx-10 lg:mx-auto my-8">
      <h2 className="text-sm font-semibold mb-4">What we do?</h2>
      <div className="flex justify-around items-center mb-4">
        <img src={votingIcon} alt="Voting icon" className="h-12 w-12"/>
        <img src={blockchainIcon} alt="Blockchain icon" className="h-12 w-12"/>
      </div>
      <p className="text-xxs md:text-xs font-normal">
        E-Voting is a decentralized application that implements a voting smart contract on a blockchain.
        This is to prevent rigging and manipulation elections by providing transparency, censorship,
        traceable and secure environment for conducting elections.
      </p>
    </div>
  );
};

export default WhatWeDo;
