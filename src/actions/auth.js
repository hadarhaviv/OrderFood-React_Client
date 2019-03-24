import Types from "./actionTypes";
import setAuthToken from "../utills/setAuthToken";

export const userLogin = credentials => ({
  type: Types.USER_LOGIN,
  credentials
});

export const adminLogin = credentials => ({
  type: Types.ADMIN_LOGIN,
  credentials
});

export const loginSuccess = (token) => {
  localStorage.setItem("jwtToken", token);
  setAuthToken(token);
  return {
    type: Types.LOGIN_SUCCESS,
    token
  };
};

// export const setCurrentUser = decoded => {
//   return {
//     type: Types.SET_CURRENT_USER,
//     payload: decoded
//   };
// };
