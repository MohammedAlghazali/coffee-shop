import React from "react"

import "./nav.css"

import RightNav from "./RightMenu"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">logo</div>
      <RightNav />
    </nav>
  )
}

export default Navbar
