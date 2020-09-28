import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row } from "antd"

import "./style.css"

import Title from "../../Global/Title"
import Product from "../Product"

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        console.log("data", data)
        return (
          <section className="home__product">
            <Title title="Out Product" />
            <Row gutter={35} justify="center">
              {data.products.edges.map(({ node: product }) => {
                return <Product key={product.id} product={product} />
              })}
            </Row>
          </section>
        )
      }}
    ></StaticQuery>
  )
}
