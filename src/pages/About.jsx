import React from "react"
import { Outlet } from "react-router-dom"

export default function Nav() {
  return (
    <>
      <div className="nav-main">
        <p>About page</p>
      </div>
      <Outlet />
    </>
  )
}
