
  // import {FETCH_MOVIE_INFOR_FAIL, FETCH_MOVIE_INFOR_SUCCESS} from "../modules/type"
  // const initialState = {
  //   menuMovie: [],
  //   err: {},
   
  // };
  
  // const movieInforReducer = (state = initialState, action ) => {
  //   switch (action.type) {
  //     case FETCH_MOVIE_INFOR_SUCCESS: {
  //        state.menuMovie = action.data;
  //       return { ...state };
  //     }
  //     case FETCH_MOVIE_INFOR_FAIL:{
  //       state.err = action.data;
  //       return { ...state };
  //     }
  //     default:
  //       return state;
  //   }
  // };
  
  // export default movieInforReducer;
  


  import {
  
    SET_SHOWTIME_THEATER_SYSTEM,
} from '../modules/type';

const initialState = {
   
    listTheaterSystem: [],
};

const clientMovieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        
        case SET_SHOWTIME_THEATER_SYSTEM: {
            state.listTheaterSystem = payload;
            return { ...state };
        }
        default:
            return state;
    }
};

export default clientMovieReducer;
