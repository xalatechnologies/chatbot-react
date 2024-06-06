"use client";

import React from 'react';

const CategorySelection: React.FC<{ actionProvider: any }> = ({ actionProvider }) => {
  return (
    <div className="mt-4">
      <div className="space-y-4">
        <button onClick={actionProvider.handleFylkestingets3Samling2024} className="px-4 py-2 bg-blue-500 text-white rounded">Fylkestingets 3. samling 2024</button>
        <button onClick={actionProvider.handleEksamenForElever} className="px-4 py-2 bg-blue-500 text-white rounded">Eksamen for elever</button>
        <button onClick={actionProvider.handleEksamenForPrivatister} className="px-4 py-2 bg-blue-500 text-white rounded">Eksamen for privatister</button>
        <button onClick={actionProvider.handleSkoler} className="px-4 py-2 bg-blue-500 text-white rounded">Skoler</button>
        <button onClick={actionProvider.handleReise} className="px-4 py-2 bg-blue-500 text-white rounded">Reise med buss, hurtigbåt og ferge</button>
        <button onClick={actionProvider.handleSkoleferie} className="px-4 py-2 bg-blue-500 text-white rounded">Skoleferie og fridager</button>
      </div>
    </div>
  );
};

export default CategorySelection;
