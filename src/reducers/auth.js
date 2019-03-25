import Types from "../actions/actionTypes";
import jwt_decode from "jwt-decode";

const INITIAL_STATE = {
  user: {},
  token: null,
  errors: []
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
    case Types.LOGOUT_USER: {
      return {
        ...state,
        token: null,
        user: {}
      };
    }
    case Types.HANDLE_ERRORS: {
      return {
        ...state,
        errors: action.errors
      };
    }
    default: {
      return state;
    }
  }
}
