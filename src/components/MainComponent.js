import React, { Component } from "react";
import Staffs from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { STAFFS } from "../shared/staffs";
import { Switch, Route, Redirect } from "react-router-dom";
import StaffDetail from "./StaffDetailComponent";
import Department from "./DepartmentComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
    };
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
        />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exect
            path="/nhanvien"
            component={() => <Staffs staffs={this.state.staffs} />}
          />
          <Route path="/nhanvien/:staffId" component={StaffWithId} />
          <Route exact path="/phongban" component={Department} />
          <Redirect to="/nhanvien" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
