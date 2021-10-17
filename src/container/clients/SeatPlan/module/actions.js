// import movieApi from "apis/movieApi";
// import {
//   //   STOP_LOADING,
//   //   START_LOADING,
//   FETCH_MOVIE_SEAT_SUCCESS,
//   FETCH_MOVIE_SEAT_FAIL,
// } from "./types";

// // export const actStartLoading = () => ({
// //   type: START_LOADING,
// // });
// // export const actStopLoading = () => ({
// //   type: STOP_LOADING,
// // });
// export const actFetchMovieSeatPlanSuccess = (movieSeat) => ({
//   type: FETCH_MOVIE_SEAT_SUCCESS,
//   payload: movieSeat,
// });
// export const actFetchMovieSeatPlanFail = (err) => ({
//   type: FETCH_MOVIE_SEAT_FAIL,
//   payload: err,
// });

// export const actFetchMovieSeatApi = (showTimeId) => {
//   return (dispatch) => {
//     movieApi
//       .fetchMovieSeatPlanApi(showTimeId)
//       .then((res) => {
//         const { content } = res.data;
//         dispatch(actFetchMovieSeatPlanSuccess(content));
//       })
//       .catch((err) => console.log(err));
//   };
// };
