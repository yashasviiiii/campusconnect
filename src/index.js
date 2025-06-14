import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // ✅ This line is **critical**

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("App is:", App); // Add this line
root.render(
  <React.StrictMode>
    <App /> {/* ✅ If `App` is not a valid function, this fails */}
  </React.StrictMode>
);

