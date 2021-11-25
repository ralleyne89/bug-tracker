import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from '../public/images/CLLCTVE_Logo.png'
import "antd/dist/antd.css";
import {Layout, Typography, Row, Col, Menu, Breadcrumb, Button, AutoComplete} from 'antd'
import { GrayContainer, MainHeader, OrangeButton, StyledMenu, StyledSearch } from '../styles/StyledComponents';
import SiderNav from './components/SiderNav';
const {Header, Content, Sider, Footer} = Layout;
const {Title} = Typography;

const Home = () => {
  const [openRequestPage, setOpenRequestPage] = useState(false);
  const [productRequest, setProductRequest] = useState(false);

  const handleProductRequest = () => {
    setProductRequest(true);
  }
  const goToHome = () => {
    setOpenRequestPage(false);
  }
  
  return (
    <Layout style={{height: '100vh'}}>
    <MainHeader>
      <Row align='middle' gutter={[16, 16]}>
        <Col>
        <div style={{marginTop: 10}}>
      <Image src={Logo} width={140} height={40} />
        </div>
        </Col>
        <Col>
        <p style={{color: '#fff', fontWeight: 'bold'}}>Product Ideas & Requests</p>
        </Col>
      </Row>
    </MainHeader>
    <Layout>
      <SiderNav openRequestPage={openRequestPage} setOpenRequestPage={setOpenRequestPage} />
    <Content className="site-layout" style={{ padding: '0 50px' }}>
      {/* <Breadcrumb style={{ margin: '16px 0', color: '#fff'}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      {!openRequestPage && (
        <>
      <Row gutter={[16, 16]} align='middle'>
        <Col>
      <button style={{padding: 5, borderRadius: 50, minWidth: 80, background: '#262626', border: '1px solid #fff', color: '#fff', margin: '16px 0'}}>Recent</button>
        </Col>
        <Col>
      <button style={{padding: 5, borderRadius: 50, minWidth: 80, background: '#262626', border: '1px solid #fff', color: '#fff', margin: '16px 0'}}>Trending</button>
        </Col>
        <Col flex={1}>
      <button style={{padding: 5, borderRadius: 50, minWidth: 80, background: '#262626', border: '1px solid #fff', color: '#fff', margin: '16px 0'}}>Popular</button>
        </Col>
        <Col>
        <AutoComplete
                dropdownStyle={{
                  background: "rgba(64, 64, 64, 0.7)",
                  backdropFilter: "blur(45px)",
                }}
                placeholder="search..."
                // options={optionsLoggedIn}
                // onSearch={debouncedSearch}
                // onSelect={onSelect}
                style={{ color: "#fff" }}
                // onChange={onChange}
              >
                <StyledSearch
                  style={{
                    width: 250,
                    color: "#fff",
                    padding:"0 10px",
                    border: "1px solid #fff",
                  }}
                />
              </AutoComplete>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xxl={10}>
      <GrayContainer>
        <Row gutter={[16, 16]}>
          <Col>
          <div style={{ background: 'lightgray', borderRadius: 8, width: 50, height: 50}}></div>
          </Col>
          <Col>
          <Title level={4} style={{color: '#fff', marginBottom: 0}}>This is a title</Title>
          <p>This is the description</p>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{marginLeft: -20}} align='middle'>
          <Col span={3}></Col>
          <Col>
          <div style={{ background: 'lightgray', borderRadius: 50, width: 30, height: 30}}></div>
          </Col>
          <Col>
          <small style={{color: '#fff', marginBottom: 0}}>This is a title</small>
          </Col>
        </Row>
      </GrayContainer>
        </Col>
      </Row>
      </>)}
      {openRequestPage && (
        <>
        <Title level={3} style={{color: '#fff', cursor: 'pointer'}} onClick={() => goToHome()}>{`<`}</Title>
        </>
      )}
    </Content>
    </Layout>
    <Footer style={{ textAlign: 'center', background: '#0f0f0f', color: '#fff', borderTop: '1px solid #4A4A4A'}}>CLLCTVE ©2022 Created by Reggie Alleyne</Footer>
  </Layout>
  )
}

export default Home