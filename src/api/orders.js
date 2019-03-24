import axios from "axios";

export const submitOrderApi = ({ order }) => {
  return axios.post("/order", {
    order
  });
};
