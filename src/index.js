import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './Components/Calculator';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return(
    <div>
      <Calculator />
    </div>
  );
}
root.render(<App />);
