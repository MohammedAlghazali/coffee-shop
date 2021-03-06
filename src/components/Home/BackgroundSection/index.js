import React from "react"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({
  img,
  styleClass,
  title,
  children,
  headingClass,
}) => {
  return (
    <BackgroundImage
      style={{ height: "100vh" }}
      className={styleClass}
      fluid={img}
    >
      <h1 className={headingClass}>{title}</h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

export default BackgroundSection
