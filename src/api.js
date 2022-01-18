import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.tvmaze.com/search',
});

export default api;
