import Types from "../actions/actionTypes";
import jwt_decode from "jwt-decode";

const INITIAL_STATE = {
  user: {},
  token: null
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_SUCCESS: {
      const user = jwt_decode(action.token);
      return {
        ...state,
        token: action.token,
        user
      };
    }
    default: {
      return state;
    }
  }
}
