import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccountList from '../components/AccountList';

const accounts = [
    { id: 1, name: 'Account 1', address: '123 Main St' },
    { id: 2, name: 'Account 2', address: '456 Elm St' },
];

const deleteAccount = jest.fn();
const setEditAccount = jest.fn();

describe('boundary', () => {
    beforeEach(() => {
        render(
            <AccountList
                accounts={accounts}
                deleteAccount={deleteAccount}
                setEditAccount={setEditAccount}
            />
        );
    });

    test('AccountListComponent boundary it has a "Filter by Name" text field', () => {
        const nameInput = screen.getByLabelText('Filter by Name:');
        expect(nameInput).toBeTruthy();
    });

    test('AccountListComponent boundary it displays the Name of an account after assigning values', async () => {
        const filterInput = screen.getByLabelText('Filter by Name:');
        fireEvent.change(filterInput, { target: { value: 'Account 1' } });
        const strongElement = await screen.findByText('Name:');
        expect(strongElement).toBeTruthy();
    });

    test('AccountListComponent boundary it displays the Address of an account after assigning values', async () => {
        const filterInput = screen.getByLabelText('Filter by Name:');
        fireEvent.change(filterInput, { target: { value: 'Account 1' } });
        const strongElement = await screen.findByText('Address:');
        expect(strongElement).toBeTruthy();
    });

    test('AccountListComponent boundary it displays the "Edit" button to edit the account', async () => {
        const editButtons = screen.getAllByText('Edit');
        expect(editButtons).toBeTruthy();
    });

    test('AccountListComponent boundary it calls deleteAccount when "Delete" button is clicked', () => {
        const deleteButtons = screen.getAllByText('Delete');
        fireEvent.click(deleteButtons[0]);
        expect(deleteAccount).toHaveBeenCalledWith(accounts[0].id);
    });

    test('AccountListComponent boundary it removes the account after clicking the "Delete" button', () => {
        const deleteButton = screen.getAllByText('Delete')[0];
        fireEvent.click(deleteButton);
        expect(screen.queryByText('Name: Account 1')).toBeNull();
        expect(screen.queryByText('Address: 123 Main St')).toBeNull();
    });

    test('AccountListComponent boundary it displays "No accounts found" when there are no accounts', async () => {
        render(
            <AccountList accounts={[]} deleteAccount={deleteAccount} setEditAccount={setEditAccount} />
        );
        const noAccountsMessage = await screen.findByText('No accounts found');
        expect(noAccountsMessage).toBeTruthy();
    });
});
