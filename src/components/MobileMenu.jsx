import React from 'react';
import { Menu, Button } from 'antd';

const MobileMenu = ({ visible, toggleMobileMenu }) => {
  if (!visible) return null;
  
  return (
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
  );
};

export default MobileMenu;