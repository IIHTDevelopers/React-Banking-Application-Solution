// AccountList.js
import React, { useState } from 'react';

const AccountList = ({ accounts, deleteAccount, setEditAccount }) => {
    const [filters, setFilters] = useState({ name: '' });

    const filteredAccounts = accounts.filter((account) => {
        return account.name.toLowerCase().includes(filters.name.toLowerCase());
    });

    const handleDelete = (id) => {
        deleteAccount(id);
    };

    const handleEdit = (account) => {
        setEditAccount(account);
    };

    return (
        <div>
            <div>
                <label htmlFor="name">
                    Filter by Name:
                    <input
                        id="name"
                        type="text"
                        value={filters.name}
                        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                    />
                </label>
            </div>
            <ul>
                {filteredAccounts.length > 0 ? (
                    filteredAccounts.map((account) => (
                        <li key={account.id}>
                            <strong>Name:</strong> {account.name}
                            <br />
                            <strong>Address:</strong> {account.address}
                            {/* Display other account details */}
                            <button onClick={() => handleEdit(account)}>Edit</button>
                            <button onClick={() => handleDelete(account.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <li>No accounts found</li>
                )}
            </ul>
        </div>
    );
};

export default AccountList;
