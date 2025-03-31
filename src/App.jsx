import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Site from './components/Site';
import ContactSection from './components/ContactSection';
import EventsSection from './components/EventsSection';
import MembershipSection from './components/MembershipSection';
import MissionSection from './components/MissionSection';
import FounderSection from './components/FounderSection';
import HeroSection from './components/HeroSection';



import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
      <Header />
      <Content>
        <Routes>
        <Route path="/" element={<Site />} />
        <Route path="/#contact" element={<ContactSection />} />
        <Route path="/#events" element={<EventsSection />} />
        <Route path="/#membership" element={<MembershipSection />} />
        <Route path="/#mission" element={<MissionSection />} />
        <Route path="/#founder" element={<FounderSection />} />
        <Route path="/#hero" element={<HeroSection />} />
        </Routes>
      </Content>
      </Layout>
    </Router>
  );
}

export default App;