import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Nav() {
  const activeStyles = {
    transform: "scale(1.1)",
    fontWeight: "bold",
  }

  return (
    <div className="nav-main">
      <Link to="/">
        <img className="logo" src="../img/box-logo.png" alt="logo" />
      </Link>
      <ul className="nav-list">
        <NavLink
          to="/"
          className="nav-list-item"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="nav-list-item"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/top"
          className="nav-list-item"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          TOP 10
        </NavLink>
      </ul>
    </div>
  )
}
