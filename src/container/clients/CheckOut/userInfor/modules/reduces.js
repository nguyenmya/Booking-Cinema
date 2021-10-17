// import { Ghe, thongTinDatVe } from "_core/models/ThongTinPhongVe";
import {
   
    SET_THONG_TIN_NGUOI_DUNG,
  
  } from "../../userInfor/modules/type";
  
  const initialState = {
    
    error: "",
    thongTinNguoiDung: {},
    // thongTinDatVe: {}
  };
  
  const thongTinDatVeReducer = (state = initialState, action) => {
    switch (action.type) {
     
  
      case SET_THONG_TIN_NGUOI_DUNG:
        state.thongTinNguoiDung = action.payload;
        console.log("thongTinNguoiDung lalalalala", action.payload);
  
        return { ...state };
  
      default:
        return state;
    }
  };
  
  export default thongTinDatVeReducer;
  