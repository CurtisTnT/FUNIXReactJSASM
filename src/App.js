import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Staffs from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="danger">
          <div className="container">
            <NavbarBrand href="/">ỨNG DỤNG QUẢN LÝ NHÂN SỰ V1.0</NavbarBrand>
          </div>
        </Navbar>
        <Staffs staffs={this.state.staffs} />
      </div>
    );
  }
}
export default App;
