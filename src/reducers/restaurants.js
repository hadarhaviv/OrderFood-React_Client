import Types from "../actions/actionTypes";

const INITIAL_STATE = {
  restaurants: [],
  curRestaurant: {}
};

export default function restaurants(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_RESTAURANTS_SUCCESS: {
      return {
        ...state,
        restaurants: action.restaurants
      };
    }
    case Types.GET_RESTAURANT_BY_ID_SUCCESS: {
      return {
        ...state,
        curRestaurant: action.restaurant
      };
    }
    case Types.GET_RESTAURANT_BY_OWNER_SUCCESS: {
      return {
        ...state,
        curRestaurant: action.restaurant
      };
    }
    case Types.UPDATE_MENU_SUCCESS: {
      return {
        ...state,
        curRestaurant: action.restaurant
      };
    }
    default: {
      return state;
    }
  }
}
