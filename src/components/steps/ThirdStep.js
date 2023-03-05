import * as React from 'react'
import { useState } from 'react'
import { Form, Input, Row, Col } from 'antd'

const layout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 20 },
}

export default function ThirdStep() {
  const [form] = Form.useForm()
  const [specialEquipment, setSpecialEquipment] = useState('')
  const [availableItems, setAvailableItems] = useState('')
  const [extraItems, setExtraItems] = useState('')

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
            name="specialEquipment"
            label="Will you need special equipment EG Forklift/other plant? If so specify"
          >
            <Input value={specialEquipment} onChange={(e) => setSpecialEquipment(e.target.value)}/>
          </Form.Item>
          <Form.Item
            name="availableItems"
            label="Please indicate the items you have."
          >
            <Input.TextArea rows={4} value={availableItems} onChange={(e) => setAvailableItems(e.target.value)}/>
          </Form.Item>
          <Form.Item
            name="extraItems"
            label="Any items you would like us to pay extra special attention to?"
          >
            <Input.TextArea rows={6} value={extraItems} onChange={(e) => setExtraItems(e.target.value)}/>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
