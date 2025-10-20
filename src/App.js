import React from 'react';
import './App.css';
 
function App() {

  return (
<div className="App">
<header className="App-header">
<h1>🚀 React Demo com CI/CD</h1>
<p>Pipeline automatizado com GitHub Actions</p>
<p>

          Editar <code>src/App.js</code> e salvar para recarregar.
</p>
</header>
</div>

  );

}
 
export default App;
 
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
 
