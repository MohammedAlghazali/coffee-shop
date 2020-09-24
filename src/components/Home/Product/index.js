import React from "react"
import Img from "gatsby-image"

const Product = ({ product }) => {
  return (
    <div>
      <Img
        style={{ width: "250px", height: "250px" }}
        fluid={product.image.fluid}
      />
      <div>{product.title}</div>
      <div>${product.price}</div>
      <div>{product.name}</div>
      <button
        className="snipcart-add-item"
        data-item-id={product.id}
        data-item-name={product.title}
        data-item-price={product.price}
        data-item-image={product.image.fluid.src}
        data-item-url="https://alghazali-coffee-shop.netlify.app/"
      >
        Add To Cart
      </button>
    </div>
  )
}

export default Product
