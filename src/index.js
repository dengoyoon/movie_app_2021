import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// <App /> is component, React works with component. All is component
// component is a function that returns HTML
// React Application can only render one component at a time
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
