import React from 'react';
import { Typography, Row, Col, Card, Button, Divider } from 'antd';

const { Title, Text } = Typography;

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

const MembershipSection = () => {
  return (
    <div style={{ padding: '80px 50px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
    </div>
  );
};

export default MembershipSection;