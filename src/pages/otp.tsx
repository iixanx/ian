import React, { useState } from 'react';
import '../app/globals.css';

const OTP: React.FC = () => {
  const [otp, setOtp] = useState('');

  const handleSubmit = () => {
    window.location.href = '/login';
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">OTP 번호 입력</h1>
      <input
        className="border p-2 mb-4 w-full max-w-md"
        type="text"
        placeholder="OTP 번호 입력"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button 
        className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200"
        onClick={handleSubmit}
      >
        확인
      </button>
    </div>
  );
};

export default OTP;
