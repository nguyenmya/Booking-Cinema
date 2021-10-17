import { FETCH_MOVIE_MANAGER_FAIL, 
  FETCH_MOVIE_MANAGER_RESQUESS,
   FETCH_MOVIE_MANAGER_SUCCESS,
} from "./type";

  const initialState = {
    movieManager: [],
    err:'',
  };
  
  const movieManagerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case FETCH_MOVIE_MANAGER_RESQUESS:
        state.movieManager= payload;
        return { ...state };
      case FETCH_MOVIE_MANAGER_SUCCESS:
        return { ...state, movieManager : payload };
      case FETCH_MOVIE_MANAGER_FAIL:
          return { ...state, error: payload,  };
      default:
        return state;
    }
  };
  export default movieManagerReducer;
  