import React, { useState } from "react"
import { Link } from "gatsby"
import { Button } from "antd"
import { AiOutlineClose } from "react-icons/ai"
import { FaCartArrowDown } from "react-icons/fa"
import { FiCoffee } from "react-icons/fi"

import "./nav.css"

const RightMenu = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => setVisible(true)

  const onClose = () => setVisible(false)

  const isNavOpen = visible ? `navbar__menu--open ` : ""
  return (
    <>
      {visible ? (
        <>
          <div
            style={{
              zIndex: "2",
            }}
            className="navbar__btn"
          >
            <div className="navbar__logo">
              <FiCoffee />
              &nbsp; Coffee
            </div>
            <Button
              style={{ marginLeft: "65px" }}
              type="primary"
              onClick={onClose}
            >
              <AiOutlineClose />
            </Button>
          </div>
          <div className="nav-overlay" />
        </>
      ) : (
        <div className="navbar__btn">
          <Button type="primary" onClick={showDrawer}>
            <span className="navbar__btn__span"></span>
          </Button>
        </div>
      )}

      <ul className={`navbar__menu ${isNavOpen}`}>
        <li className="navbar__menu__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__menu__item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar__menu__item">
          <Link to="/#contact">Contact</Link>
        </li>
        <li className="navbar__menu__item">
          <FaCartArrowDown className="snipcart-checkout" />
        </li>
      </ul>
    </>
  )
}

export default RightMenu
