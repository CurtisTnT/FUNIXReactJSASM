import React, { Component } from "react";
import Staffs from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { STAFFS } from "../shared/staffs";
import { Switch, Route, Redirect } from "react-router-dom";
import StaffDetail from "./StaffDetailComponent";
import Department from "./DepartmentComponent";
import Payroll from "./PayrollComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
    };
  }

  FindStaff() {
    return (
      <StaffDetail
        staff={this.state.staffs.find(
          (staff) => staff.name === document.querySelector(".input-find").value
        )}
      />
    );
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={this.state.staffs.find(
            (staff) => staff.id === parseInt(match.params.staffId, 10)
          )}
        />
      );
    };

    return (
      <div>
        <Header onClick={this.FindStaff} />
        <Switch>
          <Route
            exact
            path="/nhanvien"
            component={() => <Staffs staffs={this.state.staffs} />}
          />
          <Route path="/nhanvien/:staffId" component={StaffWithId} />
          <Route
            path="/bangluong"
            component={() => <Payroll staffs={this.state.staffs} />}
          />
          <Route exact path="/phongban" component={Department} />
          <Redirect to="/nhanvien" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
