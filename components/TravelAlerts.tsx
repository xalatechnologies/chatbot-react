import React from 'react';

const TravelAlerts: React.FC = () => {
  // Replace with actual travel alerts
  const alerts = [
    { description: 'Road closed', affectedRoutes: 'Route 1', duration: '2h' },
    { description: 'Bus delay', affectedRoutes: 'Route 2', duration: '30m' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Reisevarsler</h1>
      <div className="space-y-4 w-full max-w-md">
        {alerts.map((alert, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <p>Description: {alert.description}</p>
            <p>Affected Routes: {alert.affectedRoutes}</p>
            <p>Duration: {alert.duration}</p>
            <button className="px-4 py-2 mt-2 bg-blue-500 text-white rounded">Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelAlerts;
