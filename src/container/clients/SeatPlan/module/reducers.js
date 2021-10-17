// import {
//   FETCH_MOVIE_SEAT_FAIL,
//   FETCH_MOVIE_SEAT_SUCCESS,
//   // START_LOADING,
//   // STOP_LOADING,
// } from "./types";

// const initialState = {
//   movieSeat: [],
//   loading: false,
//   error: "",
// };

// const movieSeatPlanReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case FETCH_MOVIE_SEAT_SUCCESS:
//       let listSeat = payload;

//       let row = [
//         "A",
//         "B",
//         "C",
//         "D",
//         "E",
//         "F",
//         "G",
//         "H",
//         "I",
//         "J",
//         "K",
//         "L",
//         "O",
//         "P",
//         "Q",
//         "R",
//         "S",
//         "T",
//         "U",
//         "V",
//         "W",
//         "X",
//         "Y",
//         "Z",
//       ];

//       let seatIndex = 0;

//       let count = 1;

//       for (let i = 0; i < listSeat.danhSachGhe.length; i++) {
//         listSeat.danhSachGhe[i] = {
//           ...listSeat.danhSachGhe[i],
//           tenGheMoi: `${row[seatIndex]}` + count,
//         };
//         // console.log(listSeat.danhSachGhe[i], "i");
//         count++;
//         if (count > 12) {
//           count = 1;
//           seatIndex++;
//           // listSeat.danhSachGhe[i] = {
//           //   ...listSeat.danhSachGhe[i],
//           //   tenGheMoi: `${row[seatIndex]}` + listSeat.danhSachGhe[i].tenGhe,
//           // };
//         }
//       }

//       // console.log("listSeat", listSeat);

//       // state.movieSeat = payload;
//       state.loading = false;
//       return { ...state, movieSeat: listSeat };

//     case FETCH_MOVIE_SEAT_FAIL:
//       return { ...state, error: payload, loading: false };

//     default:
//       return state;
//   }
// };

// export default movieSeatPlanReducer;
