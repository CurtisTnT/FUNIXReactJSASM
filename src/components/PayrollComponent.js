import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  CardHeader,
} from "reactstrap";

function RenderPayroll({ staff }) {
  return (
    <Card className="card-css">
      <CardTitle className="ml-3">{staff.name}</CardTitle>
      <CardText className="offset-3">Mã nhân viên: {staff.id}</CardText>
      <CardText className="offset-3">Hệ số lương: {staff.salaryScale}</CardText>
      <CardText className="offset-3 mb-4">
        Số ngày làm thêm: {staff.overTime}
      </CardText>
      <CardHeader className="mr-5 ml-5 mb-2 text-center">
        Lương:{" "}
        {Math.round(staff.salaryScale * 3000000 + staff.overTime * 200000)}
      </CardHeader>
    </Card>
  );
}

function Payroll(props) {
  const payroll = props.staffs.map((staff) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mb-3">
        <RenderPayroll staff={staff} />
      </div>
    );
  });
  return (
    <div className="container-fluid main-body">
      <Breadcrumb>
        <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
      </Breadcrumb>
      <div className="row">{payroll}</div>
      <div className="row view text-decor mb-2">
        <h5 className="ml-3">Sắp xếp id nhân viên theo thứ tự:</h5>
      </div>
      <div className="row text-decor">
        <button className="col-2 m-1" onClick={props.onClick}>
          Tăng
        </button>
        <button className="col-2 m-1" onClick={props.onClick1}>
          Giảm
        </button>
      </div>
    </div>
  );
}

export default Payroll;
