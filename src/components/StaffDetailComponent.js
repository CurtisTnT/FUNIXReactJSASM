import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

function RenderStaffDetail({ staff }) {
  if (staff != null) {
    console.log(staff);
    const doB = dateFormat(staff.doB, "dd/mm/yyyy");
    const startDate = dateFormat(staff.startDate, "dd/mm/yyyy");
    return (
      <div className=" mt-3">
        <Card className="selected-staff-border">
          <CardImg
            src={staff.image}
            alt={staff.name}
            width="100%"
            className="col-12 col-md-4 col-lg-3"
          />
          <CardBody className="text-decor col-12 col-md-8 col-lg-9">
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
    return <div></div>;
  }
}

const StaffDetail = (props) => {
  return (
    <div className="container">
      <div className="row>">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/nhanvien">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <Link to={props.staff.name}></Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <RenderStaffDetail staff={props.staff} />
      </div>
    </div>
  );
};
export default StaffDetail;
