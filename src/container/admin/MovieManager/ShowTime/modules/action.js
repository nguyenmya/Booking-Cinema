import movieApi from "apis/movieApi";
export const taoLichChieu = (layThongTinLichChieu) => {
    return async (dispatch) => {
        try {
            let res = await movieApi.taoLichChieu(layThongTinLichChieu);
            console.log(res)
            alert("thanh cong")

        } catch(error) {
            console.log(error.response?.data)
        }

    }
}