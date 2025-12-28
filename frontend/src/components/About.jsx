import React from 'react';

const About = ({ onBack }) => {
    return (
        <div className="container" style={{ padding: '80px 0', maxWidth: '800px' }}>
            <button onClick={onBack} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', marginBottom: '40px' }}>
                &larr; Back to Home
            </button>
            <div className="glass-panel" style={{ padding: '48px' }}>
                <h1 style={{ marginBottom: '24px' }}>About ElectroSmart AI</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                    Our mission is to bring transparency to energy billing in India.
                </p>
                <p>
                    Electricity billing errors are a common issue, often leading to unnoticed overpayments.
                    ElectroSmart AI combines Computer Vision and Financial logic to audit your bills automatically.
                </p>
                <h3 style={{ marginTop: '40px' }}>Our Technology</h3>
                <p>
                    We built a multi-agent system that uses:
                </p>
                <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    <li><strong>OCR & NLP:</strong> To digitize and understand bill structures.</li>
                    <li><strong>Anomaly Detection:</strong> To flag outliers in consumption and cost.</li>
                    <li><strong>Tariff APIs:</strong> To validate charges against official government rates.</li>
                </ul>
                <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--glass-border)' }}>
                    <p style={{ fontSize: '0.9rem' }}>Created by Arockia Jeswin Jones D</p>
                </div>
            </div>
        </div>
    );
};

export default About;
