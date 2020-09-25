import React from "react"
import Title from "../../Global/Title"
import { Form, Input, Button, notification, Row, Col } from "antd"

import "./style.css"

const axios = require("axios")
const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

export default function Contact() {
  const onFinish = async values => {
    console.log("Success:", values)
    const response = await axios.post("https://formspree.io/xdopobnw", values)

    if (response.status === 200) {
      notification["success"]({
        message: "Done",
        description: "Email Sent successfully",
      })
    } else {
      notification["error"]({
        message: "failed",
        description: "some thing went wrong",
      })
    }
  }

  const onFinishFailed = errorInfo => {
    notification["error"]({
      message: "failed",
      description: errorInfo,
    })
  }

  return (
    <Row justify="center" className="home__contact" id="contact">
      <Col xs={18} sm={16} md={16} lg={14} xl={24}>
        <Title title="Contact Us" />
      </Col>

      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          span={12}
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input the description!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Row>
  )
}
