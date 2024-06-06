import React from 'react';

const SearchResults: React.FC = () => {
  // Replace with actual search results
  const routes = [
    { departure: '08:00', arrival: '09:00', duration: '1h', mode: 'Bus' },
    { departure: '09:00', arrival: '10:00', duration: '1h', mode: 'Ferry' },
    { departure: '10:00', arrival: '11:00', duration: '1h', mode: 'Train' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Reiseruter</h1>
      <div className="space-y-4 w-full max-w-md">
        {routes.map((route, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <p>Departure: {route.departure}</p>
            <p>Arrival: {route.arrival}</p>
            <p>Duration: {route.duration}</p>
            <p>Mode: {route.mode}</p>
            <button className="px-4 py-2 mt-2 bg-blue-500 text-white rounded">Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
