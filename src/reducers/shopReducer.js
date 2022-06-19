import {
  SHOP_LOGIN_REQUEST,
  SHOP_LOGIN_FAIL,
  SHOP_LOGIN_SUCCESS,
  SHOP_LOGOUT_SUCCESS,
  SHOP_LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../constants/shopConstants";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case SHOP_LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case SHOP_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case SHOP_LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };

    case SHOP_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case SHOP_LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
