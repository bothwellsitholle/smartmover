import './App.css'
import Layout from './components/layout/Layout'
import 'antd/dist/reset.css'
import Wizard from './components/wizard/Wizard'

function App() {
  return (
    <div className="App">
      <Layout>
        <Wizard />
      </Layout>
    </div>
  )
}

export default App
