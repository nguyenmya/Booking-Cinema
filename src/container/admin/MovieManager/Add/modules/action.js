import movieApi from "apis/movieApi";

export const actFetchMovieAdd = (formData) => {
  return async (dispatch) => {
    try {
      let { data } = await movieApi.fetchMovieAddMovieUploadHinhApi(formData);
      console.log(data);
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
