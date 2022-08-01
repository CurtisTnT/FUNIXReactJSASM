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
  Col,
  FormFeedback,
} from "reactstrap";

class Staffs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      doB: "",
      startDate: "",
      department: "sale",
      salaryScale: "1",
      annualLeave: "0",
      overTime: "0",
      isModalOpen: false,
      staffs: this.props.staffs,
      touched: {
        fullname: false,
        doB: false,
        startDate: false,
        salaryScale: false,
        annualLeave: false,
        overTime: false,
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(fullname, doB, startDate, salaryScale, annualLeave, overTime) {
    const errors = {
      fullname: "",
      doB: "",
      startDate: "",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
    };

    if (this.state.touched.fullname && fullname.length === 0)
      errors.fullname = "Yêu cầu nhập";
    else if (this.state.touched.fullname && fullname.length < 2)
      errors.fullname = "Yêu cầu nhiều hơn 2 ký tự";
    else if (this.state.touched.fullname && fullname.length > 30)
      errors.fullname = "Yêu cầu ít hơn 30 ký tự";

    if (this.state.touched.doB && doB.length === 0) errors.doB = "Yêu cầu nhập";

    if (this.state.touched.startDate && startDate.length === 0)
      errors.startDate = "Yêu cầu nhập";

    const reg = /^\d+$/;
    if (this.state.touched.salaryScale && salaryScale.length === 0)
      errors.salaryScale = "Yêu cầu nhập";
    else if (this.state.touched.salaryScale && !reg.test(salaryScale))
      errors.salaryScale = "Yêu cầu nhập số";

    if (this.state.touched.annualLeave && annualLeave.length === 0)
      errors.annualLeave = "Yêu cầu nhập";
    else if (this.state.touched.annualLeave && !reg.test(annualLeave))
      errors.annualLeave = "Yêu cầu nhập số";

    if (this.state.touched.overTime && overTime.length === 0)
      errors.overTime = "Yêu cầu nhập";
    else if (this.state.touched.overTime && !reg.test(overTime))
      errors.overTime = "Yêu cầu nhập số";

    return errors;
  }

  handleSubmit(event) {
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
    const errors = this.validate(
      this.state.fullname,
      this.state.doB,
      this.state.startDate,
      this.state.salaryScale,
      this.state.annualLeave,
      this.state.overTime
    );
    if (
      this.state.fullname === "" ||
      this.state.doB === "" ||
      this.state.startDate === ""
    ) {
      this.setState({
        touched: {
          fullname: true,
          doB: true,
          startDate: true,
        },
      });
    } else if (
      errors.fullname !== "" ||
      errors.doB !== "" ||
      errors.startDate !== "" ||
      errors.salaryScale !== "" ||
      errors.annualLeave !== "" ||
      errors.overTime !== ""
    ) {
    } else {
      let staffs = this.state.staffs;
      staffs.push(newStaff);
      this.setState({
        staffs: staffs,
      });
      this.toggleModal();
    }
    event.preventDefault();
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
    const errors = this.validate(
      this.state.fullname,
      this.state.doB,
      this.state.startDate,
      this.state.salaryScale,
      this.state.annualLeave,
      this.state.overTime
    );
    return (
      <div className="container-fluid main-body">
        <Form className="row justify-content-center mt-2">
          <Button
            color="danger"
            outline
            className="col-md-3 col-12 col-lg-2 mr-6 mb-1 p-0 "
            onClick={this.toggleModal}
          >
            <span className="fa fa-plus-square-o fa-lg mr-1 mb-1"></span>Thêm
            mới nhân viên
          </Button>
          <FormGroup className="row col-md-6 m-0">
            <Button
              color="danger"
              outline
              onClick={this.props.onClick}
              className="col-4 col-md-4 col-lg-2"
            >
              <span className="fa fa-search fa-lg"></span>Tìm kiếm
            </Button>
            <Input
              className="input-staff ml-2 col-7 col-md-7 col-lg-9"
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
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="fullname" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={this.state.fullname}
                    valid={errors.fullname === ""}
                    invalid={errors.fullname !== ""}
                    onBlur={this.handleBlur("fullname")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.fullname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="doB" md={4}>
                  Ngày sinh
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    id="doB"
                    name="doB"
                    value={this.state.tenState}
                    valid={errors.doB === ""}
                    invalid={errors.doB !== ""}
                    onBlur={this.handleBlur("doB")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.doB}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={this.state.tenState}
                    valid={errors.startDate === ""}
                    invalid={errors.startDate !== ""}
                    onBlur={this.handleBlur("startDate")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.startDate}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="department" md={4}>
                  Phòng ban
                </Label>
                <Col md={8}>
                  <Input
                    type="select"
                    id="department"
                    name="department"
                    value={this.state.department}
                    onChange={this.handleInputChange}
                  >
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Input>
                  <FormFeedback>{errors.department}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="salaryScale"
                    name="salaryScale"
                    placeholder="1.0 -> 3.0"
                    value={this.state.salaryScale}
                    valid={errors.salaryScale === ""}
                    invalid={errors.salaryScale !== ""}
                    onBlur={this.handleBlur("salaryScale")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.salaryScale}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="annualLeave"
                    name="annualLeave"
                    value={this.state.annualLeave}
                    valid={errors.annualLeave === ""}
                    invalid={errors.annualLeave !== ""}
                    onBlur={this.handleBlur("annualLeave")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.annualLeave}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="overTime" md={4}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="overTime"
                    name="overTime"
                    value={this.state.overTime}
                    valid={errors.overTime === ""}
                    invalid={errors.overTime !== ""}
                    onBlur={this.handleBlur("overTime")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.overTime}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Thêm
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Staffs;
