import React, { useState } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import MobileMenu from './MobileMenu';
import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import EventsSection from './EventsSection';
import MembershipSection from './MembershipSection';
import ContactSection from './ContactSection';
import FounderSection from './FounderSection';
import LocationSection from './LocationSection';
import Footer from './Footer';
import './styles.css';

const { Content } = Layout;

const Site = () => {
  

return (
    <Layout
        id="site-layout"
        className="layout"
        style={{ width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}
    >
        <Header  />
        {/* <MobileMenu visible={mobileMenuVisible} toggleMobileMenu={toggleMobileMenu} />
         */}
        <Content style={{ marginTop: 64 }}>
            <HeroSection scrollToSection={(sectionId) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }} />
            <div id="mission-section">
                <MissionSection />
            </div>
            <div id="location-section">
                <LocationSection />
            </div>
            <div id="events-section">
                <EventsSection />
            </div>
            {/* <div id="membership-section">
                <MembershipSection />
            </div> */}
            <div id="contact-section">
                <ContactSection />
            </div>
            <div id="founder-section">
                <FounderSection />
            </div>
        </Content>
        
        <Footer />
    </Layout>
);
};

export default Site;