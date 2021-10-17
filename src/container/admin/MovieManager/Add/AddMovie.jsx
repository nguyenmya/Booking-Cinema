import React, { useState} from 'react';
import { useDispatch } from 'react-redux'
import { actFetchMovieAdd } from './modules/action'
import {
  Form,
  Input,
  Radio,
  DatePicker,
  InputNumber,
  Switch,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { GROUP_ID } from 'settings/apiConfig';

function AddMovie(props) {
  const dispatch = useDispatch();
  const [componentSize, setComponentSize] = useState('default');
  const [imgSrc, setImgSrc] = useState('');
  console.log('hello AddMovie');
  const formik = useFormik({
    initialValues: {
      maPhim:"",
      tenPhim: '',
      trailer: '',
      moTa: '',
      ngayKhoiChieu: '',
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {}
    },
    onSubmit: (values) => {
      console.log(values);
      values.maNhom = GROUP_ID
      let formData = new FormData()
      for (let key in values) {
        if (key !== 'hinhAnh') {
          formData.append(key, values[key]);
        } else {
          formData.append('File', values.hinhAnh, values.hinhAnh.name)
        }
      }
      dispatch(actFetchMovieAdd(formData))
    }
  })
  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value).format('DD/MM/YYYY')
    console.log(ngayKhoiChieu);
    formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
  }

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    }
  }

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    }
  }

  const handleChangeFile = (e) => {
    //lay file ra tu e
    let file = e.target.files[0];
    if (file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/gif' || file.type === 'image/png') {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        console.log(e.target.result);
        setImgSrc(e.target.result);
      }
      console.log('file', file);
    }
    formik.setFieldValue('hinhAnh', file)
  }
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên Phim" style={{marginTop: "80px"}} >
          <Input name="tenPhim" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Mô tả" >
          <Input name="moTa" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Ngày Khởi chiếu">
          <DatePicker format="DD/MM/YYYY" onChange={handleChangeDatePicker} />
        </Form.Item>
        <Form.Item label="Đang khởi Chiếu">
          <Switch name="dangChieu" onChange={handleChangeSwitch('dangChieu')} />
        </Form.Item>
        <Form.Item label="Sắp Chiếu">
          <Switch name="sapChieu" onChange={handleChangeSwitch('sapChieu')} />
        </Form.Item>
        <Form.Item label="Hot">
          <Switch name="Hot" onChange={handleChangeSwitch('hot')} />
        </Form.Item>
        <Form.Item label="Số Sao">
          <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} />
        </Form.Item>
        <Form.Item label="Hình Ảnh">
          <Input type="file" onChange={handleChangeFile} />
          <img src={imgSrc} alt="" width={150} height={150} />
        </Form.Item>
        <Form.Item label="Tac vụ">
          <button type="submit" className="btn btn-default" value=""> Thêm</button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AddMovie;