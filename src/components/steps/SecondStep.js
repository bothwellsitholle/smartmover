import * as React from 'react'
import { useState } from 'react'
import { Form, Input, Row, Col, Select, Radio } from 'antd'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 20 },
}

const { Option } = Select

const addressTypeList = [
  'Office',
  'Cottage',
  '1 bedroom',
  '2 bedroom',
  '3 bedroom',
]
const stopsList = [
  '1',
  '2',
  '3',
  '4'
]

const optionsList = [
  'yes',
  'no'
]

export default function SecondStep() {
    //   const [adressType, setAdressType] = useState('Office')
  const [form] = Form.useForm()
  const [truckRestrictions, setTruckRestrictions] = useState('')
  const [bigItems, setBigItems] = useState('')
  const [unpack, setUnpack] = useState("yes")
  const [dismantling, setDismantling] = useState("yes")
  const [extraStop, setExtraStop] = useState("no")
  const [stops, setStops] = useState("1")

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
          onValuesChange={async (changedValues, allValues) => { 
            // const result = await form.validateFields()
            console.log("changedValues",changedValues)
            console.log("allValues", allValues)
            
            }}
          initialValues={{ adressType: 'Cottage', dismantling: 'yes', extraStop: 'no', stops: '1' }}
        >
          <Form.Item
            name="adressType"
            label="Pick up address type"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Pick up address type"
            //   onChange={(e) => setAdressType(e.target.value)}
            //   value={adressType}
              allowClear
            >
              {addressTypeList.map((option) => (
                <Option key={option} value={option}>{option}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="unpacking" label="Do you require unpacking?" rules={[{ required: true }]}>
            <Radio.Group onChange={(e) => setUnpack(e.target.value)} value={unpack}>
              {optionsList.map(option => <Radio key={option} value={option}>{option}</Radio>)}
            </Radio.Group>
          </Form.Item>
          <Form.Item name="dismantling" label="Do you require dismantling & reassembling?" rules={[{ required: true }]}>
            <Radio.Group onChange={(e) => setDismantling(e.target.value)} value={dismantling}>
              {optionsList.map(option => <Radio key={option} value={option}>{option}</Radio>)}
            </Radio.Group>
          </Form.Item>
          <Form.Item name="extraStop" label="Will an extra stop be required?" rules={[{ required: true }]}>
            <Radio.Group onChange={(e) => setExtraStop(e.target.value)} value={extraStop}>
              {optionsList.map(option => <Radio key={option} value={option}>{option}</Radio>)}
            </Radio.Group>
          </Form.Item>
          {extraStop === "yes" && <Form.Item
            name="stops"
            label="How many?"
          >
            <Select
              placeholder="How many?"
              onChange={setStops}
              value={stops}
              allowClear
            >
              {stopsList.map((option) => (
                <Option key={option} value={option}>{option}</Option>
              ))}
            </Select>
          </Form.Item>}
          <Form.Item
            name="truckRestrictions"
            label="Are there any truck restrictions at either loading or drop off destination?"
          >
            <Input.TextArea rows={4} value={truckRestrictions} onChange={(e) => setTruckRestrictions(e.target.value)}/>
          </Form.Item>
          <Form.Item
            name="bigItems"
            label="Please indicate the big items you have?"
          >
            <Input.TextArea rows={6} value={bigItems} onChange={(e) => setBigItems(e.target.value)}/>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
