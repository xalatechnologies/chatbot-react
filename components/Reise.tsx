"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from '../lib/Route';

const Reise: React.FC = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    const today = new Date();
    const defaultDate = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    const defaultTime = today.toTimeString().split(' ')[0].substring(0, 5); // Format: HH:MM

    setDate(defaultDate);
    setTime(defaultTime);
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/travel-routes/${from}/${to}`);
      if (response.data.status === 'OK') {
        setRoutes(response.data.routes);
      } else {
        setRoutes([]);
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching travel routes:', error);
      alert('An error occurred while searching for routes.');
    }
  };

  return (
    <div className="mt-4">
      <div className="space-y-4">
        <input 
          type="text" 
          placeholder="Fra:" 
          value={from} 
          onChange={(e) => setFrom(e.target.value)} 
          className="w-full p-2 border rounded"
        />
        <input 
          type="text" 
          placeholder="Til:" 
          value={to} 
          onChange={(e) => setTo(e.target.value)} 
          className="w-full p-2 border rounded"
        />
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          className="w-full p-2 border rounded"
        />
        <input 
          type="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
          className="w-full p-2 border rounded"
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded w-full">Søk</button>
      </div>
      {routes.length > 0 && (
        <div className="mt-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Reiseruter</h2>
          <div className="space-y-4">
            {routes.map((route, index) => (
              <div key={index} className="border p-4 rounded shadow">
                <p>Origin: {route.origin}</p>
                <p>Destination: {route.destination}</p>
                <p>Departure: {route.departureTime}</p>
                <p>Arrival: {route.arrivalTime}</p>
                <p>Duration: {route.duration}</p>
                <p>Mode: {route.mode}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reise;
