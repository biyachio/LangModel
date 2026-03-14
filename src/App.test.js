// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LangModel title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LangModel/i);
    expect(titleElement).toBeInTheDocument();
});
