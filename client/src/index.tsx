import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Content_app from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Content_app.App />
    </BrowserRouter>
  </React.StrictMode>
);

