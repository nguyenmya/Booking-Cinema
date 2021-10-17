import {
  FETCH_USER_MANAGEMENT_SUCCESS,
  FETCH_USER_MANAGEMENT_FAIL,
} from "./types";

const initialState = {
  userManagement: [],
  err: "",
};

const userMagenementReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_MANAGEMENT_SUCCESS:
      return { ...state, userManagement: payload };

    case FETCH_USER_MANAGEMENT_FAIL:
      return { ...state, err: payload };

    default:
      return state;
  }
};

export default userMagenementReducer;
