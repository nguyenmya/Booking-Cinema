import movieApi from "apis/movieApi";
import { FETCH_MOVIE_MANAGER_FAIL,
    FETCH_MOVIE_MANAGER_SUCCESS } from "./type";

export const actFetchMovieManager = (tenPhim='')=>{
    return dispatch=>{
        // dispatch({type:FETCH_MOVIE_MANAGER_RESQUESS});
        movieApi.fetchMovieManagerApi(tenPhim)
        .then(res=>{
            console.log(res.data.content);
            dispatch({
                type: FETCH_MOVIE_MANAGER_SUCCESS,
                payload: res.data.content,
            })
        }).catch(error=>{
            console.log("sai ne", error.response.data)
            dispatch({
                type:FETCH_MOVIE_MANAGER_FAIL,
                payload: error.response.data
            })
            
        })
    }
}