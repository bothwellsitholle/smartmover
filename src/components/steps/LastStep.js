import * as React from 'react'
import { useState } from 'react'
import { Form, Input, Row, Col, Select, Radio } from 'antd'

const { Search } = Input
const { Option } = Select

const layout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 20 },
}

const stairs_list = ['None/pick up', 'Location/drop off', 'Location']

const moving_date = [
  'Between 25th and 27th',
  'Between 3rd and 25th',
  'Between 27th and 3rd',
]

const optionsList = ['yes', 'no']

export default function LastStep() {
  const [form] = Form.useForm()
  const [packing, setPacking] = useState('yes')
  const [emailQuote, setEmailQuote] = useState('yes')
//   const [stairs, setStairs] = useState('None/pick up')
//   const [movingDate, setMovingDate] = useState('Between 25th and 27th')

  const onFinish = (values) => {
    console.log(values)
  }

  const onSearch = (value) => console.log(value)

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
          initialValues={{stairs: 'None/pick up',  movingDate: 'Between 25th and 27th', packing:'yes', emailQuote: 'yes'}}
        >
          <Form.Item
            name="pickupAddress"
            label="Pick-up Address or Suburb/area:"
            rules={[{ required: true }]}
          >
            <Search
              placeholder="Enter your pickup location"
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </Form.Item>
          <Form.Item
            name="dropOffAddress"
            label="Drop-off address or Suburb/area:"
            rules={[{ required: true }]}
          >
            <Search
              placeholder="Enter your drop off location"
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </Form.Item>
          <Form.Item
            name="stairs"
            label="Are there stairs at your respective addresses?"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Are there stairs at your respective addresses?"
            //   onChange={(e) => setStairs(e.target.value)}
            //   value={stairs}
              allowClear
            >
              {stairs_list.map((option) => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="movingDate"
            label="When do you want to move?"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="When do you want to move?"
            //   onChange={(e) => setMovingDate(e.target.value)}
            //   value={movingDate}
              allowClear
            >
              {moving_date.map((option) => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="packing"
            label="Do you require packing of boxes?"
            rules={[{ required: true }]}
          >
            <Radio.Group
              onChange={(e) => setPacking(e.target.value)}
              value={packing}
            >
              {optionsList.map((option) => (
                <Radio key={option} value={option}>
                  {option}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="emailQuote"
            label="Would you like us to email you a full quotation?"
            rules={[{ required: true }]}
          >
            <Radio.Group
              onChange={(e) => setEmailQuote(e.target.value)}
              value={emailQuote}
            >
              {optionsList.map((option) => (
                <Radio key={option} value={option}>
                  {option}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
