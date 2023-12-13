import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountForm from '../components/AccountForm';

const addAccountMock = jest.fn();
const updateAccountMock = jest.fn();

describe('boundary', () => {
    test('AccountFormComponent boundary it is rendered', () => {
        render(<AccountForm addAccount={addAccountMock} />);
        expect(screen.getByRole('heading')).toBeTruthy();
    });

    test('AccountFormComponent boundary it has "Add an Account" h2', () => {
        render(<AccountForm addAccount={addAccountMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Add an Account');
    });

    test('AccountFormComponent boundary it has "Edit Account" h2 when in edit mode', () => {
        render(<AccountForm editAccount={{ name: 'Edit Account' }} updateAccount={updateAccountMock} />);
        const h2Element = screen.getByRole('heading');
        expect(h2Element.textContent).toBe('Edit Account');
    });

    test('AccountFormComponent boundary it has name input field', () => {
        render(<AccountForm addAccount={addAccountMock} />);
        const nameInput = screen.getByLabelText('Name:');
        expect(nameInput).toBeTruthy();
    });

    test('AccountFormComponent boundary it has address input field', () => {
        render(<AccountForm addAccount={addAccountMock} />);
        const addressInput = screen.getByLabelText('Address:');
        expect(addressInput).toBeTruthy();
    });

    test('AccountFormComponent boundary it has number input field', () => {
        render(<AccountForm addAccount={addAccountMock} />);
        const numberInput = screen.getByLabelText('Phone Number:');
        expect(numberInput).toBeTruthy();
    });

    test('AccountFormComponent boundary it has accountNumber input field', () => {
        render(<AccountForm addAccount={addAccountMock} />);
        const accountNumberInput = screen.getByLabelText('Account Number:');
        expect(accountNumberInput).toBeTruthy();
    });

    test('AccountFormComponent boundary it has accountType input field', () => {
        render(<AccountForm addAccount={addAccountMock} />);
        const accountTypeInput = screen.getByLabelText('Account Type:');
        expect(accountTypeInput).toBeTruthy();
    });

    test('AccountFormComponent boundary it has an "Add Account" button', () => {
        render(<AccountForm addAccount={addAccountMock} />);
        const addButton = screen.getByRole('button', { name: 'Add Account' });
        expect(addButton).toBeTruthy();
    });

    test('AccountFormComponent boundary it has an "Update Account" button when in edit mode', () => {
        render(<AccountForm editAccount={{ name: 'Edit Account' }} updateAccount={updateAccountMock} />);
        const updateButton = screen.getByRole('button', { name: 'Update Account' });
        expect(updateButton).toBeTruthy();
    });
});
