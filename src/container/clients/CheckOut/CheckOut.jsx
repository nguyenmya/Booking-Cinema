/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CheckOut.scss";
import {
  actFetchMovieSeatApi,
  actDatVe,
 
} from "container/clients/CheckOut/module/actions";

import { layThongTinNguoiDungAction} from "../CheckOut/userInfor/modules/action"
import { CloseOutlined } from "@ant-design/icons";
import { DAT_VE } from "container/clients/CheckOut/module/types";
import _ from "lodash";
import { ThongTinDatVe } from "_core/models/ThongTinDatVe";
import { Button } from "antd";
import { Tabs } from "antd";
import moment from 'moment';


function CheckOut(props) {
  const dispatch = useDispatch();
  const { movieSeat, danhSachGheDangDat } = useSelector(
    (state) => state.movieSeatPlanReducer
  );

  console.log("seat", movieSeat);
  console.log("danhSachGheDangDat", danhSachGheDangDat);

  useEffect(() => {
    dispatch(actFetchMovieSeatApi(props.match.params.id));
  }, []);
  const { userLogin } = useSelector((state) => state.userLoginReducer);

  console.log("objectuser", userLogin);
  const { thongTinPhim, danhSachGhe } = movieSeat;
  const renderSeats = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";

      let classGheDangDat = "";
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );

      let classGheDaDuocDat = "";
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "classGheDaDuocDat";
      }

      if (indexGheDD !== -1) {
        classGheDaDat = "gheDangDat";
      }
      return (
        <Fragment key={index}>
          {
            <button
              onClick={() => {
                dispatch({
                  type: DAT_VE,
                  gheDuocChon: ghe,
                });
              }}
              disable={ghe.daDat}
              className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}${classGheDaDuocDat} text-center`}
              key={index}>
              {ghe.daDat ? (
                <CloseOutlined
                  style={{ marginBottom: 5, fontWeight: "bold" }}
                />
              ) : (
                ghe.stt
              )}
            </button>
          }
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return (
    <div className="container bg__screen">
      <div className="row">
        <div className="col-8 checkout">
          <div className={`screen`}></div>
          {renderSeats()}
        </div>
        <div className="col-4 checkout__right">
          Tên Phim: <span>{thongTinPhim?.tenPhim}</span>
          <div className="text-red-400 text-lg col-span-3 md:col-span-4 my-auto ml-6 ">
            <span className="text-red-400 text-lg">Ghế:</span>

            {_.sortBy(danhSachGheDangDat, ["stt"])?.map((gheDD, index) => {
              return <span key={index}>{gheDD.stt},</span>;
            })}
          </div>
          <div className="text-right ">
            <span className="text-green-800 text-lg">
              Giá Vé:{" "}
              {danhSachGheDangDat
                .reduce((tongTien, ghe, index) => {
                  return (tongTien += ghe.giaVe);
                }, 0)
                .toLocaleString()}
            </span>
          </div>
          <hr />
          <i className="ml-20">Email:</i>
          <div>{userLogin.email}</div>
          <hr />
          <i>Tên Khách Hàng:</i>
          <div>{userLogin.taiKhoan}</div>
          <Button
            onClick={() => {
              const thongTinDatVe = new ThongTinDatVe();
              thongTinDatVe.maLichChieu = props.match.params.id;
              thongTinDatVe.danhSachVe = danhSachGheDangDat;
              dispatch(actDatVe(userLogin, thongTinDatVe));
            }}
            block>
            Đặt vé
          </Button>
        </div>
      </div>
    </div>
  );
}

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function (props) {
  return (
    <div>
      <div className="p-5">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="01 CHỌN GHẾ VÀ THANH TOÁN " key="1">
            <CheckOut {...props} />
          </TabPane>
          <TabPane tab="02 KẾT QUẢ VÀ ĐẶT VÉ" key="2">
            <KetQuaDatVe {...props} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

function KetQuaDatVe(props) {
  console.log("propslichsudatphim", props);
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.userLoginReducer);

  const { thongTinNguoiDung } = useSelector(
    (state) => state.thongTinDatVeReducer
  );

  console.log("thongTinNguoiDung1", thongTinNguoiDung);

  useEffect(() => {
    dispatch(layThongTinNguoiDungAction(userLogin));
  }, []);
  
  const renderTicketItem = function () {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);
      return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
          <div className="flex-grow">
            <h2 className="text-pink-500 title-font font-medium text-2xl">{ticket.tenPhim}</h2>
            <p className="text-gray-500"><span className="font-bold">Giờ chiếu:</span> {moment(ticket.ngayDat).format('hh:mm A')} - <span className="font-bold">Ngày chiếu:</span>  {moment(ticket.ngayDat).format('DD-MM-YYYY')} .</p>
            <p><span className="font-bold">Địa điểm:</span> {seats.tenHeThongRap}   </p>
            <p>
              <span className="font-bold">Tên rạp:</span>  {seats.tenCumRap} - <span className="font-bold">Ghế:</span>  {ticket.danhSachGhe.map((ghe, index) => { return <span className="text-green-500 text-xl" key={index}> [ {ghe.tenGhe} ] </span> })}
            </p>
          </div>
        </div>
      </div>
    })
  }
  return (
    <div className="container p-5">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-purple-600 ">
              Lịch sử đặt vé khách hàng
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Hãy xem thông tin địa và thời gian để xem phim vui vẻ bạn nhé !
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {renderTicketItem()}
          </div>
        </div>
      </section>
    </div>
  );
}
