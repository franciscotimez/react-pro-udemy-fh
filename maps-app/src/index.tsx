import React from 'react';
import ReactDOM from 'react-dom/client';

import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbnRpbWV6IiwiYSI6ImNsY2dqM3Y5cDNka3kzcGw3bG01b3I0encifQ.Ti2e1awq7MT8PLLkI-goSg';

if (!navigator.geolocation) {
  alert('Geo location is missing');
  throw new Error("Geolocation is missing");
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
