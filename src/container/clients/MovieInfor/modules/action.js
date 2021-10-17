// import movieApi from "apis/movieApi";
// import { FETCH_MOVIE_INFOR_SUCCESS, FETCH_MOVIE_INFOR_FAIL } from "../modules/type";

// export const actFetchMovieInforSuccess = (menuMovie) => {
//     return {
//         type: FETCH_MOVIE_INFOR_SUCCESS,
//         payload: menuMovie,
//     };
// };

// export const actFetchAllMovieFail = (err) => {
//     return {
//         type: FETCH_MOVIE_INFOR_FAIL,
//         payload: err,
//     };
// };

// export const actFetchMovieInfor = () => {
//     return (dispatch) => {
//         movieApi
//             .fetchMovieInforAPi()
//             .then((res) => {
//                 console.log("res...", res.data?.content);

//                 dispatch(actFetchMovieInforSuccess())
//             })
//             .catch((err) =>{
//                 dispatch(actFetchAllMovieFail(err))
//                 console.log("err ", err.response?.data);
//             }
//             );
//     };
// };

import movieApi from 'apis/movieApi';
import {  SET_SHOWTIME_THEATER_SYSTEM } from '../modules/type';

export const actFetchShowtimeTheaterSystem = () => {
    return (dispatch) => {
      
        movieApi
            .fetchShowtimeTheaterSystemApi()
            .then((res) => {
                dispatch({
                    type: SET_SHOWTIME_THEATER_SYSTEM,
                    payload: res.data.content,
                });
            })
           
            .catch((err) => {
                console.log(err);
              
            });
    };
};
