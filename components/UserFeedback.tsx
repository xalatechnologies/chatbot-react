import React, { useState } from 'react';

const UserFeedback: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    // Implement feedback submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Din tilbakemelding</h1>
      <div className="space-y-4 w-full max-w-md">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => setRating(star)} className={`px-2 py-1 ${rating >= star ? 'text-yellow-500' : 'text-gray-400'}`}>
              ★
            </button>
          ))}
        </div>
        <textarea 
          placeholder="Additional feedback"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded w-full">Submit</button>
      </div>
    </div>
  );
};

export default UserFeedback;
