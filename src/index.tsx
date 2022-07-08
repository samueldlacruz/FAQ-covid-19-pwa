import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.register();
reportWebVitals();
