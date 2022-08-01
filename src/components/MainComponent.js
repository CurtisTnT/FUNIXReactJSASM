import React, { Component } from "react";
import Staffs from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import StaffDetail from "./StaffDetailComponent";
import Department from "./DepartmentComponent";
import Payroll from "./PayrollComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: this.props.staffs,
    };
    this.FindStaff = this.FindStaff.bind(this);
  }

  FindStaff(staffs) {
    if (document.querySelector(".input-staff").value === "") {
      this.setState({
        staffs: staffs,
      });
    } else if (
      typeof staffs.find((staff) =>
        staff.name
          .toLowerCase()
          .includes(
            `${document.querySelector(".input-staff").value.toLowerCase()}`
          )
      ) === "undefined"
    )
      alert("This staff's name does not exist! Please fill in again!");
    else {
      this.setState({
        staffs: staffs.filter((staff) =>
          staff.name
            .toLowerCase()
            .includes(
              `${document.querySelector(".input-staff").value.toLowerCase()}`
            )
        ),
      });
    }
  }

  Staff(staffs) {
    this.setState({
      staffs: staffs,
    });
  }

  ReverseStaff() {
    const staffNameReversed = this.state.staffs
      .map((staff) => staff.name)
      .reverse();
    let staffReversed = [];
    for (let i = 0; i <= staffNameReversed.length - 1; i++) {
      staffReversed.push(
        this.state.staffs.find((staff) => staff.name === staffNameReversed[i])
      );
    }
    this.setState({
      staffs: staffReversed,
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
          onClick={() => this.Staff(this.props.staffs)}
        />
      );
    };

    return (
      <div>
        <Header onClick={() => this.Staff(this.props.staffs)} />
        <Switch>
          <Route
            exact
            path="/nhanvien"
            component={() => (
              <Staffs
                staffs={this.state.staffs}
                onClick={() => this.FindStaff(this.props.staffs)}
                onClick1={() => this.Staff(this.props.staffs)}
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
                onClick={() => this.Staff(this.props.staffs)}
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
export default withRouter(connect(mapStateToProps)(Main));
