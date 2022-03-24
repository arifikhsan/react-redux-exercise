import { CART_PRODUCT_ADDED } from './action-types';

export function cartProductAdded(cartProduct = {}) {
  return {
    type: CART_PRODUCT_ADDED,
    payload: {
      id: product.id ? product.id : null,
      quantity: product.quantity ? product.quantity : null,
    },
  };
}
