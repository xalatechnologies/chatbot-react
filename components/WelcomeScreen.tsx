"use client";

import React from 'react';

const WelcomeScreen: React.FC<{ onLanguageSelect: (language: string) => void }> = ({ onLanguageSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">NFK Virtual Assistant</h1>
      <p className="text-lg mb-6">Hei! Velkommen til NFKs virtuelle assistent. Hvordan kan jeg hjelpe deg i dag?</p>
      <div className="flex space-x-4">
        <button onClick={() => onLanguageSelect('Norwegian')} className="px-4 py-2 bg-blue-500 text-white rounded">Norwegian</button>
        <button onClick={() => onLanguageSelect('English')} className="px-4 py-2 bg-green-500 text-white rounded">English</button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
