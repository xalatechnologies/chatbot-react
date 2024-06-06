import React, { useState } from 'react';

const SearchPublicTransport: React.FC = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSearch = () => {
    // Implement search logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Søk etter kollektivtransport</h1>
      <div className="space-y-4 w-full max-w-md">
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
          placeholder="Dato:" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          className="w-full p-2 border rounded"
        />
        <input 
          type="time" 
          placeholder="Klokkeslett:" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
          className="w-full p-2 border rounded"
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded w-full">Søk</button>
      </div>
    </div>
  );
};

export default SearchPublicTransport;
