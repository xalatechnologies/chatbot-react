"use client";

import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../lib/config';
import ActionProvider from '../lib/ActionProvider';
import MessageParser from '../lib/MessageParser';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
};

export default Home;
