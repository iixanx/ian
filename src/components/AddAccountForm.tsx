import React, { useState } from 'react';
import '../app/globals.css';

const AddAccountForm: React.FC = () => {
  const [accountName, setAccountName] = useState('');
  const [accountDescription, setAccountDescription] = useState('');

  const handleSubmit = () => {
    window.location.href = '/';
  };

  return (
    <div className="w-full max-w-md">
      <input
        className="border p-2 mb-4 w-full"
        type="text"
        placeholder="계정 이름"
        value={accountName}
        onChange={(e) => setAccountName(e.target.value)}
      />
      <input
        className="border p-2 mb-4 w-full"
        type="text"
        placeholder="계정 설명 (선택)"
        value={accountDescription}
        onChange={(e) => setAccountDescription(e.target.value)}
      />
      <button 
        className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200 w-full"
        onClick={handleSubmit}
      >
        추가
      </button>
    </div>
  );
};

export default AddAccountForm;
