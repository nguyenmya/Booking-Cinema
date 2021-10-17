/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actFetchUserInfo } from "./modules/actions";
import "./UpdateUser.scss";

function UpdateUser(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(props);
  const { userInfo } = useSelector((state) => state.userEditUserReducer);
  console.log(userInfo, "userInfo");
  useEffect(() => {
    dispatch(actFetchUserInfo(props.match.params.taiKhoan, pushCallback));
    console.log(props.match.params.taiKhoan);
  }, []);

  const pushCallback = (url) => {
    history.push(url);
  };

  const renderUserInfo = () =>
    userInfo.map((info, idx) => (
      <Form
        className={`formEdit`}
        name="basic"
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        labelAlign="right"
        onValuesChange>
        <Form.Item
          label="Username"
          name="taiKhoan"
          initialValues={`${info.taiKhoan}`}
          rules={[
            {
              required: true,
              message: "Please input user's username!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="matKhau"
          initialValues={`${info.matKhau}`}
          rules={[
            {
              required: true,
              message: "Please input user's password!",
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          initialValues={`${info.email}`}
          rules={[
            {
              required: true,
              message: "Please input user's username!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="soDt"
          initialValues={`${info.soDt}`}
          rules={[
            {
              required: true,
              message: "Please input user's phone number!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="User Role"
          name="maLoaiNguoiDung"
          initialValues={`${info.maLoaiNguoiDung}`}
          rules={[
            {
              required: true,
              message: "Please input user's role!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="User's Fullname"
          name="hoTen"
          initialValues={`${info.hoTen}`}
          rules={[
            {
              required: true,
              message: "Please input user's username!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    ));
  // Button + Modal - Ant Design

  const [isModalVisible, setIsModalVisible] = useState(false);

  // Form - Ant Design

  const onFinish = (values) => {
    console.log("Success:", values);

    setIsModalVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="container">{renderUserInfo()}</div>
    </>
  );
}

export default UpdateUser;
