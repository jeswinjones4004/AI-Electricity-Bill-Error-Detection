import React from 'react';

const Navbar = ({ onNavigate }) => {
    return (
        <nav style={{ padding: '20px 0', borderBottom: '1px solid var(--glass-border)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                    onClick={() => onNavigate('landing')}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
                >
                    <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        ⚡
                    </div>
                    <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'white' }}>ElectroSmart AI</span>
                </div>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <button
                        onClick={() => onNavigate('how-it-works')}
                        style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '1rem', cursor: 'pointer' }}
                    >
                        How it Works
                    </button>
                    <button
                        onClick={() => onNavigate('about')}
                        style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '1rem', cursor: 'pointer' }}
                    >
                        About
                    </button>
                </div>
                <button
                    className="btn-primary"
                    onClick={() => onNavigate('connect-meter')}
                    style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                >
                    Connect Meter
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
