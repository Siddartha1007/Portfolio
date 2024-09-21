import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter basename = "/Portfolio/">
      <App />
    </HashRouter>
  </StrictMode>,
);
