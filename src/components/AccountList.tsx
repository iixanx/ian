import React from 'react';
import '../app/globals.css';

const accounts = [
  { id: 1, name: 'Account 1', otp: '123456' },
  { id: 2, name: 'Account 2', otp: '654321' }
];

const AccountList: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">계정 리스트</h2>
      <ul className="space-y-2">
        {accounts.map(account => (
          <li key={account.id} className="p-4 bg-gray-50 rounded shadow">
            <div className="text-lg font-semibold">{account.name}</div>
            <div className="text-gray-700">OTP: {account.otp}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
