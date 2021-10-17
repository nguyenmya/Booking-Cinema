
import movieApi from "apis/movieApi";
import {
 
  SET_THONG_TIN_NGUOI_DUNG,
} from "../../userInfor/modules/type";


export const layThongTinNguoiDungAction = (userLogin) => {
    return async (dispatch) => {
      try {
        const result = await movieApi.layThongTinNguoiDungApi(
          userLogin.accessToken
        );
        console.log("result layThongTinNguoiDungApi", result);
        console.log("userLogin.accessToken", userLogin.accessToken);
  
        // if (result.data.status === 200) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          payload: result.data.content,
        });
        // }
  
        console.log("result", result);
      } catch (error) {
        console.log("error", error.response.data);
      }
    };
  };