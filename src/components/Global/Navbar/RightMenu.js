import React, { useState } from "react"
import { Button } from "antd"
import { AiOutlineClose } from "react-icons/ai"
import { FaCartArrowDown } from "react-icons/fa"

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
          <div style={{ zIndex: "1" }} className="navbar__btn">
            <Button type="primary" onClick={onClose}>
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
        <li className="navbar__menu__item">Home</li>
        <li className="navbar__menu__item">About</li>
        <li className="navbar__menu__item">Contact</li>
        <li className="navbar__menu__item">Price</li>
        <li className="navbar__menu__item">
          <FaCartArrowDown className="snipcart-checkout" />
        </li>
      </ul>
    </>
  )
}

export default RightMenu
