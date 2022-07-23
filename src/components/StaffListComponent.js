import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardImg, Navbar } from "reactstrap";

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
      console.log(document.querySelectorAll(".staffs")),
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.remove("col-lg-4", "col-lg-6")),
      document
        .querySelectorAll(".staffs")
        .forEach((staff) => staff.classList.add("col-lg-2"))
    );
  }

  return (
    <div className="container-fluid main-body">
      <Navbar className="d-flex justify-content-center">
        <form>
          <button
            type="button"
            className="mr-1 btn-find"
            onClick={props.onClick}
          >
            <span className="fa fa-search fa-lg mr-2"></span>
            Tìm kiếm
          </button>
          <input
            className="input-staff"
            type="search"
            placeholder="Tìm kiếm nhân viên..."
          ></input>
        </form>
      </Navbar>
      <div className="row staff">{list}</div>
      <div className="text-decor">
        <h5>Bấm vào tên nhân viên để xem thông tin</h5>
      </div>
      <div className="row view text-decor mb-2">
        <h5 className="ml-3">Thay đổi view hiển thị:</h5>
      </div>
      <div className="row text-decor">
        <button className="col-1 m-1" onClick={render2Cols}>
          2 cột
        </button>
        <button className="col-1 m-1" onClick={render3Cols}>
          3 cột
        </button>
        <button className="col-1 m-1" onClick={render6Cols}>
          6 cột
        </button>
      </div>
      <div className="row view text-decor mb-2">
        <h5 className="ml-3">Sắp xếp tên nhân viên theo thứ tự:</h5>
      </div>
      <div className="row text-decor">
        <button className="col-1 m-1" onClick={props.onClick1}>
          A-Z
        </button>
        <button className="col-1 m-1" onClick={props.onClick2}>
          Z-A
        </button>
      </div>
    </div>
  );
}

export default Staffs;
