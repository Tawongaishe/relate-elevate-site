import React, { useState } from 'react';
import { Layout, Menu, Typography, Button, Row, Col, Card, Form, Input, Divider, Space, Modal } from 'antd';
import { 
  CalendarOutlined, 
  TeamOutlined,
  SendOutlined,
  MenuOutlined,
  CloseOutlined,
  ArrowRightOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const SocialClubWebsite = () => {
  const [visible, setVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    // In a real implementation, this would send the data
    console.log('Form values:', values);
    
    // Show success modal
    setVisible(true);
    form.resetFields();
  };

  const closeModal = () => {
    setVisible(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  // Event data
  const events = [
    {
      title: "Let's Get Social: The Power of Networking",
      date: "April 4, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "PrimeTime Golf, Oakland",
      description: "An evening of professional networking, music, good wine and fun!",
      attire: "Business Casual"
    },
    {
      title: "Business Growth Workshop",
      date: "TBA",
      time: "TBA",
      location: "TBA",
      description: "Learn strategies to scale your business and connect with potential partners and clients.",
      attire: "Professional"
    },
    {
      title: "Summer Networking Mixer",
      date: "TBA",
      time: "TBA",
      location: "TBA",
      description: "Casual outdoor networking event with refreshments and entertainment.",
      attire: "Smart Casual"
    }
  ];

  // Membership tiers
  const membershipTiers = [
    {
      title: "Basic Membership",
      price: "$249",
      period: "/year",
      features: [
        "Access to quarterly events",
        "Member directory listing",
        "Member-only communication",
        "Digital membership card",
        "Event discounts"
      ]
    },
    {
      title: "Premium Membership",
      price: "$499",
      period: "/year",
      features: [
        "Access to all events",
        "Featured member profile",
        "Networking introduction service",
        "Business resource library",
        "Priority event registration",
        "Guest passes (2 per year)",
        "Member spotlight opportunity"
      ],
      highlighted: true
    },
    {
      title: "Corporate Membership",
      price: "$1499",
      period: "/year",
      features: [
        "Access for up to 5 team members",
        "Company feature on our website",
        "Dedicated relationship manager",
        "Event sponsorship opportunity",
        "Workshop presenter opportunity",
        "Private networking sessions",
        "All Premium features included"
      ]
    }
  ];

  return (
    <Layout className="layout" style={{ width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}>
      {/* Header */}
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
              <Button type="primary" style={{ 
                marginLeft: 15, 
                background: '#000', 
                borderColor: '#000',
                height: '40px',
                borderRadius: '2px'
              }}>
                Join Now
              </Button>
            </div>
            <div className="mobile-menu-toggle" onClick={toggleMobileMenu} style={{ display: 'none', cursor: 'pointer' }}>
              {mobileMenuVisible ? <CloseOutlined /> : <MenuOutlined />}
            </div>
          </Col>
        </Row>
      </Header>

      {/* Mobile Menu Drawer */}
      {mobileMenuVisible && (
        <div style={{
          position: 'fixed', 
          top: '64px', 
          width: '100%', 
          background: '#fff',
          zIndex: 99,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          padding: '20px'
        }}>
          <Menu mode="vertical" style={{ border: 'none' }}>
            <Menu.Item key="1" onClick={toggleMobileMenu}>About</Menu.Item>
            <Menu.Item key="2" onClick={toggleMobileMenu}>Events</Menu.Item>
            <Menu.Item key="3" onClick={toggleMobileMenu}>Membership</Menu.Item>
            <Menu.Item key="4" onClick={toggleMobileMenu}>Contact</Menu.Item>
          </Menu>
          <Button type="primary" block style={{ 
            marginTop: 15,
            background: '#000', 
            borderColor: '#000'
          }}>
            Join Now
          </Button>
        </div>
      )}

      <Content style={{ marginTop: 64 }}>
        {/* Hero Section */}
        <div style={{
          height: '80vh',
          background: 'linear-gradient(rgba(21, 4, 4, 0.75), rgba(48, 38, 38, 0.5)), url("images/image4.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <Title className="logo-text" style={{ color: '#fff', fontSize: '48px', marginBottom: '10px' }}>RELATE AND ELEVATE</Title>
          <Title level={3} style={{ color: '#fff', fontWeight: 'normal', marginTop: 0 }}>SOCIAL CLUB</Title>
          <Paragraph style={{ 
            fontSize: '18px', 
            maxWidth: '700px',
            color: '#fff',
            margin: '30px 0'
          }}>
            Join our exclusive community of entrepreneurs and professionals dedicated to meaningful connections and growth.
          </Paragraph>
          <Space>
            <Button type="primary" size="large" style={{ 
              background: '#000', 
              borderColor: '#000',
              borderRadius: '2px'
            }}>
              Join Now
            </Button>
            <Button ghost size="large" style={{ borderRadius: '2px' }}>
              Upcoming Events
            </Button>
          </Space>
        </div>

        {/* Our Mission */}
        <div style={{ padding: '80px 50px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <Title>Our Mission</Title>
          <Paragraph style={{ fontSize: '16px', maxWidth: '900px', margin: '0 auto' }}>
            Relate and Elevate Social Club is dedicated to empowering entrepreneurs, and professionals by fostering meaningful connections, collaboration, and growth. Through our events, we create opportunities for B2B engagement, networking, and knowledge sharing, helping individuals build sustainable professional relationships and elevate their success.
          </Paragraph>
        </div>

    
        {/* Location Section */}
        <div style={{
          height: '80vh',
          background: 'linear-gradient(rgba(21, 4, 4, 0.75), rgba(48, 38, 38, 0.5)), url("images/image1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <Title className="logo-text" style={{ color: '#fff', fontSize: '48px', marginBottom: '10px' }}></Title>
          <Title level={3} style={{ color: '#fff', fontWeight: 'normal', marginTop: 0 }}>Prime Time Golf Oakland</Title>
          <Paragraph style={{ 
            fontSize: '18px', 
            maxWidth: '700px',
            color: '#fff',
            margin: '30px 0'
          }}>
            Our first few events are in partnership with Prime Time Golf Oakland. We are excited to be working with them to bring you the best events possible.
          </Paragraph>
          <Space>
            <Button type="primary" size="large" style={{ 
              background: '#000', 
              borderColor: '#000',
              borderRadius: '2px'
            }}
            href="https://g.co/kgs/hgVtt7C">
              See Location
            </Button>
            <Button ghost size="large" style={{ borderRadius: '2px' }} href="https://www.primetimegolf.org">
              Website
            </Button>
          </Space>
        </div>


        {/* Upcoming Events Section */}
        <div style={{ background: '#f7f7f7', padding: '80px 50px' }}>
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
                        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("image${index + 2}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
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
                      <Button type="primary" style={{ 
                        background: '#000', 
                        borderColor: '#000',
                        borderRadius: '2px'
                      }}
                      href="https://www.eventbrite.com/e/lets-get-social-professionals-and-entrepreneurs-looking-for-connections-tickets-1253875618729?aff=ebdsshcopyurl&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=organizer-profile&utm-share-source=organizer-profile
                      // ">Register</Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Membership Section */}
        {/* <div style={{ padding: '80px 50px' }}> */}
          {/* <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Title style={{ textAlign: 'center', marginBottom: '50px' }}>Join Our Community</Title>
            <Row gutter={[24, 24]}>
              {membershipTiers.map((tier, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card 
                    style={{ 
                      height: '100%', 
                      borderColor: tier.highlighted ? '#000' : undefined,
                      boxShadow: tier.highlighted ? '0 0 10px rgba(0, 0, 0, 0.2)' : undefined
                    }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <Title level={3}>{tier.title}</Title>
                      <div style={{ margin: '20px 0' }}>
                        <span style={{ fontSize: '36px', fontWeight: 'bold' }}>{tier.price}</span>
                        <span style={{ color: '#666' }}>{tier.period}</span>
                      </div>
                      {tier.highlighted && <div style={{ margin: '10px 0', background: '#f5f5f5', padding: '5px', fontSize: '12px' }}>POPULAR</div>}
                      <Divider />
                      <ul style={{ 
                        textAlign: 'left', 
                        listStyleType: 'none', 
                        padding: 0,
                        minHeight: '200px'
                      }}>
                        {tier.features.map((feature, i) => (
                          <li key={i} style={{ marginBottom: '10px' }}>
                            <Text>✓ {feature}</Text>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        type={tier.highlighted ? "primary" : "default"} 
                        block 
                        size="large"
                        style={tier.highlighted ? {
                          background: '#000',
                          borderColor: '#000',
                          borderRadius: '2px'
                        } : { borderRadius: '2px' }}
                      >
                        Join Now
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <Text>Need a custom membership solution? <a href="#contact">Contact us</a></Text>
            </div>
          </div>
        </div> */}

        {/* Contact Section */}
        <div id="contact" style={{ padding: '80px 50px', background: '#f7f7f7' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Title style={{ textAlign: 'center', marginBottom: '50px' }}>Get In Touch</Title>
            <Row gutter={48}>
              <Col xs={24} md={12} style={{ marginBottom: '30px' }}>
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item 
                        name="name" 
                        label="Name" 
                        rules={[{ required: true, message: 'Please enter your name' }]}
                      >
                        <Input size="large" placeholder="Your name" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item 
                        name="email" 
                        label="Email" 
                        rules={[
                          { required: true, message: 'Please enter your email' },
                          { type: 'email', message: 'Please enter a valid email' }
                        ]}
                      >
                        <Input size="large" placeholder="Your email" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item name="subject" label="Subject">
                    <Input size="large" placeholder="Subject" />
                  </Form.Item>
                  <Form.Item 
                    name="message" 
                    label="Message" 
                    rules={[{ required: true, message: 'Please enter your message' }]}
                  >
                    <TextArea 
                      size="large" 
                      placeholder="Your message" 
                      rows={5} 
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      size="large" 
                      icon={<SendOutlined />}
                      style={{ 
                        background: '#000', 
                        borderColor: '#000',
                        borderRadius: '2px'
                      }}
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
              <Col xs={24} md={12}>
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Title level={4}>Contact Information</Title>
                  <Paragraph>Have questions about our events or membership? We'd love to hear from you.</Paragraph>
                  <Space direction="vertical" size="large" style={{ marginTop: '20px' }}>
                    <div>
                      <Text strong>Email</Text>
                      <Paragraph>info@relateandelevate.com</Paragraph>
                    </div>
                    <div>
                      <Text strong>Phone</Text>
                      <Paragraph>(415) 555-1234</Paragraph>
                    </div>
                    <div>
                      <Text strong>Location</Text>
                      <Paragraph>San Francisco Bay Area<br />California</Paragraph>
                    </div>
                  </Space>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Founder Section */}
        <div style={{ padding: '80px 50px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Row gutter={48} align="middle">
              <Col xs={24} md={12} style={{ marginBottom: '30px' }}>
                <div style={{
                  height: '700px',
                  background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("images/carlina.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 40%',
                  borderRadius: '40px'
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
      </Content>

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
                <li style={{ marginBottom: 10 }}><a style={{ color: '#ccc' }} href="#">Home</a></li>
                <li style={{ marginBottom: 10 }}><a style={{ color: '#ccc' }} href="#">About Us</a></li>
                <li style={{ marginBottom: 10 }}><a style={{ color: '#ccc' }} href="#">Events</a></li>
                <li style={{ marginBottom: 10 }}><a style={{ color: '#ccc' }} href="#">Membership</a></li>
                <li style={{ marginBottom: 10 }}><a style={{ color: '#ccc' }} href="#">Contact</a></li>
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

      {/* Success Modal */}
      <Modal
        title="Message Sent!"
        visible={visible}
        onCancel={closeModal}
        footer={[
          <Button 
            key="close" 
            type="primary" 
            onClick={closeModal}
            style={{ 
              background: '#000', 
              borderColor: '#000',
              borderRadius: '2px'
            }}
          >
            Close
          </Button>
        ]}
      >
        <p>Thank you for your message. We'll get back to you as soon as possible.</p>
      </Modal>

      {/* Responsive styles */}
      <style jsx global>{`
        /* Override root container limitations */
        #root {
          max-width: 100% !important;
          width: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        
        /* Adobe Fonts Integration */
        @import url("https://use.typekit.net/your-kit-id.css"); /* Replace with your Adobe Fonts kit ID */
        
        /* Custom font definitions if you don't have direct access to Adobe Fonts */
        @font-face {
          font-family: 'Bryant-2';
          src: local('Bryant-2'), url('path-to-your-font/Bryant-2.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        
        @font-face {
          font-family: 'FF-Nort';
          src: local('FF-Nort'), url('path-to-your-font/FF-Nort.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: 'FF-Nort', 'Arial', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        
        .logo-text {
          font-family: 'Bryant-2', 'Arial', sans-serif;
          font-weight: 700;
          letter-spacing: 1px;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'FF-Nort', 'Arial', sans-serif;
        }
        
        /* Ensure full width layout */
        .layout {
          min-height: 100vh;
          width: 100vw;
          max-width: 100%;
          overflow-x: hidden;
        }
        
        .ant-layout-content {
          width: 100%;
        }
        
        /* Override Ant Design's primary color */
        .ant-btn-primary {
          background-color: #000;
          border-color: #000;
        }
        
        .ant-btn-primary:hover, .ant-btn-primary:focus {
          background-color: #333;
          border-color: #333;
        }
        
        @media (max-width: 768px) {
          .ant-layout-header {
            padding: 0 20px !important;
          }
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </Layout>
  );
};

export default SocialClubWebsite;