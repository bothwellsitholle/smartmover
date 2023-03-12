import { createContext, useState } from 'react'
import Layout from './components/layout/Layout'
import 'antd/dist/reset.css'
import Wizard from './components/wizard/Wizard'
import styled from 'styled-components'

export const FormContext = createContext({
  firstStep: {},
  secondStep: {},
  thirdStep: {},
  lastStep: {},

  setFirstStep: (val) => {},
  setSecondStep: (val) => {},
  setThirdStep: (val) => {},
  setLastStep: (val) => {}
})

function App() {
  const [firstStep, setFirstStep] = useState({})
  const [secondStep, setSecondStep] = useState({})
  const [thirdStep, setThirdStep] = useState({})
  const [lastStep, setLastStep] = useState({})

  return (
    <FormContext.Provider
      value={{
        firstStep,
        secondStep,
        thirdStep,
        lastStep,

        setFirstStep,
        setSecondStep,
        setThirdStep,
        setLastStep,
      }}
    >
      <AppWrapper>
        <Layout>
          <Wizard />
        </Layout>
      </AppWrapper>
    </FormContext.Provider>
  )
}

const AppWrapper = styled.div`
  text-align: center;
`

export default App
