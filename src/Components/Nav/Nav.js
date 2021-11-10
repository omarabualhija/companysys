import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { NavBar } from "./NavStyle";
export const Nav = () => {
  return (
    <NavBar>
      <Container>
        <div>
          <NavLink to="/Business">customers</NavLink>
          <NavLink to="Accounts">departments</NavLink>
          <NavLink to={"/Order"}>employees</NavLink>
          <NavLink to="/Works">Works</NavLink>
          <NavLink to="User">Tasks</NavLink>
        </div>
        <button>Setting</button>
      </Container>
    </NavBar>
  );
};
