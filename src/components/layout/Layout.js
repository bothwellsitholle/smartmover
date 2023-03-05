import { Breadcrumb, Layout, theme } from 'antd'
const { Header, Content, Footer } = Layout

const logoUrl =
  'https://smartmover.co.za/wp-content/uploads/2022/02/cropped-SMART-TRANSPARENT-e1645079197871-1.png'

const Wizard = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout className="layout">
      <Header style={{ backgroundColor: 'white' }}>
        <div className="logo" />
        <img src={logoUrl} height="40" alt="logo" />
      </Header>
      <Content
        style={{
          padding: '0 30px',
          overflowY: 'scroll',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item
            style={{
              cursor: 'pointer',
            }}
            onClick={() => {
              console.log('clicked')
            }}
          >
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Quotation Form</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            minHeight: '80vh',
            padding: 20,
          }}
        >
          {props.children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          bottom: 0,
          position: 'static',
          width: '100%',
        }}
      >
        Smart Smover ©{new Date().getFullYear()} Created by Mdtsolutions.
      </Footer>
    </Layout>
  )
}
export default Wizard
