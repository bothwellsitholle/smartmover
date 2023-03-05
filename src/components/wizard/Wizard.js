import { Button, message, Steps, theme } from 'antd'
import { useState } from 'react'
import FirstStep from '../steps/FirstStep'
import SecondStep from '../steps/SecondStep'
import ThirdStep from '../steps/ThirdStep'
import LastStep from '../steps/LastStep'

const steps = [
  {
    // title: '1',
    content: <FirstStep />,
  },
  {
    // title: '2',
    content: <SecondStep />,
  },
  {
    // title: '3',
    content: <ThirdStep />,
  },
  {
    // title: '4',
    content: <LastStep />,
  },
]

const App = () => {
  const { token } = theme.useToken()
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
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
    // padding: 50,
    overflowY: "scroll"

  }
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
          overflowY: "scroll"

        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success('Successfully submitted form!')}
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
export default App
