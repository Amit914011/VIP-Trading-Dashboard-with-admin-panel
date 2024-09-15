import React, { useState } from 'react';

function Admin_P_to_P_Transfer() {
  const [formData, setFormData] = useState({
    userId: '',
    userName: '',
    payType: 'Fund Wallet To Fund Wallet',
    amount: '',
    otp: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen w-[80%] m-auto background-color border rounded-xl text-white flex justify-center items-center p-4 transition-all duration-300">
      <div className=" w-full  p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-center mb-6"> P To P Transfer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* User ID Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300">User ID</label>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:shadow-lg transition-all duration-200 sm:text-sm"
              placeholder="Enter User Id"
            />
          </div>

          {/* User Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300">User Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:shadow-lg transition-all duration-200 sm:text-sm"
              placeholder="User name"
            />
          </div>

          {/* Pay Type Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Select Pay Type</label>
            <select
              name="payType"
              value={formData.payType}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-green-500 focus:border-green-500 focus:shadow-lg transition-all duration-200 sm:text-sm"
            >
              <option>Fund Wallet To Fund Wallet</option>
            </select>
          </div>

          {/* Amount Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Amount in $</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:shadow-lg transition-all duration-200 sm:text-sm"
              placeholder="Amount"
            />
          </div>

          {/* OTP Field and Send OTP Button */}
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300">Enter OTP</label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:shadow-lg transition-all duration-200 sm:text-sm"
                placeholder="Please enter OTP"
              />
            </div>
            <button
              type="button"
              className="mt-6 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
            >
              Send OTP
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform duration-200 hover:scale-105"
          >
            Process Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin_P_to_P_Transfer;