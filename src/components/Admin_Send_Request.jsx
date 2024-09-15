import React, { useState } from 'react';

const Admin_Send_Request = () => {
  const [transactionType, setTransactionType] = useState('');
  
  const handleTransactionChange = (e) => {
    setTransactionType(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-auto background-color border rounded-xl font-poppins">
      <div className="background-color text-white p-8 rounded-lg shadow-lg w-full max-w-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-3xl font-bold mb-6 text-center">Deposit Method</h2>
        
        {/* Transaction Type Dropdown */}
        <select
          className="w-full bg-gray-900 text-white p-3 border border-gray-600 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200 ease-in-out"
          value={transactionType}
          onChange={handleTransactionChange}
        >
          <option value="">Transaction Type</option>
          <option value="INDIAN_CASE">INDIAN CASH</option>
          <option value="USDT">USDT CASH</option>
        </select>

        {/* INDIAN CASE Form */}
        {transactionType === 'INDIAN_CASE' && (
          <div className="bg-gray-700 p-6 rounded-lg mb-4 animate_animated animate_fadeIn">
            <h3 className="text-xl font-semibold mb-4 text-red-500 animate-pulse">Important Note*</h3>
            <p className="text-sm mb-2 text-red-300">Please make sure to deposit in Indian currency only.</p>
            <p className="text-sm mb-2 text-red-300">Transaction processing time is 24-48 hours.</p>
            <p className="text-sm mb-2 text-red-300">All deposits are non-refundable.</p>
            <p className="text-sm mb-4 text-red-300">Contact support if you face any issues.</p>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Currency</label>
              <input
                type="text"
                value="INR"
                readOnly
                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Deposit Amount</label>
              <input
                type="number"
                placeholder="Enter deposit amount"
                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded"
              />
            </div>
          </div>
        )}

        {/* USDT CASE Form */}
        {transactionType === 'USDT' && (
          <div className="bg-gray-700 p-6 rounded-lg mb-4 animate_animated animate_fadeIn">
            <h3 className="text-xl font-semibold mb-4 text-red-500 animate-pulse">Important Note*</h3>
            <p className="text-sm mb-2 text-red-300">Please make sure to deposit in USDT only.</p>
            <p className="text-sm mb-2 text-red-300">Transaction processing time is 12-24 hours.</p>
            <p className="text-sm mb-2 text-red-300">USDT deposits are final and non-refundable.</p>
            <p className="text-sm mb-4 text-red-300">For assistance, contact support.</p>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Currency</label>
              <input
                type="text"
                value="USDT"
                readOnly
                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Deposit Amount</label>
              <input
                type="number"
                placeholder="Enter deposit amount"
                className="w-full p-3 bg-gray-900 text-white border border-gray-600 rounded"
              />
            </div>
          </div>
        )}

        {/* Confirm Button */}
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded transition-transform duration-200 ease-in-out transform hover:scale-105">
          Confirm your request
        </button>
      </div>
    </div>
  );
};

export default Admin_Send_Request;