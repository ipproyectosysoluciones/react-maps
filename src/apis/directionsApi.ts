import axios from 'axios';

const token = process.env.REACT_APP_ACCESS_TOKEN_API_MAPBOX;

if (!token) {
  console.error("REACT_APP_ACCESS_TOKEN_API_MAPBOX no está definido.");
}

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: token,
  },
});

export default directionsApi;
