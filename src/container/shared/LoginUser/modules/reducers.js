import { LOGOUT, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAIL } from "./types";
const initialState = {
  userLogin: null,
  loading: false,
  error: "",
};
const userLoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LOGIN_SUCCESS:
      // state.userLogin = payload;
      console.log("payload userlogin", payload);
      return { ...state, userLogin: payload };

    case FETCH_LOGIN_FAIL:
      state.error = payload;
      return { ...state };

    case LOGOUT:
      return { ...state, userLogin: payload };

    default:
      return state;
  }
};
export default userLoginReducer;
