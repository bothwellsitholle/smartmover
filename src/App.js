import Layout from './components/layout/Layout'
import 'antd/dist/reset.css'
import Wizard from './components/wizard/Wizard'
import styled from 'styled-components'

function App() {
  return (
    <AppWrapper>
      <Layout>
        <Wizard />
      </Layout>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  text-align: center;
`

export default App
