import React from 'react';

const TrafficInformation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Sanntids trafikkinformasjon</h1>
      <div className="w-full max-w-4xl">
        {/* Replace with actual map implementation */}
        <div className="bg-gray-300 w-full h-64 mb-4">Interactive Map</div>
        <div className="flex justify-between mb-4">
          <span className="text-green-500">Green: Smooth</span>
          <span className="text-yellow-500">Yellow: Moderate</span>
          <span className="text-red-500">Red: Heavy</span>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Refresh</button>
      </div>
    </div>
  );
};

export default TrafficInformation;
