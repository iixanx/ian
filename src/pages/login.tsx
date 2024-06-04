import React from 'react';
import AuthForm from '../components/AuthForm';
import '../app/globals.css';

const Login: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">로그인</h1>
      <AuthForm type="login" />
      <button 
        className="mt-4 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200"
        onClick={() => window.location.href='/register'}
      >
        회원가입
      </button>
    </div>
  );
};

export default Login;