import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  NavbarToggler,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar expand="md">
          <div className="container">
            <NavbarToggler />
            <NavbarBrand href="/">
              <img
                src="assets/images/logopink.png"
                alt="Logo"
                height="45"
                width="45"
              />
            </NavbarBrand>
            <Collapse navbar>
              <Nav navbar>
                <NavItem className="border-right border-light header-text">
                  <NavLink className="nav-link" to="/nhanvien">
                    <span className="fa fa-users fa-lg mr-2"></span>Nhân viên
                  </NavLink>
                </NavItem>
                <NavItem className="border-right border-light header-text">
                  <NavLink className="nav-link" to="/phongban">
                    <span className="fa fa-address-card fa-lg mr-2"></span>Phòng
                    ban
                  </NavLink>
                </NavItem>
                <NavItem className="header-text">
                  <NavLink className="nav-link" to="/">
                    <span className="fa fa-money fa-lg mr-2"></span>Bảng lương
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Navbar className="d-flex justify-content-center">
          <form>
            <button type="submit" className="mr-1">
              <span className="fa fa-search fa-lg mr-2"></span>
              Tìm kiếm
            </button>
            <input type="search" placeholder="Tìm kiếm nhân viên..."></input>
          </form>
        </Navbar>
      </div>
    );
  }
}

export default Header;
