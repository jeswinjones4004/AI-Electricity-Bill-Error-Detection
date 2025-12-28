import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BillUploader from './components/BillUploader';
import AnalysisResult from './components/AnalysisResult';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import ConnectMeter from './components/ConnectMeter';

function App() {
  const [view, setView] = useState('landing'); // landing, upload, result, how-it-works, about, connect-meter
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleStart = () => {
    setView('upload');
  };

  const handleNavigate = (targetView) => {
    setView(targetView);
  };

  const handleViewDemo = () => {
    // Create a mock result and show it
    const demoResult = {
      bill_id: "DEMO-BILL",
      customer_name: "Demo User",
      billing_period: "Oct 2025",
      total_amount: 4200.00,
      detected_errors: [
        "Tariff Slab Mismatch: Charged at ₹8.0/unit instead of ₹6.5/unit.",
        "Duplicate Service Charge Entry."
      ],
      savings_recommendations: [
        "Optimize AC usage during peak hours.",
        "Install solar panels for long term savings."
      ],
      confidence_score: 0.98
    };
    setAnalysisResult(demoResult);
    setView('result');
  };

  const handleAnalysisComplete = (result) => {
    setAnalysisResult(result);
    setView('result');
  };

  const handleReset = () => {
    setAnalysisResult(null);
    setView('upload');
  };

  return (
    <div className="App">
      <Navbar onNavigate={handleNavigate} />

      <main style={{ minHeight: 'calc(100vh - 80px)' }}>
        {view === 'landing' && (
          <Hero onStart={handleStart} onViewDemo={handleViewDemo} />
        )}

        {view === 'how-it-works' && (
          <HowItWorks onBack={() => setView('landing')} />
        )}

        {view === 'about' && (
          <About onBack={() => setView('landing')} />
        )}

        {view === 'connect-meter' && (
          <ConnectMeter onBack={() => setView('landing')} />
        )}

        {view === 'upload' && (
          <div className="container" style={{ padding: '80px 0' }}>
            <button
              onClick={() => setView('landing')}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', marginBottom: '20px' }}>
              &larr; Back to Home
            </button>
            <BillUploader onAnalysisComplete={handleAnalysisComplete} />
          </div>
        )}

        {view === 'result' && analysisResult && (
          <div className="container" style={{ padding: '40px 0' }}>
            <AnalysisResult result={analysisResult} onReset={handleReset} />
          </div>
        )}
      </main>

      <footer style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <p>&copy; 2025 ElectroSmart AI. Making Energy Transparent.</p>
      </footer>
    </div>
  );
}

export default App;
