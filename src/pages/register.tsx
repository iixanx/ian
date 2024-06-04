'use client'

import React from 'react';
import AuthForm from '../components/AuthForm';
import '../app/globals.css';

const Register: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">회원가입</h1>
      <AuthForm type="register" />
      <button 
        className="mt-4 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200"
        onClick={() => window.location.href='/login'}
      >
        로그인
      </button>
    </div>
  );
};

export default Register;
