import axios from 'axios';

const api = axios.create({
  baseURL: `https://shoppingcartapi1.herokuapp.com`,

});

export default api;
