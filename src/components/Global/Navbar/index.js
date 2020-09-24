import React from "react"
import { FiCoffee } from "react-icons/fi"
import "./nav.css"

import RightNav from "./RightMenu"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <FiCoffee />
        &nbsp; Coffee
      </div>
      <RightNav />
    </nav>
  )
}

export default Navbar
