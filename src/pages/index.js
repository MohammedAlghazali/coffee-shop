import React from "react"
import { Link } from "gatsby"
import { Button } from "antd"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCoffee } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Button type="primary">Primary</Button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <FaCoffee />
  </Layout>
)

export default IndexPage
