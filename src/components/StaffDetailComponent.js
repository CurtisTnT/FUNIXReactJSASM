import React from "react";
import {
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

function RenderStaffDetail({ staff }) {
  if (staff != null) {
    const doB = dateFormat(staff.doB, "dd/mm/yyyy");
    const startDate = dateFormat(staff.startDate, "dd/mm/yyyy");
    return (
      <div className=" my-3">
        <div className="selected-staff-border row">
          <CardImg
            src={staff.image}
            alt={staff.name}
            width="100%"
            className="col-12 col-md-4 col-lg-3"
          />
          <CardBody className="text-decor col-12 col-md-8 col-lg-9">
            <CardTitle>Họ và tên: {staff.name}</CardTitle>
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
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
const StaffDetail = (props) => {
  return (
    <div className="container-fluid main-body">
      <div className="row>">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/nhanvien">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <RenderStaffDetail staff={props.staff} />
    </div>
  );
};
export default StaffDetail;
