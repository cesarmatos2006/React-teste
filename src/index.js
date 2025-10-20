import React from 'react';

import ReactDOM from 'react-dom/client';

import './App.css';

import App from './App';
 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
<App />
</React.StrictMode>

);
 
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import App from './App';
 
test('renders title correctly', () => {

  render(<App />);

  const titleElement = screen.getByText(/React Demo/i);

  expect(titleElement).toBeInTheDocument();

});
 
