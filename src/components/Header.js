import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div class="navbar  bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/Blog">Blog</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="text-2xl text-blue-700 font-bold">
            Quiz App
          </NavLink>
        </div>
        <div class="navbar-end hidden md:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/Blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
