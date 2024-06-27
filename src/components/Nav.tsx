import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const Nav: FC = () => {
  return (
    <div>
      <NavLink to={"/"}>Placeholder for home icon</NavLink>
      <NavLink to={"/"}>Weather</NavLink>
      <NavLink to={"/cities"}>Cities</NavLink>
      <NavLink to={"/map"}>Map</NavLink>
      <NavLink to={"/settings"}>Settings</NavLink>
    </div>
  );
};

export default Nav;
