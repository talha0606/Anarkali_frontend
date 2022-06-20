import {
  SHOP_LOGIN_REQUEST,
  SHOP_LOGIN_FAIL,
  SHOP_LOGIN_SUCCESS,
  LOAD_SHOP_REQUEST,
  LOAD_SHOP_SUCCESS,
  LOAD_SHOP_FAIL,
  SHOP_LOGOUT_SUCCESS,
  SHOP_LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../constants/shopConstants";

export const shopReducer = (state = { shop: {} }, action) => {
  switch (action.type) {
    case SHOP_LOGIN_REQUEST:
    case LOAD_SHOP_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case SHOP_LOGIN_SUCCESS:
    case LOAD_SHOP_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        shop: action.payload,
      };

    case SHOP_LOGOUT_SUCCESS:
      return {
        loading: false,
        shop: null,
        isAuthenticated: false,
      };

    case SHOP_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        shop: null,
        error: action.payload,
      };

    case LOAD_SHOP_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        shop: null,
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
