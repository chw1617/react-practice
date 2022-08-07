import {Layout,Menu,Breadcrumb} from 'antd'
import './index.css'
const {Header,Content,Footer} = Layout

const AppLayout = ()=>{
   return (
    <Layout className='layout'>
    <Header>
            <div className="logo" />
            <Menu theme='dark'  mode="horizontal" defaultSelectedKeys={['2']} items={
                new Array(15).fill(null).map((v,i)=>{
                    const key = i + 1
                    return {
                        key,
                        label:`nav ${key}`
                    }
                })
            }>
            </Menu>
    </Header>
    <Content style={{padding:'0 50px'}}>
        <Breadcrumb
            style={{
            margin: '16px 0',
            }}
            >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
    </Content>
    <Footer
        style={{
            textAlign: 'center',
        }}
        >
      learn react ©2022 Created by jermemy
    </Footer>
    </Layout>
   )
}

export default AppLayout