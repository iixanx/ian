import React from 'react';
import AccountList from '../components/AccountList';
import '../app/globals.css';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">OTP 서비스</h1>
      <AccountList />
      <div className="text-center">
        <button 
          className="mt-4 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200"
          onClick={() => window.location.href='/add-account'}
        >
          계정 추가
        </button>
      </div>
    </div>
  );
};

export default Home;
