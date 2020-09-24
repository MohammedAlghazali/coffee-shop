import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Global/layout"
import SEO from "../components/Home/seo"

import BackgroundSection from "../components/Home/BackgroundSection"
import Info from "../components/Home/Info"

const AboutPage = ({ data }) => {
  console.log("data", data)
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="we are in about page"
        styleClass="default-background"
      />
      <Info />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
