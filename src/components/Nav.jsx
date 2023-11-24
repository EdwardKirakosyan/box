import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className="nav-main">
      <img className="logo" src="../img/box-logo.png" alt="logo" />
      <ul className="nav-list">
        <Link to="/" className="nav-list-item">
          Home
        </Link>
        <Link to="/about" className="nav-list-item">
          About
        </Link>
        <Link to="/top" className="nav-list-item">
          TOP 10
        </Link>
      </ul>
    </div>
  )
}
