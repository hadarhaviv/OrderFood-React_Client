import axios from "axios";

export const getRestaurantsApi = () => {
  return axios.get("/restaurant/all");
};

export const getRestaurantByIdApi = id => {
  return axios.get("/restaurant/" + id);
};

export const getRestaurantByOwnerApi = id => {
  return axios.get("/restaurant/owner/" + id);
};

export const updateMenu = (menu, id) => {
  return axios.post(`/restaurant/${id}/menu`, menu);
};

export const updateHours = (hours, id) => {
  return axios.post(`/restaurant/${id}/hours`, hours);
};
