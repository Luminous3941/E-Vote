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
    <nav className="bg-gray-800 p-4 w-full  text-white flex justify-between items-center">
      <div className="flex items-center">
        <Link to='/' className="text-lg font-semibold">
          E-Voting
        </Link>
      </div>
      <div className="flex items-center">
        {/* For Desktop and Tab view */}
        <div className="hidden md:flex space-x-4">
          <Link to='/' className="px-4 py-2 hover:bg-gray-600" >Home</Link>
          <Link to='/elections' className="px-4 py-2 hover:bg-gray-600">Elections</Link>
          <Link to='/results'>
            <button className="px-4 py-2 hover:bg-gray-600">Results</button>
          </Link>
          <Link to='/about' className="px-4 py-2 hover:bg-gray-600">About Us</Link>
        </div>
        {/* For Mobile view */}
        <div className="md:hidden relative">
          <button onClick={toggleDropdown} className="flex items-center">
            <i className="material-icons">menu</i>
          </button>
          {isDropdownOpen && (
            <div className="absolute clear-right mt-5 w-[130px] items-center grid justify-center opacity-90 bg-gray-800 shadow-xl rounded">
              <ul className="text-white text-sm">
                <Link to='/'>
                  <li className="px-10 my-1 opacity-80 py-1 rounded-lg hover:bg-gray-400">Home</li>
                </Link>
                <Link to='/elections'> 
                  <li className="px-10 my-1 opacity-80 py-1 rounded-lg hover:bg-gray-400">Elections</li>
                </Link>
                <Link to='/results'>
                  <li className="px-10 my-1 opacity-80 py-1 rounded-lg hover:bg-gray-400">Results</li>
                </Link>
                <Link to='/about'>
                  <li className="px-10 my-1 opacity-80 py-1 rounded-lg hover:bg-gray-400 truncate">About Us</li>
                </Link>
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
                <img src="../Img/metamask.png" alt="Metamask Logo" className="w-4 h-4 mr-2" />
                Connect Metamask
              </button>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





