// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AccountForm from './components/AccountForm';
import AccountList from './components/AccountList';

function BankingApp() {
  const [accounts, setAccounts] = useState([]);
  const [editAccount, setEditAccount] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/accounts');
        setAccounts(response.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };
    fetchAccounts();
  }, []);

  const addAccount = async (account) => {
    try {
      const addedAccount = await axios.post('http://localhost:4000/accounts', account);
      setAccounts([...accounts, addedAccount.data]);
    } catch (error) {
      console.error('Error adding account:', error);
    }
  };

  const deleteAccount = async (accountId) => {
    try {
      await axios.delete(`http://localhost:4000/accounts/${accountId}`);
      setAccounts(accounts.filter((account) => account.id !== accountId));
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  const updateAccount = async (account) => {
    try {
      await axios.put(`http://localhost:4000/accounts/${account.id}`, account);
      setAccounts(
        accounts.map((a) => (a.id === account.id ? { ...a, ...account } : a))
      );
      setEditAccount(null);
    } catch (error) {
      console.error('Error updating account:', error);
    }
  };

  return (
    <div>
      <h2>Welcome to Your Virtual Banking App</h2>
      <h2>Add Account</h2>
      <AccountForm addAccount={addAccount} editAccount={editAccount} updateAccount={updateAccount} />
      <h2>Accounts List</h2>
      <AccountList
        accounts={accounts}
        deleteAccount={deleteAccount}
        setEditAccount={setEditAccount}
      />
    </div>
  );
}

export default BankingApp;
