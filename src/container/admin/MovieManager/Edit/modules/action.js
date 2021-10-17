import movieApi from "apis/movieApi";
import {
    FETCH_MOVIE_EDIT_FAIL,
    FETCH_MOVIE_EDIT_SUCCESS
} from "./type";

export const actFetchMovieEdit =(maPhim)=>{
    return dispatch=>{
        movieApi.fetchMovieInforApi(maPhim)
        .then(res=>{
            console.log(res, 'res editmovie')  
            dispatch({
                type: FETCH_MOVIE_EDIT_SUCCESS,
                payload: res.data.content,
            })
        }).catch(error=>{
            console.log("sai ne", error.response.data)
            dispatch({
                type:FETCH_MOVIE_EDIT_FAIL,
                payload: error.response.data
            })
        })
    }
}


export  const  CapNhatPhimUpload =(formData)=>{
    return async(dispatch)=>{
        try{
            let res = await movieApi.UpdateMovieUpLoadAPi(formData);
            alert("Cập nhât thành công");
            console.log('res', res.data.content)

        }catch(error){
            console.log(error.response?.date)

        }
    }
}