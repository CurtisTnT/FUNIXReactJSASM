import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";
import { DEPARTMENTS } from "../shared/staffs";

function RenderDepartment({ department }) {
  return (
    <Card className="card-css">
      <CardTitle className="ml-3">{department.name}</CardTitle>
      <CardText className="mb-4 text-center">
        Số lượng nhân viên: {department.numberOfStaff}
      </CardText>
    </Card>
  );
}

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: DEPARTMENTS,
    };
  }

  render() {
    const DepartmentList = this.state.departments.map((department) => {
      return (
        <div className="col-12 col-md-6 col-lg-4 mb-3" key={department.id}>
          <RenderDepartment department={department} />
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <Breadcrumb>
          <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">{DepartmentList}</div>
      </div>
    );
  }
}
export default Departments;
