import React from "react"
import { Link } from "gatsby"
import { Row, Col, Button } from "antd"

import "./style.css"
import Title from "../../Global/Title"

const Info = () => {
  return (
    <Row className="home__info" justify="center">
      <Col span={24}>
        <Title title="Our Story" />
      </Col>

      <Col
        xs={18}
        sm={16}
        md={16}
        lg={14}
        xl={14}
        className="home__info__paragraph"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          lacus sed justo lacinia faucibus. Aenean aliquam arcu ut arcu
          ultricies, vitae ullamcorper enim placerat. Vestibulum id quam
          finibus, vulputate quam id, imperdiet nulla. Vivamus accumsan
          elementum mi, euismod ullamcorper justo malesuada a. Nunc turpis
          tortor, finibus vel massa eu, volutpat molestie risus. Nunc eget
          tempor ante, nec lacinia justo. Donec mollis, odio non lacinia
          ultricies, arcu diam finibus eros, ut viverra erat justo blandit sem.
          Aenean semper nunc justo, vitae blandit nibh viverra vel. Praesent
          dictum elementum tortor nec molestie. Aenean nec placerat quam.
          Suspendisse consequat diam ut leo.
        </p>
      </Col>

      <Col span={24}>
        <Link to="/about">
          <Button type="primary">About Page</Button>
        </Link>
      </Col>
    </Row>
  )
}

export default Info
