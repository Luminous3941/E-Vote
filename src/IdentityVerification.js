import React, { useState } from 'react';

const IdentityVerification = () => {
  const [idNumber, setIdNumber] = useState('');
  const [issuedDate, setIssuedDate] = useState('');
  const [expiringDate, setExpiringDate] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [ setUploadedFile] = useState(null);

  const handleFileChange = (event) => {
    setUploadedFile(event.target.files[0]);
  };

  return (
    <div className="flex my-4 items-center justify-center bg-gray-100">
      <div className="bg-gray-800 text-white w-full max-w-md p-6 rounded-lg shadow-lg">
        {/* Title */}
        <div className="flex items-center mb-4">
          <button className="mr-4 text-yellow-400">
            <i className="material-icons">arrow_back</i>
          </button>
          <h1 className="text-xl font-semibold">Identity Verification</h1>
        </div>

        {/* ID Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">ID number</label>
          <input
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Issued Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Issued date</label>
          <div className="relative">
            <input
              type="date"
              value={issuedDate}
              onChange={(e) => setIssuedDate(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <i className="material-icons absolute right-4 top-1/2 transform -translate-y-1/2 text-black">event</i>
          </div>
        </div>

        {/* Expiring Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Expiring date</label>
          <div className="relative">
            <input
              type="date"
              value={expiringDate}
              onChange={(e) => setExpiringDate(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <i className="material-icons absolute right-4 top-1/2 transform -translate-y-1/2 text-black">event</i>
          </div>
        </div>

        {/* Document Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Document type</label>
          <select
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="" disabled>Select document type</option>
            <option value="Passport">Passport</option>
            <option value="Driver's License">Driver's License</option>
            <option value="National ID">National ID</option>
          </select>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Upload document (max size: 8MB)</label>
          <div className="border border-dashed border-gray-500 rounded-lg p-4 bg-white text-black text-center">
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex flex-col items-center">
                <i className="material-icons text-4xl mb-2">cloud_upload</i>
                <p>Drag & drop image here</p>
                <p className="text-sm">JPEG, PNG, BMP & WEBP</p>
              </div>
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/jpeg, image/png, image/bmp, image/webp"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {/* Next Button */}
        <button className="w-full bg-yellow-400 text-gray-800 py-2 rounded-lg font-semibold">
          Next
        </button>
      </div>
    </div>
  );
};

export default IdentityVerification;
