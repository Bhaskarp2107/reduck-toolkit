import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store'; // or './app/store' if that's the correct path
import { Provider } from 'react-redux';

import './index.css'; // optional: only if you have global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
