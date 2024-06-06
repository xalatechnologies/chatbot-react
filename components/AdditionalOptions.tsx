import React from 'react';

const AdditionalOptions: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button className="px-4 py-2 bg-blue-500 text-white rounded mb-4">Still et annet spørsmål</button>
      <button className="px-4 py-2 bg-green-500 text-white rounded">Kontakt oss</button>
    </div>
  );
};

export default AdditionalOptions;
