import * as React from 'react'
import { useState } from 'react'
import { Form, Input, Row, Col } from 'antd'
import NumericInput from '../UI/NumericInput'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 24 },
}

export default function FirstStep() {
  const [form] = Form.useForm()
  const [phone, setPhone] = useState('')
  const [fullName, setFullName] = useState('')

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <Row justify="center">
      <Col xs={24} lg={22} xl={20} xxl={18}>
        <Form
          {...layout}
          layout="vertical"
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{ padding: 30 }}
        >
          <Form.Item
            name="fullName"
            label="Full Name: "
            rules={[{ required: true }]}
          >
            <Input value={fullName} onChange={setFullName} />
          </Form.Item>
          <Form.Item name="phone" label="Phone: " rules={[{ required: true }]}>
            <NumericInput value={phone} onChange={setPhone} />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
