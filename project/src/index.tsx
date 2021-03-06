import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { properties } from './mocks/properties';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      properties={properties}
    />
  </React.StrictMode>
);
