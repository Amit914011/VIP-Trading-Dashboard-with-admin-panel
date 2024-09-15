import React, { useState } from 'react';

function Admin_P_To_P_History() {
  const [activeTab, setActiveTab] = useState('transfer');
  
  // Dummy data for transfer and receive histories
  const transferData = {
    totalAmount: 5000,
    commission: 100,
    entries: []
  };

  const receiveData = {
    totalAmount: 2000,
    commission: 50,
    entries: []
  };

  const renderTable = (data) => (
    <>
      <div className="flex justify-between mb-4">
        <div className="text-sm sm:text-base">
          <span className="font-semibold">Total Amount:</span> ${data.totalAmount.toFixed(2)}
        </div>
        <div className="text-sm sm:text-base">
          <span className="font-semibold">Commission:</span> ${data.commission.toFixed(2)}
        </div>
      </div>
      <div className="bg-gray-700 p-4 rounded-md overflow-x-auto">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="text-gray-300">
              <th className="px-4 py-2 border-b border-gray-600 text-xs sm:text-sm">Sr No.</th>
              <th className="px-4 py-2 border-b border-gray-600 text-xs sm:text-sm">From</th>
              <th className="px-4 py-2 border-b border-gray-600 text-xs sm:text-sm">To User ID</th>
              <th className="px-4 py-2 border-b border-gray-600 text-xs sm:text-sm">To User Name</th>
              <th className="px-4 py-2 border-b border-gray-600 text-xs sm:text-sm">Amount</th>
              <th className="px-4 py-2 border-b border-gray-600 text-xs sm:text-sm">Commission</th>
              <th className="px-4 py-2 border-b border-gray-600 text-xs sm:text-sm">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.entries.length > 0 ? (
              data.entries.map((entry, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{entry.from}</td>
                  <td className="px-4 py-2">{entry.toUserId}</td>
                  <td className="px-4 py-2">{entry.toUserName}</td>
                  <td className="px-4 py-2">${entry.amount.toFixed(2)}</td>
                  <td className="px-4 py-2">${entry.commission.toFixed(2)}</td>
                  <td className="px-4 py-2">{entry.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2 text-center text-xs sm:text-sm" colSpan="7">Result Not Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );

  return (
    <div className="min-h-screen background-color border rounded-xl text-white p-4 sm:p-8">
      <div className="max-w-5xl mx-auto bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
          <h2 className="text-xl font-semibold bg-gray-600 p-3 rounded-lg text-center">Fund Transfer History</h2>
          <p className="text-sm text-gray-400 text-center sm:text-right">Dashboard / Fund Transfer History</p>
        </div>

        {/* Date Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <div className="w-full md:flex-1">
            <label className="block text-sm font-medium text-gray-300">From Date</label>
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-500 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full md:flex-1">
            <label className="block text-sm font-medium text-gray-300">To Date</label>
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-500 text-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-auto">
            <button
              className="mt-4 md:mt-6 w-full md:w-auto px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Search
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center md:justify-start space-x-4 mb-4 border-b border-gray-500">
          <button
            className={`py-2 px-4 text-sm sm:text-base ${
              activeTab === 'transfer' ? 'bg-gray-900 text-white' : 'text-gray-300'
            }`}
            onClick={() => setActiveTab('transfer')}
          >
            Transfer History
          </button>
          <button
            className={`py-2 px-4 text-sm sm:text-base ${
              activeTab === 'receive' ? 'bg-gray-900 text-white' : 'text-gray-300'
            }`}
            onClick={() => setActiveTab('receive')}
          >
            Receive History
          </button>
        </div>

        {/* Table Content */}
        {activeTab === 'transfer' ? renderTable(transferData) : renderTable(receiveData)}
      </div>
    </div>
  );
}

export default Admin_P_To_P_History;