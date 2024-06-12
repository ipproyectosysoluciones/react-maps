import axios from 'axios';

const token = process.env.REACT_APP_ACCESS_TOKEN_API_MAPBOX;

if (!token) {
  console.error("REACT_APP_ACCESS_TOKEN_API_MAPBOX no está definido.");
}

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
  params: {
    limit: 5,
    lenguage: 'es',
    access_token: token,
  },
});

export default searchApi;