import api from './api';

const getProducts = async () => {
  const response = await api.get(`/products`);
  return response.data;
};

const ProductsService = {
  getProducts,
};

export default ProductsService;
