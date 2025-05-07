import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // لو كان عندك ملف CSS عام

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
