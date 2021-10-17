import {
  FETCH_ALL_MOVIE_SUCCESS,
  FETCH_ALL_MOVIE_FAILED,
  PHIM_DANG_CHIEU,
  PHIM_SAP_CHIEU
  // START_LOADING,
  // STOP_LOADING,
} from "container/clients/MovieList/module/types";

const initialState = {
  listMovie: [],
  errors: {},
  isLoading: false,
  dangChieu: true,
  sapChieu: false,
  arrFilmDefault: [],
  // listDangChieu: [],
  // listSapChieu: [],
};

const movieReducer = (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_ALL_MOVIE_SUCCESS: {
       state.listMovie = action.payload;
       state.arrFilmDefault =state.listMovie;
      // state.listMovie= action.listMovie.filter(movie=> movie.sapChieu===state.dangChieu
      //   && movie.dangChieu===state.sapChieu)
      return { ...state };
    }
    case PHIM_SAP_CHIEU:{
  
        console.log('dang chieu',action)

        const newListMovie = state.listMovie;
        const movieShowing = [];
  
        for(let i = 0; i < newListMovie.length; i++) {
      
          if(newListMovie[i].sapChieu === true){
            movieShowing.push(newListMovie[i])
          }
      
        }
  
        state.movieList = movieShowing;
        
        console.log(state.movieList, 'listSapChieu');
  
        return { ...state  };

    }
    case PHIM_DANG_CHIEU:{
      
      console.log('dang chieu',action)

      const newListMovie = state.listMovie;
      const movieShowing = [];


      for(let i = 0; i < newListMovie.length; i++) {
        if(newListMovie[i].dangChieu === true){
          movieShowing.push(newListMovie[i])
        }
    
      }

      state.movieList = movieShowing;
      
      console.log(state.movieList, 'listDangChieu');

      return { ...state  };

    }

    case FETCH_ALL_MOVIE_FAILED: {
      state.errors = action.payload;
      return { ...state };
    }
    
    default:
      return state;
  }
};

export default movieReducer;
