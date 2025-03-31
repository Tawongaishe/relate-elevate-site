import React from 'react';
import { Typography, Button, Space } from 'antd';

const { Title, Paragraph } = Typography;

const HeroSection = () => {
const scrollToEvents = () => {
    const eventsSection = document.getElementById('events-section');
    if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
};

return (
    <div style={{
            height: '80vh',
            background: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 1)), url("images/image4.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: '',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            padding: '0 20px',
            textAlign: 'center'
    }}>
        {/* Circular Logo */}
      <div style={{ marginBottom: '0px' }}>
        <img 
          src="images/logo.png" 
          alt="Relate & Elevate Logo" 
          width={650}
          style={{ marginBottom: '0px' }}
        />
      </div>
        <Paragraph style={{ 
            fontSize: '24px', 
            maxWidth: '700px',
            color: '#fff',
            margin: '30px 0'
        }}>
            Join our exclusive community of entrepreneurs and professionals building meaningful connections.
        </Paragraph>
        <Space>
            <Button ghost size="large" style={{ borderRadius: '2px' }} onClick={scrollToEvents}>
                Upcoming Events
            </Button>
            <Button ghost size="large" style={{ 
                borderRadius: '2px', 
                backgroundColor: 'rgba(255, 255, 255, 0.3)', 
                color: '#fff', 
                cursor: 'not-allowed' 
            }} disabled>
                Membership Soon
            </Button>
        </Space>
    </div>
);
};

export default HeroSection;