'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, FileText, CheckCircle, Search, Cpu, FileCheck } from 'lucide-react';

export default function ResumeUpload({ onNext }) {
    const [file, setFile] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [progressStep, setProgressStep] = useState(0);
    const fileInputRef = useRef(null);

    const handleUpload = async () => {
        if (!file) return;
        setAnalyzing(true);

        try {
            const formData = new FormData();
            formData.append('file', file);

            // Mock progress steps
            const interval = setInterval(() => {
                setProgressStep(prev => (prev < 3 ? prev + 1 : prev));
            }, 800);

            const response = await fetch('/api/analyze-resume', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) throw new Error('Analysis failed');
            const result = await response.json();

            setTimeout(() => {
                clearInterval(interval);
                setAnalyzing(false);
                onNext(result.score);
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
        <div className="glass-card" style={{ padding: '3rem', position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                    <FileCheck size={36} color="var(--primary)" /> Resume Intelligence
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                    Our AI deeply analyzes your resume structure, keyword optimization, and ATS readability against industry standards.
                </p>
            </div>

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
                                    <CheckCircle size={16} /> Ready for analysis
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
                        
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>AI is extracting insights...</h3>
                        
                        <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
                            <ProgressStep label="Extracting core text semantics" active={progressStep >= 0} />
                            <ProgressStep label="Cross-referencing industry keywords" active={progressStep >= 1} />
                            <ProgressStep label="Evaluating ATS readability score" active={progressStep >= 2} />
                            <ProgressStep label="Generating readiness report" active={progressStep >= 3} />
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
                    <Search size={24} /> Initiate AI Scan
                </motion.button>
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
