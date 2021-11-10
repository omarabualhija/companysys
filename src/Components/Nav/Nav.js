import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { NavBar } from "./NavStyle";
export const Nav = () => {
  return (
    <NavBar>
      <Container>
        <div>
          <NavLink to="/customers">customers</NavLink>
          <NavLink to="/departments">departments</NavLink>
          <NavLink to="/">employees</NavLink>
          <NavLink to="/Works">Works</NavLink>
          <NavLink to="/Tasks">Tasks</NavLink>
        </div>
        <button>Setting</button>
      </Container>
    </NavBar>
  );
};
