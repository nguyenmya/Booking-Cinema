import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./modules/actions";
import { Form, Input, Button } from "antd";
import "./LoginUser.scss";
import { Link, useHistory } from "react-router-dom";

export default function LoginUser(props) {
  const history = useHistory();

  const dispatch = useDispatch();

  const { loading, userLogin } = useSelector((state) => state.userLoginReducer);

  console.log("user Sang test", userLogin);

  console.log(loading);

  useEffect(() => {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    console.log("user login:", userLogin);
  }, []);

  // const pushCallback = (url) => {
  //   history.push(url);
  // };
  const onFinish = (values) => {
    dispatch(loginAction(values, history));
    console.log("thang cong", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={`container-fluid loginHeader`}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          style={{ width: "500px" }}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
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
                message: "Please input your password!",
              },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Link className="a login-form-forgot" to="/ForgotPassword">
              Forgot password?
            </Link>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>{" "}
            Or <Link to="/Register">Register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
