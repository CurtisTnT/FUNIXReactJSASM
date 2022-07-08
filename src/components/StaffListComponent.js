import React, { Component } from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

class Staffs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
    };
  }

  onStaffSelect(staff) {
    this.setState({
      selectedStaff: staff,
    });
  }

  renderStaff(staff) {
    if (staff != null) {
      const doB = dateFormat(staff.doB, "dd/mm/yyyy");
      const startDate = dateFormat(staff.startDate, "dd/mm/yyyy");
      return (
        <div className=" mt-3">
          <Card className="selected-staff-border">
            <CardBody className="text-decor">
              <CardText>
                <h4>Họ và tên: {staff.name}</h4>
              </CardText>
              <CardText>
                <span>Ngày sinh: </span>
                {doB}
              </CardText>
              <CardText>
                <span>Ngày vào công ty: </span>
                {startDate}
              </CardText>
              <CardText>
                <span>Phòng ban: </span>
                {staff.department.name}
              </CardText>
              <CardText>
                <span>Số ngày nghỉ còn lại: </span>
                {staff.annualLeave}
              </CardText>
              <CardText>
                <span>Số ngày đã làm thêm: </span>
                {staff.overTime}
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return (
        <div className="text-decor">
          <h5>Bấm vào tên nhân viên để xem thông tin</h5>
        </div>
      );
    }
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
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.remove("col-lg-4", "col-lg-6")),
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.add("col-lg-2"))
    );
  }

  render() {
    const list = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-6 col-lg-4 staffs mt-2 ">
          <Card
            onClick={() => this.onStaffSelect(staff)}
            className="staffs-border"
          >
            <CardBody className="staffs-background">
              <CardTitle className="text-decor">{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{list}</div>
        <div className="row">{this.renderStaff(this.state.selectedStaff)}</div>
        <div className="row view text-decor">
          <h5>Thay đổi view hiển thị:</h5>
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
      </div>
    );
  }
}
export default Staffs;
