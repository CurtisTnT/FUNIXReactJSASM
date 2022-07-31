import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Form,
  FormGroup,
  Button,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;
const isNumber = (val) => !val || !isNaN(Number(val));

class Staffs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      staffs: this.props.staffs,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render2Cols() {
    return (
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.remove("col-lg-4", "col-lg-2")),
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.add("col-lg-6"))
    );
  }
  render3Cols() {
    return (
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.remove("col-lg-2", "col-lg-6")),
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.add("col-lg-4"))
    );
  }

  render6Cols() {
    return (
      console.log(document.querySelectorAll(".staffs")),
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.remove("col-lg-4", "col-lg-6")),
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.add("col-lg-2"))
    );
  }

  handleSubmit() {
    const newStaff = {
      id: parseInt(`${this.state.staffs.length}`),
      name: document.getElementById("fullname").value,
      doB: document.getElementById("doB").value,
      salaryScale: document.getElementById("salaryScale").value,
      startDate: document.getElementById("startDate").value,
      department: { name: document.getElementById("department").value },
      annualLeave: document.getElementById("annualLeave").value,
      overTime: document.getElementById("overTime").value,
      salary: "",
      image: "/assets/images/alberto.png",
    };
    this.toggleModal();
    let staffs = this.state.staffs;
    staffs.push(newStaff);
    this.setState({
      staffs: staffs,
    });
  }

  render() {
    const list = this.state.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-6 col-md-4 col-lg-2 staffs mt-2 ">
          <Card className="staffs-border">
            <Link to={`/nhanvien/${staff.id}`}>
              <CardImg src={staff.image} alt={staff.name} />
              <CardBody className="staffs-background">
                <CardTitle className="text-decor">{staff.name}</CardTitle>
              </CardBody>
            </Link>
          </Card>
        </div>
      );
    });
    return (
      <div className="container-fluid main-body">
        <Form className="row justify-content-center mt-2">
          <Button
            color="danger"
            outline
            className="col-md-2 mr-6 p-0"
            onClick={this.toggleModal}
          >
            <span className="fa fa-plus-square-o fa-lg mr-1"></span>Thêm mới
            nhân viên
          </Button>
          <FormGroup className="row col-md-6 m-0">
            <Button
              color="danger"
              outline
              onClick={this.props.onClick}
              className="col-md-2"
            >
              <span className="fa fa-search fa-lg"></span>Tìm kiếm
            </Button>
            <Input
              className="input-staff ml-2 col-md-9"
              type="text"
              name="search"
            />
          </FormGroup>
        </Form>
        <div className="row staff">{list}</div>
        <div className="text-decor">
          <h5>Bấm vào tên nhân viên để xem thông tin</h5>
        </div>
        <div className="row view text-decor mb-2">
          <h5 className="ml-3">Thay đổi view hiển thị:</h5>
        </div>
        <div className="row text-decor">
          <button className="col-1 m-1" onClick={this.render2Cols}>
            2 cột
          </button>
          <button className="col-1 m-1" onClick={this.render3Cols}>
            3 cột
          </button>
          <button className="col-1 m-1" onClick={this.render6Cols}>
            6 cột
          </button>
        </div>
        <div className="row view text-decor mb-2">
          <h5 className="ml-3">Sắp xếp tên nhân viên theo thứ tự:</h5>
        </div>
        <div className="row text-decor">
          <button className="col-1 m-1" onClick={this.props.onClick1}>
            A-Z
          </button>
          <button className="col-1 m-1" onClick={this.props.onClick2}>
            Z-A
          </button>
        </div>
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          className="col-12 col-md-10 col-lg-6"
        >
          <ModalHeader toggle={this.toggleModal}>Thêm Nhân Viên</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={() => this.handleSubmit()}>
              <Row className="form-group">
                <Label htmlFor="fullname" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".fullname"
                    id="fullname"
                    name="fullname"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(30),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".fullname"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                      minLength: "Yêu cầu nhiều hơn 2 ký tự",
                      maxLength: "Yêu cầu ít hơn 30 ký tự",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="doB" md={4}>
                  Ngày sinh
                </Label>
                <Col md={8}>
                  <Control
                    type="date"
                    model=".doB"
                    id="doB"
                    name="doB"
                    className="form-control"
                    value={this.state.tenState}
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".doB"
                    show="touched"
                    messages={{ required: "Yêu cầu nhập" }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>
                <Col md={8}>
                  <Control
                    type="date"
                    model=".startDate"
                    id="startDate"
                    name="startDate"
                    className="form-control"
                    value={this.state.tenState}
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".startDate"
                    show="touched"
                    messages={{ required: "Yêu cầu nhập" }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="department" md={4}>
                  Phòng ban
                </Label>
                <Col md={8}>
                  <Control.select
                    model=".department"
                    id="department"
                    name="department"
                    className="form-control"
                  >
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".salaryScale"
                    id="salaryScale"
                    name="salaryScale"
                    className="form-control"
                    placeholder="1.0 -> 3.0"
                    defaultValue="1"
                    validators={{ required, isNumber }}
                  />
                  <Errors
                    className="text-danger"
                    model=".salaryScale"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                      isNumber: "Yêu cầu nhập số",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".annualLeave"
                    id="annualLeave"
                    name="annualLeave"
                    className="form-control"
                    defaultValue="0"
                    validators={{ required, isNumber }}
                  />
                  <Errors
                    className="text-danger"
                    model=".annualLeave"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                      isNumber: "Yêu cầu nhập số",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="overTime" md={4}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={8}>
                  <Control.text
                    model=".overTime"
                    id="overTime"
                    name="overTime"
                    className="form-control"
                    defaultValue="0"
                    validators={{ required, isNumber }}
                  />
                  <Errors
                    className="text-danger"
                    model=".overTime"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                      isNumber: "Yêu cầu nhập số",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Thêm
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Staffs;
