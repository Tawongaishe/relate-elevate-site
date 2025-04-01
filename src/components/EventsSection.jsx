import React from 'react';
import { Typography, Row, Col, Card, Button, Space } from 'antd';
import { ArrowRightOutlined, ClockCircleOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

// Event data
const events = [
  {
    title: "Let's Get Social: The Power of Networking",
    date: "April 4, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "PrimeTime Golf, Oakland",
    description: "An evening of professional networking, golf, music, nibbles, good wine and fun!",
    attire: "Business Casual",
    image: "images/image3.jpg"
  },
  {
    title: "Boots on the Ground: Line Dancing & Networking",
    date: "TBD",
    time: "TBD",
    location: "TBD",
    description: "Join us for a fun evening of line dancing, networking, and drinks.",
    attire: "Country Western",
    image: "images/image5.jpg"
  },
  {
    title: "Summer Networking Mixer",
    date: "June 22, 2025",
    time: "5:00 PM - 8:00 PM",
    location: "Bayview Terrace, San Jose",
    description: "Casual outdoor networking event with refreshments and entertainment.",
    attire: "Smart Casual",
    image: "images/image2.jpg"
  }
];

const EventsSection = () => {
  return (
    <div id="events-section" style={{ background: '#f7f7f7', padding: '80px 50px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Title style={{ textAlign: 'center', marginBottom: '50px' }}>Upcoming Events</Title>
        <Row gutter={[24, 24]}>
          {events.map((event, index) => (
            <Col xs={24} md={8} key={index}>
              <Card 
                hoverable 
                style={{ height: '100%' }}
                cover={
                  <div style={{
                    height: '200px',
                    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url("${event.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 30%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    <div>
                      <Text style={{ color: 'white', fontSize: '14px' }}>{event.date}</Text>
                      <Title level={4} style={{ color: 'white', margin: '5px 0' }}>{event.title}</Title>
                      <Text style={{ color: 'white', fontSize: '12px' }}>{event.attire}</Text>
                    </div>
                  </div>
                }
              >
                <div style={{ paddingBottom: '30px' }}>
                  <Paragraph>{event.description}</Paragraph>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Text><ClockCircleOutlined style={{ marginRight: 8 }} />{event.time}</Text>
                    <Text><EnvironmentOutlined style={{ marginRight: 8 }} />{event.location}</Text>
                  </Space>
                </div>
                <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                  <Button 
                    href="https://www.eventbrite.com/e/lets-get-social-professionals-and-entrepreneurs-looking-for-connections-tickets-1253875618729?aff=ebdsshcopyurl&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=organizer-profile&utm-share-source=organizer-profile"
                    type="primary" style={{ 
                    background: '#000', 
                    borderColor: '#000',
                    borderRadius: '2px'
                  }}>Register</Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        
      </div>
    </div>
  );
};

export default EventsSection;