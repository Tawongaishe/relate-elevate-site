import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const MissionSection = () => {
  return (
    <div style={{ padding: '80px 50px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
      <Title>Relate and Elevate Social Club</Title>
      <Paragraph style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}>
        Our mission is to empower entrepreneurs and professionals by fostering meaningful connections, 
        collaboration, and growth.
        </Paragraph>
       
        <br />

        <Paragraph style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}>
         Through our events, we create opportunities for Business-to-Business engagement, networking, 
        and knowledge sharing, helping individuals build sustainable professional relationships and elevate their success.
      </Paragraph>
    </div>
  );
};

export default MissionSection;