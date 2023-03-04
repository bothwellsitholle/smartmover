import { Breadcrumb, Layout, theme } from 'antd'
const { Header, Content, Footer } = Layout

const Wizard = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout className="layout">
      <Header style={{ backgroundColor: 'white' }}>
        <div className="logo" />
        <img
          src="https://smartmover.co.za/wp-content/uploads/2022/02/cropped-SMART-TRANSPARENT-e1645079197871-1.png"
          height="40"
          alt="logo"
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
            cursor: 'pointer'
          }}
        >
          <Breadcrumb.Item
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
            height: '80vh',
            width: '100%',
            padding: 40
          }}
        >
          {props.children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Smart Smover ©2023 Created by Mdtsolutions.
      </Footer>
    </Layout>
  )
}
export default Wizard
