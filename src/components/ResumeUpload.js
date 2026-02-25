'use client';
import { useState } from 'react';

export default function ResumeUpload({ onNext }) {
    const [file, setFile] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);

    const handleUpload = () => {
        if (!file) return;
        setAnalyzing(true);
        // Simulate analysis
        setTimeout(() => {
            setAnalyzing(false);
            onNext(85); // Simulated score
        }, 2000);
    };

    return (
        <div className="glass-card animate-fade-in">
            <h2 style={{ fontSize: '2rem' }}>1. Resume Evaluation</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Upload your resume to evaluate its quality, impact, and ATS compatibility.
            </p>

            <div style={{
                border: '2px dashed var(--card-border)',
                padding: '3rem',
                borderRadius: '1rem',
                textAlign: 'center',
                marginBottom: '2rem',
                cursor: 'pointer',
                background: file ? 'rgba(37, 99, 235, 0.05)' : 'transparent'
            }}
                onClick={() => document.getElementById('resume-input').click()}
            >
                <input
                    id="resume-input"
                    type="file"
                    hidden
                    onChange={(e) => setFile(e.target.files[0])}
                    accept=".pdf,.doc,.docx"
                />
                {file ? (
                    <div>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
                        <p style={{ fontWeight: 600 }}>{file.name}</p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{(file.size / 1024).toFixed(2)} KB</p>
                    </div>
                ) : (
                    <div>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📤</div>
                        <p style={{ fontWeight: 600 }}>Click or Drag & Drop Resume</p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>PDF or Word documents only</p>
                    </div>
                )}
            </div>

            <button
                className="btn btn-primary"
                onClick={handleUpload}
                disabled={!file || analyzing}
                style={{ width: '100%', padding: '1rem' }}
            >
                {analyzing ? 'Analyzing Resume...' : 'Analyze My Resume'}
            </button>

            {analyzing && (
                <div style={{ marginTop: '1.5rem' }}>
                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div className="progress-bar-animate" style={{
                            height: '100%',
                            background: 'var(--primary)',
                            width: '100%',
                            animation: 'progress 2s linear infinite'
                        }}></div>
                    </div>
                    <style jsx>{`
            @keyframes progress {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
          `}</style>
                </div>
            )}
        </div>
    );
}
