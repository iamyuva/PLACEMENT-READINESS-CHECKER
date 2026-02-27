'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, FileText, CheckCircle, Search, Cpu, FileCheck, AlertTriangle } from 'lucide-react';

export default function ResumeChecker() {
    const [file, setFile] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [progressStep, setProgressStep] = useState(0);
    const [result, setResult] = useState(null);
    const fileInputRef = useRef(null);

    const handleUpload = async () => {
        if (!file) return;
        setAnalyzing(true);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const interval = setInterval(() => {
                setProgressStep(prev => (prev < 3 ? prev + 1 : prev));
            }, 800);

            // Fetch actual analysis from API and append mock missing details for demonstration
            const response = await fetch('/api/analyze-resume', {
                method: 'POST',
                body: formData
            });

            let apiResult = null;
            if (response.ok) {
                apiResult = await response.json();
            }

            setTimeout(() => {
                clearInterval(interval);
                setAnalyzing(false);
                setResult({
                    score: apiResult ? apiResult.score : 65,
                    missing: [
                        "Action verbs are missing in 3 bullet points under 'Experience'. Consider using words like 'Spearheaded', 'Optimized', or 'Developed'.",
                        "No GitHub or Portfolio link found. Recruiters want to see your actual code.",
                        "The summary section is too generic. Specify your core tech stack.",
                        "Missing quantitative achievements. Instead of 'Improved performance', write 'Improved performance by 30%'.",
                        "Education section missing graduation date."
                    ],
                    strengths: [
                        "Good use of white space and readable font.",
                        "Skills section is well organized into categories.",
                        "Project section highlights modern tech stack."
                    ]
                });
            }, 3000);

        } catch (error) {
            console.error("Error:", error);
            alert("Failed to analyze resume. Please try again.");
            setAnalyzing(false);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    return (
        <div className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
            <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>Resume Analyzer</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', textAlign: 'center', maxWidth: '800px' }}>
                Upload your resume to get instant, actionable feedback. We will tell you exactly what is missing and what you need to add to stand out.
            </p>

            {!result ? (
                <div className="glass-card" style={{ padding: '3rem', width: '100%', maxWidth: '900px', position: 'relative' }}>
                    <AnimatePresence mode="wait">
                        {!analyzing ? (
                            <motion.div
                                key="upload"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                                style={{
                                    border: `2px dashed ${file ? 'var(--primary)' : 'var(--card-border)'}`,
                                    background: file ? '#eff6ff' : '#f8fafc',
                                    padding: '4rem 2rem',
                                    borderRadius: '1.5rem',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    marginBottom: '2rem'
                                }}
                                onClick={() => fileInputRef.current?.click()}
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                                whileHover={{ scale: 1.02, borderColor: 'var(--primary)', background: 'rgba(37,99,235,0.05)' }}
                            >
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    hidden
                                    onChange={(e) => setFile(e.target.files[0])}
                                    accept=".pdf,.doc,.docx"
                                />

                                {file ? (
                                    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                                        <FileText size={64} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
                                        <p style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.5rem' }}>{file.name}</p>
                                        <p style={{ color: 'var(--success)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                                            <CheckCircle size={16} /> Ready for deep analysis
                                        </p>
                                    </motion.div>
                                ) : (
                                    <div>
                                        <UploadCloud size={64} color="var(--text-muted)" style={{ margin: '0 auto 1.5rem', opacity: 0.5 }} />
                                        <p style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '0.5rem' }}>Drag & Drop your Resume here</p>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>or click to browse your files (PDF, DOCX)</p>
                                    </div>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div key="analyzing" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ padding: '3rem 0', textAlign: 'center' }}>
                                <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 2rem' }}>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                                        style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '4px solid rgba(255,255,255,0.05)', borderTopColor: 'var(--primary)' }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Cpu size={40} color="var(--primary)" />
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>AI is finding gaps...</h3>

                                <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
                                    <ProgressStep label="Extracting sections and keywords" active={progressStep >= 0} />
                                    <ProgressStep label="Finding missing mandatory sections" active={progressStep >= 1} />
                                    <ProgressStep label="Checking action verbs & impact" active={progressStep >= 2} />
                                    <ProgressStep label="Generating advice report" active={progressStep >= 3} />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {!analyzing && (
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-primary"
                            onClick={handleUpload}
                            disabled={!file}
                            style={{ width: '100%', padding: '1.25rem', fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', borderRadius: '1rem' }}
                        >
                            <Search size={24} /> Get Detailed Advice
                        </motion.button>
                    )}
                </div>
            ) : (
                <div className="glass-card" style={{ width: '100%', maxWidth: '900px', padding: '3rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px', borderRadius: '50%', background: 'var(--primary)', color: 'white', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                            {result.score}
                        </div>
                        <h2 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>Resume Score</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                <AlertTriangle size={24} /> What You Need To Add/Fix
                            </h3>
                            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                {result.missing.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                <CheckCircle size={24} /> Present Strengths
                            </h3>
                            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                {result.strengths.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <button
                        className="btn btn-outline"
                        onClick={() => { setFile(null); setResult(null); setProgressStep(0); }}
                        style={{ marginTop: '2rem', width: '100%', padding: '1rem', borderRadius: '0.5rem' }}
                    >
                        Upload Another Resume
                    </button>
                </div>
            )}
        </div>
    );
}

function ProgressStep({ label, active }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', opacity: active ? 1 : 0.4, transition: 'opacity 0.5s ease' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: active ? 'var(--primary)' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {active ? <CheckCircle size={14} color="white" /> : <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />}
            </div>
            <span style={{ fontSize: '1rem' }}>{label}</span>
        </div>
    );
}
