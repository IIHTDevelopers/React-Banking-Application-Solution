// AccountForm.js
import React, { useState, useEffect } from 'react';

const AccountForm = ({ addAccount, editAccount, updateAccount }) => {
    const [account, setAccount] = useState({
        name: '',
        address: '',
        number: '',
        accountNumber: '',
        accountType: '',
    });

    useEffect(() => {
        if (editAccount) {
            setAccount({ ...editAccount });
        } else {
            setAccount({
                name: '',
                address: '',
                number: '',
                accountNumber: '',
                accountType: '',
            });
        }
    }, [editAccount]);

    const isEditForm = !!editAccount;

    const isFormIncomplete = !account.name || !account.address || !account.number || !account.accountNumber || !account.accountType;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditForm) {
            updateAccount(account);
        } else {
            addAccount(account);
        }
        setAccount({
            name: '',
            address: '',
            number: '',
            accountNumber: '',
            accountType: '',
        });
    };

    return (
        <div>
            <h2>{isEditForm ? 'Edit Account' : 'Add an Account'}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input
                        id="name"
                        type="text"
                        value={account.name}
                        onChange={(e) => setAccount({ ...account, name: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="address">
                    Address:
                    <input
                        id="address"
                        type="text"
                        value={account.address}
                        onChange={(e) => setAccount({ ...account, address: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="number">
                    Phone Number:
                    <input
                        id="number"
                        type="text"
                        value={account.number}
                        onChange={(e) => setAccount({ ...account, number: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="accountNumber">
                    Account Number:
                    <input
                        id="accountNumber"
                        type="text"
                        value={account.accountNumber}
                        onChange={(e) => setAccount({ ...account, accountNumber: e.target.value })}
                        required
                    />
                </label>
                <label htmlFor="accountType">
                    Account Type:
                    <input
                        id="accountType"
                        type="text"
                        value={account.accountType}
                        onChange={(e) => setAccount({ ...account, accountType: e.target.value })}
                        required
                    />
                </label>
                <button type="submit" disabled={isFormIncomplete}>
                    {isEditForm ? 'Update Account' : 'Add Account'}
                </button>
            </form>
        </div>
    );
};

export default AccountForm;
