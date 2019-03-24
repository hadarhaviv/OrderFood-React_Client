import Types from "./actionTypes";

export const getRestaurants = () => ({
  type: Types.GET_RESTAURANTS
});

export const getRestaurantsSuccess = restaurants => ({
  type: Types.GET_RESTAURANTS_SUCCESS,
  restaurants
});

export const getRestaurantById = id => ({
  type: Types.GET_RESTAURANT_BY_ID,
  id
});

export const getRestaurantByIdSuccess = restaurant => ({
  type: Types.GET_RESTAURANT_BY_ID_SUCCESS,
  restaurant
});
