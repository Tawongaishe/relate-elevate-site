import React from 'react';
import { Button, Space, Typography } from 'antd';


        const { Title, Paragraph } = Typography;

        const LocationSection = () => {
            return (
                <div
                    id="location"
                    style={{
                        height: '80vh',
                        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url("images/image1.jpg")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        padding: '0 20px',
                        textAlign: 'center',
                    }}
                >
                    <Title className="logo-text" style={{ color: '#fff', fontSize: '48px', marginBottom: '10px' }}></Title>
                    <Title level={3} style={{ color: '#fff', fontWeight: 'bold', marginTop: 0 }}>
                        Prime Time Golf Oakland
                    </Title>
                    <Paragraph
                        style={{
                            fontSize: '18px',
                            maxWidth: '700px',
                            color: '#fff',
                            margin: '30px 0',
                        }}
                    >
                        Our first few events are in partnership with Prime Time Golf Oakland. We are excited to be working with them to bring you the best events possible.
                    </Paragraph>
                    <Space>
                        <Button
                            type="primary"
                            size="large"
                            style={{
                                background: '#000',
                                borderColor: '#000',
                                borderRadius: '2px',
                            }}
                            href="https://g.co/kgs/hgVtt7C"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            See Location
                        </Button>
                        <Button
                            ghost
                            size="large"
                            style={{ borderRadius: '2px' }}
                            href="https://www.primetimegolf.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Website
                        </Button>
                    </Space>
                </div>
            );
        };

        export default LocationSection;