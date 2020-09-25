import React, { useState } from "react"
import { Empty, Tag, Row, Col } from "antd"
import Img from "gatsby-image"

import "./style.css"

import Title from "../../Global/Title"

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
    <Row className="home__menu">
      <Col span={24}>
        <Title title="Our Menu" />
      </Col>

      <Col span={24} className="home__menu__tag-container">
        {uniqueTags.map(tag => (
          <CheckableTag
            className="home__menu__tag"
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </Col>
      <Col span={24}>
        <Row justify="center" gutter={30} style={{ margin: "0" }}>
          {coffeeItemsFiltered.map(coffee => (
            <Col
              className="home__menu__item"
              key={coffee.node.id}
              xs={20}
              sm={20}
              md={16}
              lg={16}
              xl={10}
            >
              <Row>
                <Col span={3}>
                  <Img fixed={coffee.node.image.fixed} />
                </Col>
                <Col span={21}>
                  <Col className="home__menu__item__title">
                    {coffee.node.title}
                  </Col>
                  <Col>{coffee.node.description.description}</Col>
                  <Col className="home__menu__item__price">
                    ${coffee.node.price}
                  </Col>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default Menu
