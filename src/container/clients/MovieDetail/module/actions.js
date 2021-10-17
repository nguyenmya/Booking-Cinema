import movieApi from 'apis/movieApi';
import {
    STOP_LOADING,
    START_LOADING,
    FETCH_MOVIE_DETAIL_SUCCESS,
    FETCH_MOVIE_DETAIL_FAIL,
} from './types';

export const actStartLoading = () => ({
    type: START_LOADING,
});
export const actStopLoading = () => ({
    type: STOP_LOADING,
});
export const actFetchMovieDetailSuccess = (movieDetail) => ({
    type: FETCH_MOVIE_DETAIL_SUCCESS,
    payload: movieDetail,
});
export const actFetchMovieDetailFail = (err) => ({
    type: FETCH_MOVIE_DETAIL_FAIL,
    payload: err,
});

export const actFetchMovieDetailApi = (movieId) => {
    return (dispatch) => {
        movieApi
            .fetchMovieDetailApi(movieId)
            .then((res) => {
                const { content } = res.data;
                dispatch(actFetchMovieDetailSuccess(content));
            })
            .catch(
                (err) => console.log(err)
            );
    };
};
