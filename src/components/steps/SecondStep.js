import * as React from 'react'
import { useState } from 'react'
import { Form, Input, Row, Col, Select, Radio } from 'antd'
import { FormContext } from '../../App'

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
const stopsList = ['1', '2', '3', '4']

const optionsList = ['yes', 'no']

export default function SecondStep(props) {
  const [extraStop, setExtraStop] = useState('no')

  const ctx = React.useContext(FormContext)

  const onFinish = (values) => {
    console.log(values)
  }

  React.useEffect(() => {
    ctx.setSecondStep((prev) => {
      return { ...prev, isValid: true }
    })
  })

  return (
    <Row justify="center">
      <Col xs={24} lg={22} xl={20} xxl={18}>
        <Form
          {...layout}
          layout="vertical"
          form={props.form}
          name="control-hooks"
          onFinish={onFinish}
          style={{ padding: 30 }}
          onValuesChange={async (changedValues, allValues) => {
            ctx.setSecondStep(allValues)
            console.log('allValues', allValues)
          }}
          initialValues={ctx.secondStep}
        >
          <Form.Item
            name="adressType"
            label="Pick up address type"
            rules={[{ required: true }]}
          >
            <Select placeholder="Pick up address type" allowClear>
              {addressTypeList.map((option) => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="unpacking"
            label="Do you require unpacking?"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              {optionsList.map((option) => (
                <Radio key={option} value={option}>
                  {option}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="dismantling"
            label="Do you require dismantling & reassembling?"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              {optionsList.map((option) => (
                <Radio key={option} value={option}>
                  {option}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="extraStop"
            label="Will an extra stop be required?"
            rules={[{ required: true }]}
          >
            <Radio.Group
              onChange={(e) => setExtraStop(e.target.value)}
              value={extraStop}
            >
              {optionsList.map((option) => (
                <Radio key={option} value={option}>
                  {option}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          {extraStop === 'yes' && (
            <Form.Item name="stops" label="How many?">
              <Select placeholder="How many?" allowClear>
                {stopsList.map((option) => (
                  <Option key={option} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          )}
          <Form.Item
            name="truckRestrictions"
            label="Are there any truck restrictions at either loading or drop off destination?"
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="bigItems"
            label="Please indicate the big items you have?"
          >
            <Input.TextArea rows={6} />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
