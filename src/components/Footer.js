import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 clear-end bottom-0">
      <div className="container p-4 grid justify-start items-start">
        {/* Product and Company Sections */}
        <div className="mb-6 ">
          <div className="mb-4">
            <h5 className="font-bold text-white">Product</h5>
            <ul>
              <li className="mt-2 text-gray-400">E-Voting</li>
            </ul>
          </div>
          <div className="">
            <h5 className="font-bold text-white">Company</h5>
            <ul>
              <Link to='/about' className="mt-2 text-gray-400">About us</Link>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-6 ">
          <FacebookIcon className="text-white text-2xl hover:text-gray-500 cursor-pointer" />
          <YouTubeIcon className="text-white text-2xl hover:text-gray-500 cursor-pointer" />
          <InstagramIcon className="text-white text-2xl hover:text-gray-500 cursor-pointer" />
          <a href='https://x.com/Abubakrlawal' target='_blank' rel="noopener noreferrer"><TwitterIcon className="text-white text-2xl hover:text-gray-500 cursor-pointer" /></a>
        </div>

        {/* Copyright Information */}
        <div className="text-gray-400 text-sm">
          © 2024 Luminous
        </div>
      </div>
    </footer>
  );
}

export default Footer;
