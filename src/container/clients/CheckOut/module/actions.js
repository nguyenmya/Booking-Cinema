/* eslint-disable no-unused-vars */
import movieApi from "apis/movieApi";
import {
  FETCH_MOVIE_SEAT_SUCCESS,
  FETCH_MOVIE_SEAT_FAIL,
} from "./types";

export const actFetchMovieSeatApi = (showTimeId) => {
  return async (dispatch) => {
    try {
      let { data, status } = await movieApi.fetchMovieSeatPlanApi(showTimeId);
      dispatch({
        type: FETCH_MOVIE_SEAT_SUCCESS,
        data: data.content,
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

export const actDatVe = (userLogin, thongTinDatVe) => {
  return async (dispatch) => {
    try {
      const res = await movieApi.fetchDatVeApi(
        thongTinDatVe,
        userLogin.accessToken
      );
      console.log("datve", res.data.content);
      alert("datve Thanh cong");
    } catch (err) {
      console.log("errdatve", err.response?.data);
    }
  };
};

