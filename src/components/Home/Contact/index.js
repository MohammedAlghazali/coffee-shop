import React from "react"
import Title from "../../Global/Title"
import { Form, Input, Button, notification } from "antd"

const axios = require("axios")
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
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
    <>
      <Title title="Contact Us" />
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
    </>
  )
}
