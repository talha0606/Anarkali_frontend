import {
  SHOP_LOGIN_REQUEST,
  SHOP_LOGIN_FAIL,
  SHOP_LOGIN_SUCCESS,
  SHOP_LOGOUT_SUCCESS,
  SHOP_LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../constants/shopConstants";
import axios from "axios";

// Login
export const shoplogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SHOP_LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/shop/signinin`,
      { email, password },
      config
    );

    dispatch({ type: SHOP_LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: SHOP_LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// Logout User
export const shoplogout = () => async (dispatch) => {
  try {
    await axios.get(`/shop/logout`);

    dispatch({ type: SHOP_LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: SHOP_LOGOUT_FAIL, payload: error.response.data.message });
  }
};
