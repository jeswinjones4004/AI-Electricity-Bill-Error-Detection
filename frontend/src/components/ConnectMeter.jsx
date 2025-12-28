import React, { useState } from 'react';

const ConnectMeter = ({ onBack }) => {
    const [status, setStatus] = useState('idle'); // idle, connecting, connected

    const handleConnect = () => {
        setStatus('connecting');
        setTimeout(() => {
            setStatus('connected');
        }, 2000);
    };

    return (
        <div className="container" style={{ padding: '80px 0', maxWidth: '600px', textAlign: 'center' }}>
            <button onClick={onBack} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', marginBottom: '40px', display: 'block' }}>
                &larr; Back to Home
            </button>
            <div className="glass-panel" style={{ padding: '48px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔌</div>
                <h1 style={{ marginBottom: '16px' }}>Connect Smart Meter</h1>
                <p style={{ marginBottom: '40px' }}>
                    Link your Digital Smart Meter API ID to get real-time consumption analytics and alerts.
                </p>

                {status === 'idle' && (
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Smart Meter ID / Consumer No.</label>
                            <input
                                type="text"
                                placeholder="e.g. SN-12838492"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    background: 'rgba(0,0,0,0.2)',
                                    border: '1px solid var(--glass-border)',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <button className="btn-primary" onClick={handleConnect} style={{ width: '100%' }}>
                            Link Device
                        </button>
                    </div>
                )}

                {status === 'connecting' && (
                    <div style={{ color: 'var(--accent)' }}>
                        <p>Establishing secure connection to grid...</p>
                        <div className="spinner" style={{
                            width: '30px', height: '30px', border: '3px solid rgba(255,255,255,0.1)',
                            borderTop: '3px solid var(--accent)', borderRadius: '50%',
                            margin: '20px auto', animation: 'spin 1s linear infinite'
                        }}></div>
                    </div>
                )}

                {status === 'connected' && (
                    <div style={{ color: '#10b981' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✓</div>
                        <h3>Successfully Connected!</h3>
                        <p>Real-time data is now syncing with your dashboard.</p>
                        <button className="btn-outline" onClick={onBack} style={{ marginTop: '20px' }}>
                            Go to Dashboard
                        </button>
                    </div>
                )}
            </div>
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        </div>
    );
};

export default ConnectMeter;
