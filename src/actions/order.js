import Types from "./actionTypes";

export const addToCart = item => ({
  type: Types.ADD_TO_CART,
  item
});

export const removeFromCart = itemid => ({
  type: Types.REMOVE_FROM_CART,
  itemid
});

export const submitOrder = order => ({
  type: Types.SUBMIT_ORDER,
  order
});
