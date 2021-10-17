import { FETCH_MOVIE_EDIT_FAIL, 
  FETCH_MOVIE_EDIT_SUCCESS,
} from "./type";

 const initialState = {
   movieInfor: {},
   err:'',
 };
 
 const editMovieInforReducer = (state = initialState, { type, payload }) => {
   switch (type) {
     case FETCH_MOVIE_EDIT_SUCCESS:
       return { ...state,  movieInfor:payload };
     case FETCH_MOVIE_EDIT_FAIL:
         return { ...state, err:payload,  };
     default:
       return state;
// sao ko có token nó vẫn xóa đc ta
//no k can
   }
 };
 export default editMovieInforReducer;
 