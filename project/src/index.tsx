import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const PLACE_CARDS_COUNT = 10;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placeCardsCount={PLACE_CARDS_COUNT}
    />
  </React.StrictMode>
);
