import axios from "axios";

export const userLoginApi = credentials => {
  return axios.post("/user/login", {
    email: credentials.email,
    password: credentials.password
  });
};

export const adminLoginApi = credentials => {
  return axios.post("/Owner/login", {
    email: credentials.email,
    password: credentials.password
  });
};
