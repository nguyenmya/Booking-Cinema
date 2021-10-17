/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Form, Button, DatePicker, InputNumber, Select } from "antd";
import { Cascader } from "antd";
import { useDispatch } from "react-redux";
import movieApi from "apis/movieApi";
import moment from "moment";
import { taoLichChieu } from "./modules/action";

import { useFormik } from "formik";
export default function ShowTime(props) {
  console.log("object", props);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      maphim: props.match.params.id,
      maRap: "",
      giaVe: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(taoLichChieu(values));
    },
  });

  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });
  console.log("heT", state.heThongRapChieu);
  useEffect(async () => {
    try {
      let res = await movieApi.fetchTheaterSystemInformation();
      setState({
        ...state,
        heThongRapChieu: res.data.content,
      });
    } catch (err) {
      console.log("err r1", err);
    }
  }, []);
  const handleChangeHeThongRap = async (values) => {
    console.log(values);
    try {
      let res = await movieApi.layThongTinCumRap(values);
      console.log("res", res);
      setState({
        ...state,
        cumRapChieu: res.data.content,
      });
    } catch (err) {
      console.log("err r", err.response?.data.content);
    }
  };
  const onOk = (values) => {
    formik.setFieldValue(
      "ngayChieuGiochieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
    console.log("object", moment(values).format("DD/MM/YYYY hh:mm:ss"));
  };
  const onChangeDateTime = (values) => {
    formik.setFieldValue(
      "ngayChieuGiochieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
    console.log("object", moment(values).format("DD/MM/YYYY hh:mm:ss"));
  };
  const handleChangeNumber = (values) => {
    formik.setFieldValue("giaVe", values);
  };

  const renderHeThongRapChieu = () => {
    return state.heThongRapChieu?.map((rap, index) => {
      return { label: rap.tenHeThongRap, value: rap.maHeThongRap };
    });
  };
  const handleChangeCumRap = (values) => {
    console.log(values);
    formik.setFieldValue("maRap", values);
  };
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onSubmitCapture={formik.handleSubmit}>
      <h3 className="text-2xl chinh mt-30">Tạo lịch</h3>
      <Form.Item
        style={{ marginTop: "80px" }}
        name="heThongRapChieu"
        label="hệ thống râp">
        <Cascader
          options={renderHeThongRapChieu()}
          onChange={handleChangeHeThongRap}
          placeholder="Please select"
        />
      </Form.Item>

      <Form.Item label="Cum Rap">
        <Select
          options={state.cumRapChieu?.map((cumRap, idx) => {
            return { label: cumRap.tenCumRap, value: cumRap.maCumRap };
          })}
          onChange={handleChangeCumRap}
          placeholder="Please select"
        />
      </Form.Item>
      <Form.Item label=" ngày Khơi chiếu, giờ chiếu">
        <DatePicker
          format="DD/MM/YYYY hh:mm:ss"
          showTime
          onChange={onChangeDateTime}
          onOk={onOk}
        />
      </Form.Item>
      <Form.Item label=" Gia vé">
        <InputNumber
          min={1}
          max={150000}
          defaultValue={3}
          onChange={handleChangeNumber}
        />
      </Form.Item>
      <Form.Item label=" Tạo Lịch chiếu">
        <Button htmlType="submit">Tạo Lịch chiếu</Button>
      </Form.Item>
    </Form>
  );
}
