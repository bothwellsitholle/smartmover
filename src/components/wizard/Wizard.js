import React, { useState } from 'react'
import { Button, message, Steps, theme, Form } from 'antd'
import FirstStep from '../steps/FirstStep'
import SecondStep from '../steps/SecondStep'
import ThirdStep from '../steps/ThirdStep'
import LastStep from '../steps/LastStep'

const Wizard = () => {
  const { token } = theme.useToken()
  const [current, setCurrent] = useState(0)

  const [firstForm] = Form.useForm()
  const [secondForm] = Form.useForm()
  const [thirdForm] = Form.useForm()
  const [lastForm] = Form.useForm()

  const steps = [
    {
      content: <FirstStep form={firstForm} />,
    },
    {
      content: <SecondStep form={secondForm} />,
    },
    {
      content: <ThirdStep form={thirdForm} />,
    },
    {
      content: <LastStep form={lastForm} />,
    },
  ]

  let form = firstForm;

  if(current === 1){
    form = secondForm
  } else if(current === 2){
    form = thirdForm
  }else if(current ===3) {
    form = lastForm
  }


  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const postFormData = () => {
    // send form data to seerver
    message.success('Successfully submitted form!')
  }

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }))

  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    overflowY: 'scroll',
  }
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
          overflowY: 'scroll',
        }}
      >
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={async () => {
              try {
                await form.validateFields()
                console.log('isValid', true)
                next()
              } catch (e) {
                if (e.errorFields.length === 0) {
                  next()
                }
                console.log('isValid', false)
                console.log('error', e)
              }
            }}
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={async() => {
              try {
                await form.validateFields()
                console.log('isValid', true)
                postFormData()

              } catch (e) {
                if (e.errorFields.length === 0) {
                  postFormData()

                }
                console.log('isValid', false)
                console.log('error', e)
              }
              }}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  )
}
export default Wizard
