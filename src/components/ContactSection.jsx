import React, { useState, useRef } from 'react';
import { Typography, Row, Col, Form, Input, Button, Space, Modal } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import emailjs from '@emailjs/browser';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const ContactSection = () => {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const formRef = useRef();

  // Replace these with your actual EmailJS credentials
  const SERVICE_ID = 'service_w53rb5f';
  const TEMPLATE_ID = 'template_0pgw2jx';
  const PUBLIC_KEY = '56mX3wkIETjbYMk43';

  const handleSubmit = (values) => {
    setIsLoading(true);
    
    // Prepare template parameters - these should match your EmailJS template variables
    const templateParams = {
      name: values.name,
      email: values.email,
      subject: values.subject || 'Contact Form Submission',
      message: values.message,
      reply_to: values.email
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setVisible(true);
        form.resetFields();
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setIsLoading(false);
        // You could add error handling here, such as showing an error message
      });
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div id="contact" style={{ padding: '80px 50px', background: '#f7f7f7' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Title style={{ textAlign: 'center', marginBottom: '50px' }}>Get In Touch</Title>
        <Row gutter={48}>
          <Col xs={24} md={12} style={{ marginBottom: '30px' }}>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              ref={formRef}
            >
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
                  loading={isLoading}
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
                  <Paragraph>relateelevateclub@gmail.com</Paragraph>
                </div>
                <div>
                  <Text strong>Instagram</Text>
                  <Paragraph>
                    <a href="https://www.instagram.com/relateandelevateclub" target="_blank" rel="noopener noreferrer">
                      @relateandelevateclub
                    </a>
                  </Paragraph>
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

      {/* Success Modal */}
      <Modal
        title="Message Sent!"
        open={visible}
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
    </div>
  );
};

export default ContactSection;