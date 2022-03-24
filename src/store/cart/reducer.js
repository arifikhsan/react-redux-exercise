import { CART_PRODUCT_ADDED, CART_PRODUCT_REMOVED } from './action-types';

let lastId = 0;
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CART_PRODUCT_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          productId: action.payload.productId,
          quantity: action.payload.quantity,
        },
      ];

    case CART_PRODUCT_REMOVED:
      return state.filter((product) => product.id !== action.payload.id);

    default:
      return state;
  }
}
