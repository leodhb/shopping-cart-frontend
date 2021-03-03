import axios from 'axios';

const api = axios.create({
  baseURL: `https://18.230.60.184:3000/`,
});

export default api;
