import { FC } from "react";
import { NavLink } from "react-router-dom";
import "../style/style.css";

const Nav: FC = () => {
  return (
    <nav className=" bg-gray-800 text-white p-4 flex flex-col">
      <NavLink className={"text-gray-400  hover:text-white"} to={"/"}>
        Placeholder for home icon
      </NavLink>
      <NavLink className={"text-gray-400  hover:text-white "} to={"/"}>
        Weather
      </NavLink>
      <NavLink className={"text-gray-400  hover:text-white"} to={"/cities"}>
        Cities
      </NavLink>
      <NavLink className={"text-gray-400 hover:text-white"} to={"/map"}>
        Map
      </NavLink>
      <NavLink className={"text-gray-400 hover:text-white"} to={"/settings"}>
        Settings
      </NavLink>
    </nav>
  );
};

export default Nav;
