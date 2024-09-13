import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropedownOpen, setDropedownOpen] = useState(false);
  const [isConnected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleDropedown = () => setDropedownOpen(!isDropedownOpen);

  const connectMetamask = () => {
    // Simulate wallet connection
    const address = '0x1234';
    setWalletAddress(address);
    setConnected(true);
    setDropdownOpen(false); // Close the dropdown after connection
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-lg font-semibold">
          E-Voting
        </div>
      </div>
      <div className="flex items-center">
        {/* For Desktop and Tab view */}
        <div className="hidden md:flex space-x-4">
          <Link to='/' className="px-4 py-2 hover:bg-gray-600" >Home</Link>
          <Link to='/elections' className="px-4 py-2 hover:bg-gray-600">Elections</Link>
          <Link to='/idverify'>
            <button className="px-4 py-2 hover:bg-gray-600">Results</button>
          </Link>
          <button className="px-4 py-2 hover:bg-gray-600">About Us</button>
        </div>
        {/* For Mobile view */}
        <div className="md:hidden relative">
          <button onClick={toggleDropdown} className="flex items-center">
            <i className="material-icons">menu</i>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-700 shadow-xl rounded">
              <ul className="text-white text-sm">
                <li className="px-4 py-2 hover:bg-gray-600">Home</li>
                <Link to='/elections'> 
                  <li className="px-4 py-2 hover:bg-gray-600">Elections</li>
                </Link>
                <Link to='/idverify'>
                  <li className="px-4 py-2 hover:bg-gray-600">Results</li>
                </Link>
                <li className="px-4 py-2 hover:bg-gray-600">About Us</li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative">
            <button onClick={toggleDropedown} className="bg-yellow-400 text-gray-800 py-1 px-3 rounded ml-4 flex items-center">
              {isConnected ? walletAddress : 'Connect'}
            </button>
            {isDropedownOpen && !isConnected && (
              <button
                onClick={connectMetamask}
                className="absolute right-0 mt-2 bg-yellow-400 text-gray-800 py-1 px-3 rounded flex items-center">
                <img src="metamask-logo.png" alt="Metamask Logo" className="w-4 h-4 mr-2" />
                Connect Metamask
              </button>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





