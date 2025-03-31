import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const FounderSection = () => {
  return (
    <div style={{ padding: '80px 50px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={48} align="middle">
          <Col xs={24} md={12} style={{ marginBottom: '30px' }}>
            <div style={{
              height: '700px',
              background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("images/carlina.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              borderRadius: '4px'
            }}></div>
          </Col>
          <Col xs={24} md={12}>
            <Title>Meet Our Founder</Title>
            <Title level={3}>Carlina Williams</Title>
            <Paragraph>
              Carlina, a proud San Francisco native, served with honor in the U.S. Navy for five years, with assignments at Pearl Harbor Naval Station in Hawaii, Guantanamo Bay in Cuba, and San Diego's 32nd Street.
            </Paragraph>
            <Paragraph>
              After her military service, she returned to the Bay Area, channeling her unwavering drive and discipline into education and entrepreneurship. With relentless determination and a visionary mindset, she built multiple businesses from the ground up, making her mark across various industries.
            </Paragraph>
            <Paragraph>
              Beyond her professional achievements, Carlina is a devoted mother of twins, an avid golfer, and a dedicated advocate for her community. Her journey is a testament to resilience, ambition, and the profound impact of service and leadership.
            </Paragraph>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FounderSection;