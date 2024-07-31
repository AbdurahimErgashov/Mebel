import React from 'react';
import { createRoot } from 'react-dom/client'; // createRoot ni import qilamiz
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot ni ishlatamiz

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
