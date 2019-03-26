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

export const getRestaurantByOwner = id => ({
  type: Types.GET_RESTAURANT_BY_OWNER,
  id
});

export const getRestaurantByOwnerSuccess = restaurant => ({
  type: Types.GET_RESTAURANT_BY_OWNER_SUCCESS,
  restaurant
});

export const getRestaurantByIdSuccess = restaurant => ({
  type: Types.GET_RESTAURANT_BY_ID_SUCCESS,
  restaurant
});

export const updateResMenu = (menu, id) => ({
  type: Types.UPDATE_MENU,
  menu,
  id
});

export const updateResSuccess = restaurant => ({
  type: Types.UPDATE_MENU_SUCCESS,
  restaurant
});

export const updateHours = (hours, id) => ({
  type: Types.UPDATE_HOURS,
  hours,
  id
});

export const updateHoursSuccess = restaurant => ({
  type: Types.UPDATE_HOURS_SUCCESS,
  restaurant
});
