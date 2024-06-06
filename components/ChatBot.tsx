"use client";

import React, { useState, useEffect } from 'react';
import WelcomeScreen from './WelcomeScreen';
import CategorySelection from './CategorySelection';
import Fylkestingets3Samling2024 from './Fylkestingets3Samling2024';
import EksamenForElever from './EksamenForElever';
import EksamenForPrivatister from './EksamenForPrivatister';
import Skoler from './Skoler';
import Reise from './Reise';
import Skoleferie from './Skoleferie';

const Chatbot: React.FC = () => {
  const [language, setLanguage] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{ text: string, from: 'bot' | 'user' }>>([]);

  const addMessage = (text: string, from: 'bot' | 'user') => {
    setMessages(prevMessages => [...prevMessages, { text, from }]);
  };

  const handleLanguageSelect = (language: string) => {
    setLanguage(language);
    addMessage(`Selected language: ${language}`, 'user');
    addMessage("Hva vil du gjøre?", 'bot');
  };

  const handleCategorySelect = (category: string) => {
    setCategory(category);
    addMessage(`Selected category: ${category}`, 'user');
  };

  useEffect(() => {
    if (!language) {
      addMessage("Hei! Velkommen til NFKs virtuelle assistent. Hvordan kan jeg hjelpe deg i dag?", 'bot');
    }
  }, [language]);

  const renderCategoryComponent = () => {
    switch (category) {
      case 'Fylkestingets3Samling2024':
        return <Fylkestingets3Samling2024 />;
      case 'EksamenForElever':
        return <EksamenForElever />;
      case 'EksamenForPrivatister':
        return <EksamenForPrivatister />;
      case 'Skoler':
        return <Skoler />;
      case 'Reise':
        return <Reise />;
      case 'Skoleferie':
        return <Skoleferie />;
      default:
        return <CategorySelection onSelectCategory={handleCategorySelect} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded">
        <div className="flex flex-col space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 rounded ${msg.from === 'bot' ? 'bg-blue-100 text-left' : 'bg-green-100 text-right'}`}>
              {msg.text}
            </div>
          ))}
        </div>
        {!language ? (
          <WelcomeScreen onLanguageSelect={handleLanguageSelect} />
        ) : (
          renderCategoryComponent()
        )}
      </div>
    </div>
  );
};

export default Chatbot;
