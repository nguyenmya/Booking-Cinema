import {
  FETCH_MOVIE_DETAIL_FAIL,
  FETCH_MOVIE_DETAIL_SUCCESS,
  // START_LOADING,
  // STOP_LOADING,
} from "./types";

const initialState = {
  movieDetail: {},
  loading: false,
  error: "",
};

const movieDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_DETAIL_SUCCESS:
      state.movieDetail = payload;
      state.loading = false;
      return { ...state };

    case FETCH_MOVIE_DETAIL_FAIL:
      return { ...state, error: payload, loading: false };

    // case START_LOADING: {
    //   state.isLoading = true;
    //   return { ...state };
    // }
    // case STOP_LOADING: {
    //   state.isLoading = false;
    //   return { ...state };
    // }

    default:
      return state;
  }
};

export default movieDetailReducer;
