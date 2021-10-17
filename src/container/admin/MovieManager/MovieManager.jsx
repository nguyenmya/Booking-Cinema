/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actFetchMovieManager } from "./modules/action";
import { Table } from "antd";
import "./MovieManager.scss";
import { Link, NavLink } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { actDeleteMovie } from "./Delete/modules/action";
import { Input } from "antd";
const { Search } = Input;

export default function QuanLyPhim(props) {
  console.log(props);
  const dispatch = useDispatch();
  const { movieManager } = useSelector((state) => state.movieManagerReducer);
  console.log(movieManager);
  useEffect(() => {
    dispatch(actFetchMovieManager());
  }, []);

  const columns = [
    {
      title: "maPhim",
      dataIndex: "maPhim",
      width: 50,
      value: (text, object) => {
        return <span>{text}</span>;
      },
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend"],
    },
    {
      title: "tenPhim",
      dataIndex: "tenPhim",
      width: 50,
      sorter: {
        compare: (a, b) => a.tenPhim - b.tenPhim,
        multiple: 1,
      },
    },

    {
      title: "biDanh",
      dataIndex: "biDanh",
      width: 100,
      sorter: {
        compare: (a, b) => a.moTa - b.moTa,
        multiple: 1,
      },
    },
    {
      title: "moTa",
      dataIndex: "moTa",
      width: 300,
      sorter: {
        compare: (a, b) => a.moTa - b.biDanh,
        multiple: 1,
      },
    },
    {
      title: "hinhAnh",
      dataIndex: "hinhAnh",
      width: 100,

      render: (text, film) => {
        return (
          <Fragment>
            <img src={film.hinhAnh} width={50} height={50} alt="" />
          </Fragment>
        );
      },
    },
    {
      title: "trailer",
      dataIndex: "trailer",
      width: 50,
    },
    {
      title: "hành động",
      dataIndex: "hành động",
      multiple: 3,

      //<EditOutlined />
      render: (text, film) => {
        return <Fragment>
          <NavLink className="bg-dark text-white hhhhh" to={`/Admin/MovieManager/EditMovie/${film.maPhim}`} >
            <i className="btn-xoa-sua-showtime">
            <EditOutlined/>
              </i>
          </NavLink>
          <span width={200} onClick className=" bg-dark ml-2" to="/Admin/MovieManager/delete" onClick={() => {
            if (window.confirm('Are you sure you want to delete' + film.maPhim)) {
              //action
              dispatch(actDeleteMovie(film.maPhim));
            }
          }} >
            <i className="btn-xoa-sua-showtime">
            <DeleteOutlined />
            </i>
          </span>
          <NavLink className="bg-dark text-white" to={`/Admin/MovieManager/ShowTime/${film.maPhim}`} >
            <i className="btn-xoa-sua-showtime">
            <CalendarOutlined />

            </i>
          </NavLink>

        </Fragment>
      },
    },
  ];
  const onSearch = values => {
    console.log(values);
    dispatch(actFetchMovieManager(values));
  }

  // const onSearch = value => console.log(value);
  const data = movieManager;
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div>
      <Link className="nav-link searchText" to="/Admin/MovieManager/AddMovie">
        Thêm Phim
      </Link>

      <Search
        className="mt-5 searchText"
        placeholder="pls search:"
        enterButton={<SearchOutlined />}
        onSearch={onSearch}
        size="small"></Search>
      {/* <button className=" btn btn-success" onClick={() => {
        history.push('./admin/MovieManager/AddMovie')     }}   >AddMovie</button> */}
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"maPhim"}
      />
    </div>
  );
}

