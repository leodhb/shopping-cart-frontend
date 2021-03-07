import api from './api';

const getCart = async (sessionId) => {
  const response = await api.get(`/cart/${sessionId}`);
  return response.data;
};

const addToCart = async (sku, amount, sessionId) => {
  const response = await api.put(`/cart/${sessionId}`, {
    sku: sku,
    qty: amount,
  });
  return response.data;
};

const updateCart = async (sku, amount, sessionId) => {
  const response = await api.patch(`/cart/${sessionId}`, {
    sku: sku,
    qty: amount,
  });
  return response.data;
};

const deleteFromCart = async (sku, sessionId) => {
  const response = await api.delete(`/cart/${sessionId}/${sku}`);
  return response.data;
};

const CartService = {
  getCart,
  addToCart,
  updateCart,
  deleteFromCart,
};
export default CartService;
