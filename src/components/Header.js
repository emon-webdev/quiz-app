import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <NavLink to='/' className="text-3xl text-blue-700 font-bold">Quiz App</NavLink>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <NavLink to='/home'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/statistics'>Statistics</NavLink>
            </li>
            <li>
              <NavLink to='/Blog'>Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
