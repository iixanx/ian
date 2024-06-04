import React from 'react';
import AddAccountForm from '../components/AddAccountForm';
import '../app/globals.css';

const AddAccount: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">계정 추가</h1>
      <AddAccountForm />
    </div>
  );
};

export default AddAccount;
