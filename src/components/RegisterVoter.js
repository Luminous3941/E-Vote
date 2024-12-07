import React, { useState } from 'react';

const RegisterVoter = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div className="max-w-md mx-6 md:mx-auto  my-3 bg-white text-gray-800 p-4">
      <h1 className="text-base font-semibold mb-4">Register Voter</h1>
      <div className="bg-gray-800 text-white p-4 rounded-lg">
        <h1 className="text-base font-semibold mb-4">Personal Information</h1>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium">First name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium">Last name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md" />
        </div>
        <div>
          <label htmlFor="dob" className="block text-sm font-medium">DOB</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md" />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium">Residential Address</label>
          <textarea id="address" name="address" value={formData.address} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md" rows="3"></textarea>
        </div>
        <button type="submit" className="w-full mt-3 bg-yellow-400 text-black py-2 rounded-md hover:bg-yellow-800 transition duration-200">Next</button>
      </div>
    </div>
  );
};

export default RegisterVoter;
