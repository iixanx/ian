import React, { useState } from 'react';
import '../app/globals.css';

interface AuthFormProps {
  type: 'login' | 'register';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (type === 'login') {
      // 로그인 로직
      window.location.href = '/';
    } else {
      // 회원가입 로직
      if (password === confirmPassword) {
        window.location.href = '/login';
      } else {
        alert('비밀번호가 일치하지 않습니다.');
      }
    }
  };

  return (
    <div className="w-full max-w-md">
      <input
        className="border p-2 mb-4 w-full"
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        className="border p-2 mb-4 w-full"
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {type === 'register' && (
        <input
          className="border p-2 mb-4 w-full"
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      )}
      <button 
        className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200 w-full"
        onClick={handleSubmit}
      >
        {type === 'login' ? '로그인' : '회원가입'}
      </button>
    </div>
  );
};

export default AuthForm;
