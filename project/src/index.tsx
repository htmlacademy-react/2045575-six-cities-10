import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { properties } from './mocks/properties';

const PROPERTY_CARDS_COUNT = 10;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      propertyCardsCount={PROPERTY_CARDS_COUNT}
      properties={properties}
    />
  </React.StrictMode>
);
