import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  'pk.eyJ1IjoiYnBhcnJhIiwiYSI6ImNseDY5cW5wODFlY2MybXE0MWN2YnZ6bG0ifQ.1ljnfK4xxZjzWVU8PY6zuQ';

if ( !navigator.geolocation ) {
  alert( 'Tu navegador no tiene opción de Geolacation' );
  throw new Error( 'Tu navegador no tiene opción de Geolacation' );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

