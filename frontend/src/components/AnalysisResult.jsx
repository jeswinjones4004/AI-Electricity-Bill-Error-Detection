import React from 'react';

const AnalysisResult = ({ result, onReset }) => {
    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '80px' }}>
            <button onClick={onReset} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', marginBottom: '20px' }}>
                &larr; Analyze another bill
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

                {/* Score Card */}
                <div className="glass-panel" style={{ padding: '32px', gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <h2 style={{ margin: 0 }}>Analysis Report</h2>
                        <div style={{ color: 'var(--text-secondary)' }}>Bill ID: {result.bill_id} • {result.billing_period}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '3rem', fontWeight: 'bold', color: result.detected_errors.length > 0 ? '#ef4444' : '#10b981' }}>
                            {result.detected_errors.length}
                        </div>
                        <div style={{ color: result.detected_errors.length > 0 ? '#ef4444' : '#10b981', fontWeight: 'bold' }}>
                            Issues Found
                        </div>
                    </div>
                </div>

                {/* Detected Errors */}
                <div className="glass-panel" style={{ padding: '32px' }}>
                    <h3 style={{ marginTop: 0, color: '#ef4444' }}>⚠️ Detected Billing Errors</h3>
                    {result.detected_errors.length === 0 ? (
                        <p style={{ color: '#10b981' }}>No errors detected. Your bill seems accurate.</p>
                    ) : (
                        <ul style={{ paddingLeft: '20px' }}>
                            {result.detected_errors.map((error, idx) => (
                                <li key={idx} style={{ marginBottom: '12px', lineHeight: '1.5' }}>{error}</li>
                            ))}
                        </ul>
                    )}
                    <button className="btn-primary" style={{ marginTop: '16px', fontSize: '0.9rem', width: '100%' }}>
                        Generate Complaint Letter
                    </button>
                </div>

                {/* Savings Recommendations */}
                <div className="glass-panel" style={{ padding: '32px' }}>
                    <h3 style={{ marginTop: 0, color: '#10b981' }}>💡 Savings Recommendations</h3>
                    <ul style={{ paddingLeft: '20px' }}>
                        {result.savings_recommendations.map((rec, idx) => (
                            <li key={idx} style={{ marginBottom: '12px', lineHeight: '1.5' }}>{rec}</li>
                        ))}
                    </ul>
                </div>

                {/* Bill Details */}
                <div className="glass-panel" style={{ padding: '32px', gridColumn: '1 / -1' }}>
                    <h3 style={{ marginTop: 0 }}>Bill Summary</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Customer</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{result.customer_name}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Total Amount</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>₹{result.total_amount}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Accuracy Score</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{(result.confidence_score * 100).toFixed(0)}%</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Status</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: result.detected_errors.length > 0 ? '#ef4444' : '#10b981' }}>
                                {result.detected_errors.length > 0 ? 'Review Needed' : 'Verified'}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AnalysisResult;
