import React from 'react';

const Hero = ({ onStart, onViewDemo }) => {
    return (
        <section style={{ padding: '80px 0', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    background: 'rgba(79, 70, 229, 0.1)',
                    borderRadius: '50px',
                    color: 'var(--accent)',
                    marginBottom: '24px',
                    border: '1px solid rgba(79, 70, 229, 0.2)'
                }}>
                    ✨ AI-Powered Bill Verification
                </div>
                <h1>Stop Overpaying for <br /> <span style={{ color: 'var(--primary)' }}>Electricity</span></h1>
                <p style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '40px' }}>
                    Upload your bill and let our AI detect errors, verify meter readings, and find hidden savings in seconds.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                    <button className="btn-primary" onClick={onStart} style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                        Analyze My Bill
                    </button>
                    <button className="btn-outline" onClick={onViewDemo} style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                        View Demo
                    </button>
                </div>

                {/* Stats */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', marginTop: '60px' }}>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>90%</div>
                        <div style={{ color: 'var(--text-secondary)' }}>Error Detection</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>₹2.5k</div>
                        <div style={{ color: 'var(--text-secondary)' }}>Avg. Savings/Year</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>10s</div>
                        <div style={{ color: 'var(--text-secondary)' }}>Analysis Time</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
