import React from 'react';

const HowItWorks = ({ onBack }) => {
    const steps = [
        {
            icon: "📄",
            title: "1. Upload Your Bill",
            desc: "Take a photo or upload a PDF of your electricity bill. Our system supports all major electricity boards."
        },
        {
            icon: "🤖",
            title: "2. AI Analysis",
            desc: "Our advanced OCR and ML models extract readings, tariff codes, and taxes to cross-verify with official discrepancies."
        },
        {
            icon: "🔍",
            title: "3. Error Detection",
            desc: "We identify overcharges, wrong tariff slabs, and calculation errors instantly."
        },
        {
            icon: "💰",
            title: "4. Get Recommendations",
            desc: "Receive a detailed report with actionable savings tips and an auto-drafted complaint letter if errors are found."
        }
    ];

    return (
        <div className="container" style={{ padding: '80px 0', maxWidth: '800px' }}>
            <button onClick={onBack} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', marginBottom: '40px' }}>
                &larr; Back to Home
            </button>
            <h1 style={{ textAlign: 'center', marginBottom: '60px' }}>How It Works</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {steps.map((step, index) => (
                    <div key={index} className="glass-panel" style={{ padding: '32px', display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                        <div style={{ fontSize: '3rem', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px' }}>
                            {step.icon}
                        </div>
                        <div>
                            <h3 style={{ marginTop: '10px' }}>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
