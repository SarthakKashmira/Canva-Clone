import React from 'react';

const Plans = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Plans & Pricing</h1>
        <p className="mt-4 text-gray-600">Choose the plan that fits your needs.</p>
      </header>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Basic Plan */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800">Basic</h2>
          <p className="text-gray-600 mt-2">For individuals just getting started.</p>
          <div className="my-6">
            <span className="text-4xl font-bold text-gray-800">$9</span>
            <span className="text-gray-500">/ month</span>
          </div>
          <ul className="space-y-3">
            <li className="text-gray-600">✔ 1 Project</li>
            <li className="text-gray-600">✔ 5 GB Storage</li>
            <li className="text-gray-600">✔ Basic Support</li>
            <li className="text-gray-600">✘ Analytics</li>
          </ul>
          <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Choose Basic</button>
        </div>

        {/* Standard Plan */}
        <div className="bg-white shadow-lg rounded-lg p-8 border-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-800">Standard</h2>
          <p className="text-gray-600 mt-2">Best for small teams and businesses.</p>
          <div className="my-6">
            <span className="text-4xl font-bold text-gray-800">$29</span>
            <span className="text-gray-500">/ month</span>
          </div>
          <ul className="space-y-3">
            <li className="text-gray-600">✔ 10 Projects</li>
            <li className="text-gray-600">✔ 50 GB Storage</li>
            <li className="text-gray-600">✔ Priority Support</li>
            <li className="text-gray-600">✔ Analytics</li>
          </ul>
          <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Choose Standard</button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800">Premium</h2>
          <p className="text-gray-600 mt-2">For large organizations with advanced needs.</p>
          <div className="my-6">
            <span className="text-4xl font-bold text-gray-800">$99</span>
            <span className="text-gray-500">/ month</span>
          </div>
          <ul className="space-y-3">
            <li className="text-gray-600">✔ Unlimited Projects</li>
            <li className="text-gray-600">✔ 1 TB Storage</li>
            <li className="text-gray-600">✔ 24/7 Support</li>
            <li className="text-gray-600">✔ Advanced Analytics</li>
          </ul>
          <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Choose Premium</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
