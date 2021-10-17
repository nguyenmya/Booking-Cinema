/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchAddUser, actFetchUserManagement } from "./modules/actions";
import "./UserManagement.scss";
import { Modal, Button, Form, Input } from "antd";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function UserManagement(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(props);
  const { userManagement } = useSelector(
    (state) => state.userMagenementReducer
  );

  useEffect(() => {
    dispatch(actFetchUserManagement());
  }, []);

  const pushCallback = (url) => {
    history.push(url);
  };

  console.log(userManagement);

  const renderUserList = () =>
    userManagement?.map((user, idx) => {
      return (
        <div className="col-4" key={idx}>
          <div className="card">
            <img className="card-img-top" src="holder.js/100x180/" alt="" />
            <div className="card-body">
              <h4 className="card-title">Họ tên: {user.hoTen}</h4>
              <p className="card-text">Tài khoản: {user.taiKhoan}</p>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Role: {user.maLoaiNguoiDung}</p>
              <p className="card-text">SĐT: {user.soDt}</p>
              <div className="row">
                <div className="col-6">
                  <Button className="mr-2 bg-secondary text-white">
                    <Link
                      className=""
                      to={`/Admin/UserManagement/EditUser/${user.taiKhoan}`}>
                      Sửa
                    </Link>
                  </Button>
                  <Button className="" type="danger">
                    <Link path="/Admin/UserManagement/EditUser">Xóa</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

  // Button + Modal - Ant Design

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  //   const handleOk = () => {
  //     setIsModalVisible(false);
  //   };

  const handleCancel = (values) => {
    console.log("Cancel:", values);
    setIsModalVisible(false);
  };

  // Form - Ant Design

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(actFetchAddUser(values, pushCallback));
    setIsModalVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="container">
        <div className="row addUserButton">
          <h1 className="mr-auto">UserManagement</h1>
          <Button className="ml-auto mt-2" type="primary" onClick={showModal}>
            Add New User
          </Button>
          <Modal
            title="New User's Information"
            visible={isModalVisible}
            footer={null}
            onCancel={handleCancel}>
            <Form
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
                rules={[
                  {
                    required: true,
                    message: "Please input user's phone number!",
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                label="GROUP ID"
                name="maNhom"
                rules={[
                  {
                    required: true,
                    message: "Please input user's group ID!",
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                label="User Role"
                name="maLoaiNguoiDung"
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
                rules={[
                  {
                    required: true,
                    message: "Please input user's username!",
                  },
                ]}>
                <Input />
              </Form.Item>

              {/* <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item> */}

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}>
                <Button type="primary" htmlType="submit">
                  {/* {" "} */}
                  Add
                </Button>
              </Form.Item>
            </Form>
          </Modal>
          <div className="row">{renderUserList()}</div>
        </div>
      </div>
    </>
  );
}

export default UserManagement;
