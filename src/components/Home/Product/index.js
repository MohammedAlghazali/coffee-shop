import React from "react"
import Img from "gatsby-image"
import { Card, Button, Col } from "antd"

import "./style.css"

const { Meta } = Card

const Product = ({ product }) => {
  return (
    <Col xs={13} sm={13} md={9} lg={7} xl={6} className="home__product__card">
      <Card
        style={{ textAlign: "center" }}
        cover={<Img fluid={product.image.fluid} />}
      >
        <Meta title={product.title} />
        <h4>$ {product.price}</h4>
        <Button
          type="primary"
          className="snipcart-add-item"
          data-item-id={product.id}
          data-item-name={product.title}
          data-item-price={product.price}
          data-item-image={product.image.fluid.src}
          data-item-url="https://alghazali-coffee-shop.netlify.app/"
        >
          Add To Cart
        </Button>
      </Card>
    </Col>
  )
}

export default Product
