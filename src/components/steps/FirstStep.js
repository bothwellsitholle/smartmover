import * as React from 'react'
import { Form, Input, Row, Col } from 'antd'
import NumericInput from '../UI/NumericInput'
import { FormContext } from '../../App'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 24 },
}

export default function FirstStep(props) {
  const ctx = React.useContext(FormContext)

  const onFinish = (values) => {
    console.log(values)
  }

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
          initialValues={ctx.firstStep}
          onValuesChange={async (changedValues, allValues) => {
            ctx.setFirstStep(allValues)
            console.log('allValues', allValues)
          }}
        >
          <Form.Item
            name="fullName"
            label="Full Name: "
            rules={[{ required: true, min: 2 }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone: " rules={[{ required: true }]}>
            <NumericInput />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
