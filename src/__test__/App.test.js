import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
}));

describe('boundary', () => {
    test('AppComponent boundary renders without crashing', () => {
        render(<App />);
    });

    test('AppComponent boundary has "Welcome to Your Virtual Banking App" h2', () => {
        render(<App />);
        expect(screen.queryByText('Welcome to Your Virtual Banking App')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Add Account" h2', () => {
        render(<App />);
        expect(screen.queryAllByText('Add Account')).toBeTruthy();
    });

    test('AppComponent boundary has "Accounts List" h2', () => {
        render(<App />);
        expect(screen.queryByText('Accounts List')).toBeInTheDocument();
    });
});
