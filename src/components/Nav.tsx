import { FC } from "react";
import { NavLink } from "react-router-dom";
import "../style/style.css";

const Nav: FC = () => {
  return (
    <nav>
      <NavLink to={"/"}>Placeholder for home icon</NavLink>
      <NavLink to={"/"}>Weather</NavLink>
      <NavLink to={"/cities"}>Cities</NavLink>
      <NavLink to={"/map"}>Map</NavLink>
      <NavLink to={"/settings"}>Settings</NavLink>
    </nav>
  );
};

export default Nav;
