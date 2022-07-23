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

  FindStaff(staffs) {
    if (
      typeof staffs.find(
        (staff) => staff.name === document.querySelector(".input-staff").value
      ) === "undefined"
    ) {
      alert("This staff's name does not exist! Please fill in again!");
    } else {
      this.setState({
        staffs: staffs.filter(
          (staff) => staff.name === document.querySelector(".input-staff").value
        ),
      });
    }
  }

  Staff() {
    this.setState({
      staffs: STAFFS,
    });
  }

  StaffIdDecrease() {
    const idReverse = this.state.staffs.map((staff) => staff.id).reverse();
    let idDecrease = [];
    for (let i = 0; i <= idReverse.length - 1; i++) {
      idDecrease.push(
        this.state.staffs.find((staff) => staff.id === idReverse[i])
      );
    }
    this.setState({
      staffs: idDecrease,
    });
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
        <Header onClick={() => this.Staff(this.state.staffs)} />
        <Switch>
          <Route
            exact
            path="/nhanvien"
            component={() => (
              <Staffs
                staffs={this.state.staffs}
                onClick={() => this.FindStaff(this.state.staffs)}
                onClick1={() => this.Staff(this.state.staffs)}
                onClick2={() => this.ReverseStaff(this.state.staffs)}
              />
            )}
          />
          <Route path="/nhanvien/:staffId" component={StaffWithId} />
          <Route
            path="/bangluong"
            component={() => (
              <Payroll
                staffs={this.state.staffs}
                onClick={() => this.Staff(this.state.staffs)}
                onClick1={() => this.StaffIdDecrease(this.state.staffs)}
              />
            )}
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
