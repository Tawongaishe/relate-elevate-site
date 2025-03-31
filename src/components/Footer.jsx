import React from 'react';
import { Layout, Typography, Row, Col, Input, Button, Divider, Space } from 'antd';

const { Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const FooterComponent = () => {
  return (
    <Footer style={{ background: '#001529', padding: '60px 50px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[48, 32]}>
          <Col xs={24} sm={12} md={8}>
            <Title level={4} className="logo-text" style={{ color: 'white' }}>R|E SOCIAL CLUB</Title>
            <Paragraph style={{ color: '#ccc' }}>
              A community dedicated to empowering entrepreneurs and professionals through meaningful connections, collaboration, and growth.
            </Paragraph>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Title level={4} style={{ color: 'white' }}>Quick Links</Title>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: 10 }}><a style={{ color: '#ccc' }} href="https://www.instagram.com/relateandelevateclub/">Instagram</a></li>
              <li style={{ marginBottom: 10 }}><a style={{ color: '#ccc' }} href="https://www.eventbrite.com/e/lets-get-social-professionals-and-entrepreneurs-looking-for-connections-tickets-1253875618729?aff=ebdsshcopyurl&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=organizer-profile&utm-share-source=organizer-profile">Next Event</a></li>
              
            </ul>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Title level={4} style={{ color: 'white' }}>Subscribe to Our Newsletter</Title>
            <Paragraph style={{ color: '#ccc' }}>
              Stay updated on our latest events and news.
            </Paragraph>
            <Input.Group compact>
              <Input 
                style={{ width: 'calc(100% - 100px)' }} 
                size="large"
                placeholder="Enter your email" 
              />
              <Button 
                type="primary" 
                size="large" 
                style={{ 
                  width: '100px',
                  background: '#000', 
                  borderColor: '#000' 
                }}
              >
                Subscribe
              </Button>
            </Input.Group>
          </Col>
        </Row>
        <Divider style={{ background: '#333', margin: '40px 0 20px' }} />
        <Row justify="space-between" align="middle">
          <Col>
            <Text style={{ color: '#ccc' }}>© 2025 Relate & Elevate Social Club. All rights reserved.</Text>
          </Col>
          <Col>
            <Space>
              <a style={{ color: '#ccc' }} href="#">Privacy Policy</a>
              <a style={{ color: '#ccc' }} href="#">Terms of Service</a>
            </Space>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterComponent;