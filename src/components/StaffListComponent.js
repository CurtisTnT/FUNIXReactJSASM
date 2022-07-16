import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

function Staffs(props) {
  const list = props.staffs.map((staff) => {
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
  function render2Cols() {
    return (
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.remove("col-lg-4", "col-lg-2")),
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.add("col-lg-6"))
    );
  }
  function render3Cols() {
    return (
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.remove("col-lg-2", "col-lg-6")),
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.add("col-lg-4"))
    );
  }

  function render6Cols() {
    return (
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.remove("col-lg-4", "col-lg-6")),
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.add("col-lg-2"))
    );
  }
  return (
    <div className="container">
      <div className="row">{list}</div>
      <div className="text-decor">
        <h5>Bấm vào tên nhân viên để xem thông tin</h5>
      </div>
      <div className="row view text-decor mb-2">
        <h5>Thay đổi view hiển thị:</h5>
        <button className="col-2 m-1" onClick={render2Cols}>
          2 cột
        </button>
        <button className="col-2 m-1" onClick={render3Cols}>
          3 cột
        </button>
        <button className="col-2 m-1" onClick={render6Cols}>
          6 cột
        </button>
      </div>
    </div>
  );
}

export default Staffs;
