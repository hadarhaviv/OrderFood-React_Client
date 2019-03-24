import axios from "axios";

export const getRestaurantsApi = () => {
  return axios.get("/restaurant/all");
};

export const getRestaurantByIdApi = id => {
  return axios.get("/restaurant/" + id);
};

