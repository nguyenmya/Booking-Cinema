// import { Button } from "antd/lib/radio";
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { actFetchMovieSeatApi } from "./module/actions";
// import { PoweroffOutlined } from "@ant-design/icons";
// import "./SeatPlan.scss";

// export class SeatPlan extends Component {
//   state = {
//     loadings: [],
//     clientChoose: [],
//     ticketShow: "",
//   };

//   componentDidMount() {
//     const { showTimeId } = this.props.match.params;
//     this.props.fetchMovieSeat(showTimeId);
//     // call for seat plan with movie detail id
//   }

//   renderSeat = () =>
//     this.props.movieSeat.danhSachGhe?.slice(0, 144).map((seat, idx) => (
//       <div className="" key={idx}>
//         <Button
//           className="seat"
//           type="primary"
//           icon={<PoweroffOutlined />}
//           onClick={() => this.enterLoading(seat)}>
//           <span className="seatVIP">{seat.tenGheMoi}</span>
//         </Button>
//       </div>
//     ));

//   enterLoading = (seat) => {
//     // if (seat) {
//     //   let seatSelect = [];
//     //   seatSelect.push(seat);
//     //   console.log("ghe 2", seat);
//     //   console.log("seatSelect", seatSelect);
//     //   for (let i = 0; i < seatSelect.length; i++) {
//     //     let newSeatSelect = "";
//     //     return (newSeatSelect += `${seatSelect[i].tenGheMoi}`);
//     //   }
//     // }

//     if (seat) {
//       console.log(seat);

//       this.state.clientChoose.push(seat);

//       console.log(this.state.clientChoose);
//     }

//     return this.state.clientChoose.map((newSeat, idx) => (
//       <div className="row" key={idx}>
//         <span>{newSeat.tenGheMoi}</span>
//       </div>
//     ));

//     // if (seat) {
//     //   let newTicketShow = [];

//     //   newTicketShow.push(seat);

//     //   this.setState({
//     //     clientChoose: newTicketShow,
//     //   });

//     //   console.log("clientChoose", this.state.clientChoose);
//     // }

//     // return this.state.clientChoose.map((newSeat, idx) => (
//     //   <div className="row" key={idx}>
//     //     <span>{newSeat.tenGheMoi}</span>
//     //   </div>
//     // ));
//   };

//   render() {
//     const { movieSeat } = this.props;
//     // movieSeat is object
//     // it's contain thongTinPhim {} and danhSachGhe[]
//     console.log(movieSeat);
//     return (
//       <>
//         <div className="container bg__screen ">
//           <div className={`screen`}></div>
//           <div className="row pt-5">
//             {this.renderSeat()}
//             <hr />
//           </div>
//           <div className="row">
//             <div className="col-12">Your Seat: {this.enterLoading()}</div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   movieSeat: state.movieSeatPlanReducer.movieSeat,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchMovieSeat: (showTimeId) => dispatch(actFetchMovieSeatApi(showTimeId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SeatPlan);
