import movieApi from "apis/movieApi";
import {actFetchMovieManager} from "../../modules/action"

export const actDeleteMovie=(maPhim)=>{
    return async(dispatch)=>{
        try{
            const res = await movieApi.DeleteMovieUpLoadAPi(maPhim);
            console.log("res", res.data.content);

            alert("thanh công")
            dispatch( actFetchMovieManager())

        }catch(err){
            console.log("error",err.response?.data)

        }


    }
}
