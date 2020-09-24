import React, { useState } from "react"
import { Empty, Tag } from "antd"
import Title from "../../Global/Title"
import Img from "gatsby-image"

const { CheckableTag } = Tag

const Menu = ({ items }) => {
  const [coffeeItems] = useState(items.edges)
  const [coffeeItemsFiltered, setCoffeeItemsFiltered] = useState(items.edges)
  const [selectedTags, setSelectedTags] = useState(["All"])

  const tagsData = coffeeItems.map(coffeeItems => coffeeItems.node.categoty)
  const uniqueTags = ["All", ...new Set(tagsData)]

  const handleChange = (tag, checked) => {
    if (selectedTags[0] !== tag) {
      const filtered = coffeeItems.filter(
        coffee => coffee.node.categoty === tag
      )
      setSelectedTags([tag])
      if (tag !== "All") {
        setCoffeeItemsFiltered([...filtered])
      } else {
        setCoffeeItemsFiltered([...coffeeItems])
      }
    }
  }

  return coffeeItems.length === 0 ? (
    <Empty />
  ) : (
    <section>
      <div className="container">
        <Title title="our menu" />
        <>
          <span style={{ marginRight: 8 }}>Categories:</span>
          {uniqueTags.map(tag => (
            <CheckableTag
              key={tag}
              checked={selectedTags.indexOf(tag) > -1}
              onChange={checked => handleChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          ))}
        </>
        {coffeeItemsFiltered.map(coffee => (
          <div key={coffee.node.id}>
            <Img fixed={coffee.node.image.fixed} />
            <div>{coffee.node.description.description}</div>
            <div>{coffee.node.title}</div>
            <div>{coffee.node.price}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu
