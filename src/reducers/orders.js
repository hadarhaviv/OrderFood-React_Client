import Types from "../actions/actionTypes";

const INITIAL_STATE = {
  cart: {},
  totalPrice: 0,
  orderComplete: false,
  loading: false
};

export default function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TO_CART: {
      const newItem = action.item;
      const newCart = { ...state.cart };
      if (newCart[newItem._id]) {
        newCart[newItem._id].quantity++;
      } else {
        newCart[newItem._id] = newItem;
        newCart[newItem._id].quantity = 1;
      }
      return {
        ...state,
        cart: newCart
      };
    }
    case Types.REMOVE_FROM_CART: {
      const newCart = { ...state.cart };
      const itemid = action.itemid;
      if (newCart[itemid]) {
        newCart[itemid].quantity--;
        if (!newCart[itemid].quantity) {
          delete newCart[itemid];
        }
      } else {
        console.log("no item to delete");
      }
      return {
        ...state,
        cart: newCart
      };
    }
    case Types.SUBMIT_ORDER: {
      return {
        ...state,
        loading: true,
        orderComplete: false
      };
    }
    case Types.ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
        orderComplete: true
      };
    }
    default: {
      return state;
    }
  }
}
