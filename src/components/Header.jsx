import React from 'react';
import { Layout, Menu, Typography, Button, Row, Col } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent = ({ mobileMenuVisible, toggleMobileMenu }) => {
  return (
    <Header style={{ 
      background: '#fff',
      position: 'fixed',
      zIndex: 100,
      width: '100%',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '0 50px',
    }}>
      <Row justify="space-between" align="middle">
        <Col>
          <div className="logo">
            <Title level={3} className="logo-text" style={{ margin: '0', padding: '15px 0' }}>
              R|E
            </Title>
          </div>
        </Col>
        <Col>
          <div className="desktop-menu" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Menu mode="horizontal" style={{ border: 'none', display: 'flex' }}>
              <Menu.Item key="1">About</Menu.Item>
              <Menu.Item key="2">Events</Menu.Item>
              <Menu.Item key="3">Membership</Menu.Item>
              <Menu.Item key="4">Contact</Menu.Item>
            </Menu>
            <Button type="primary" href="https://www.instagram.com/relateandelevateclub/" style={{ 
              marginLeft: 15, 
              background: '#000', 
              borderColor: '#000',
              height: '40px',
              borderRadius: '2px'
            }}>
              Follow
            </Button>
          </div>
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu} style={{ display: 'none', cursor: 'pointer' }}>
            {mobileMenuVisible ? <CloseOutlined /> : <MenuOutlined />}
          </div>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;