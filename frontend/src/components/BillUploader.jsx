import React, { useState } from 'react';

const BillUploader = ({ onAnalysisComplete }) => {
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = async (file) => {
        setFile(file);
        setUploading(true);

        // Simulating upload and analysis delay
        // In real app: const formData = new FormData(); formData.append('file', file);
        // await fetch('http://localhost:8000/api/analyze', ...)

        try {
            // Using a mock fetch for now to demonstrate UI
            // In a real scenario, we would use the actual endpoint
            // const response = await fetch('http://localhost:8000/api/analyze', ...);

            setTimeout(() => {
                const mockResult = {
                    bill_id: "BILL-" + Math.floor(Math.random() * 10000),
                    customer_name: "Jeswin Jones",
                    billing_period: "Nov 2025",
                    total_amount: 3450.00,
                    detected_errors: [
                        "Tariff Slab Mismatch: Charged at ₹7.5/unit instead of ₹6.0/unit for first 100 units.",
                        "Calculation Error: Tax computed on gross instead of net amount."
                    ],
                    savings_recommendations: [
                        "Reduce peak load consumption to lower fixed charges.",
                        "Switch 3 old fans to BLDC fans (Save ₹400/mo)."
                    ],
                    confidence_score: 0.95
                };
                setUploading(false);
                onAnalysisComplete(mockResult);
            }, 3000); // 3 seconds delay

        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    return (
        <div className="glass-panel" style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginTop: 0, marginBottom: '20px' }}>Upload Electricity Bill</h2>

            {!file ? (
                <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    style={{
                        padding: '60px 20px',
                        border: '2px dashed ' + (dragActive ? 'var(--primary)' : 'var(--text-secondary)'),
                        borderRadius: '12px',
                        background: dragActive ? 'rgba(79, 70, 229, 0.05)' : 'transparent',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                    }}
                >
                    <input
                        type="file"
                        id="file-upload"
                        style={{ display: 'none' }}
                        onChange={handleChange}
                        accept=".pdf,.jpg,.png,.jpeg"
                    />
                    <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📄</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>
                            Drag & Drop or Click to Upload
                        </div>
                        <div style={{ color: 'var(--text-secondary)' }}>PDF, JPG, PNG supported</div>
                    </label>
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                    {uploading ? (
                        <>
                            <div className="spinner" style={{
                                width: '40px', height: '40px', border: '4px solid rgba(255,255,255,0.1)',
                                borderTop: '4px solid var(--primary)', borderRadius: '50%',
                                margin: '0 auto 20px', animation: 'spin 1s linear infinite'
                            }}></div>
                            <h3>Analyzing Bill...</h3>
                            <p>Detecting anomalies and reading meter data.</p>
                            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                        </>
                    ) : (
                        <div>
                            <h3>Analysis Complete!</h3>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BillUploader;
