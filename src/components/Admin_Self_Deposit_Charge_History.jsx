import React from 'react';

function Admin_Self_Deposit_Charge_History() {
  return (
    <div className="min-h-screen background-color border rounded-xl text-white p-4 sm:p-8">
      <div className="max-w-5xl mx-auto bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
          <h2 className="text-xl font-semibold bg-gray-600 p-3 rounded-lg text-center">Self Deposit Charges History</h2>
          <p className="text-sm text-gray-400 text-center sm:text-right">Dashboard / Self Deposit Charges History</p>
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

        {/* Table */}
        <div className="bg-gray-700 p-4 rounded-md overflow-x-auto">
          <table className="min-w-full table-auto text-left">
            <thead>
              <tr className="text-gray-300">
                <th className="px-4 py-2 border-b border-gray-600 text-xs sm:text-sm">Sr No.</th>
                <th className="px-4 py-2 border-b border-gray-600 text-xs sm:text-sm">Amount In $ (Percent)</th>
                <th className="px-4 py-2 border-b border-gray-600 text-xs sm:text-sm">Charges</th>
                <th className="px-4 py-2 border-b border-gray-600 text-xs sm:text-sm">Final Amount</th>
                <th className="px-4 py-2 border-b border-gray-600 text-xs sm:text-sm">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-center text-xs sm:text-sm" colSpan="5">Result Not Found</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-right font-semibold text-xs sm:text-sm" colSpan="2">Total Amount</td>
                <td className="px-4 py-2 text-center font-semibold text-xs sm:text-sm">$0.00</td>
                <td className="px-4 py-2 text-center font-semibold text-xs sm:text-sm">$0.00</td>
                <td className="px-4 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin_Self_Deposit_Charge_History;