import React from "react"
import Product from "../Product"
import { StaticQuery, graphql } from "gatsby"

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
          <section>
            {data.products.edges.map(({ node: product }) => {
              return <Product key={product.id} product={product} />
            })}
          </section>
        )
      }}
    ></StaticQuery>
  )
}
