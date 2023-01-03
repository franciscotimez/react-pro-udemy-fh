import React from 'react';
import ReactDOM from 'react-dom';

import { MapsApp } from './MapsApp';

if (!navigator.geolocation) {
  alert('Geo location is missing');
  throw new Error("Geolocation is missing");
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
