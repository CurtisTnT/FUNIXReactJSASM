import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function Department(props) {
  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/phongban">Phòng ban</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <div>Department</div>
    </div>
  );
}
export default Department;
