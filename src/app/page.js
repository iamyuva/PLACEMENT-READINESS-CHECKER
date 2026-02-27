'use client';
import { useState } from 'react';
import ResumeUpload from '../components/ResumeUpload';
import SkillSelection from '../components/SkillSelection';
import Assessment from '../components/Assessment';
import CommunicationTest from '../components/CommunicationTest';
import ReadinessScore from '../components/ReadinessScore';
import { FileText, Wrench, Brain, MessagesSquare, ChevronRight, Heart } from 'lucide-react';

export default function Home() {
    const [step, setStep] = useState('welcome');
    const [data, setData] = useState({
        resumeScore: 0,
        skillScore: 0,
        assessmentScore: 0,
        communicationScore: 0,
    });

    const nextStep = (key, value) => {
        const newData = { ...data, [key]: value };
        setData(newData);

        if (key === 'resumeScore') setStep('skills');
        else if (key === 'skillScore') setStep('assessment');
        else if (key === 'assessmentScore') setStep('communication');
        else if (key === 'communicationScore') setStep('result');
    };

    return (
        <div className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {step === 'welcome' && (
                <div className="glass-card" style={{ width: '100%', maxWidth: '1000px', marginTop: '2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                            Welcome to Placement Readiness Checker
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
                            A comprehensive dashboard to evaluate your preparedness for campus placements.
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '2px solid var(--card-border)', paddingBottom: '0.5rem' }}>
                            About This App
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                            The Placement Readiness Checker is a structured evaluation tool built specifically for college students. It helps you identify your core strengths and areas needing improvement before you step into real-world interviews. Rather than generic advice, this platform evaluates you across four critical dimensions: Resume Quality, Technical Skills, Core Fundamentals, and Soft Skills.
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '2px solid var(--card-border)', paddingBottom: '0.5rem' }}>
                            What You Can Do
                        </h2>
                        <div className="grid">
                            <FeatureCard 
                                icon={<FileText size={28} color="var(--primary)" />} 
                                title="1. Resume Review" 
                                desc="Upload your resume (PDF/DOCX) to get instant feedback on content depth, keywords, and mandatory sections (e.g., Education, Projects)." 
                            />
                            <FeatureCard 
                                icon={<Wrench size={28} color="var(--accent)" />} 
                                title="2. Skill Selection" 
                                desc="Map out your technical proficiencies by selecting frameworks and languages you know across various domains." 
                            />
                            <FeatureCard 
                                icon={<Brain size={28} color="var(--success)" />} 
                                title="3. Technical Assessment" 
                                desc="Take a timed mini-quiz covering fundamental Computer Science concepts, System Design, and Algorithms." 
                            />
                            <FeatureCard 
                                icon={<MessagesSquare size={28} color="var(--warning)" />} 
                                title="4. Behavioral Test" 
                                desc="Respond to real-world workplace scenarios to evaluate your communication, teamwork, and crisis management skills." 
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '3rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155' }}>
                            <Heart size={24} color="#ef4444" /> My Wish For Your Project
                        </h2>
                        <p style={{ fontSize: '1.05rem', color: '#475569', fontStyle: 'italic' }}>
                            "I hope this project becomes a cornerstone for your college community, empowering thousands of students to face their interviews with unshakeable confidence. May it help bridge the gap between academic learning and industry expectations, guiding you and your peers to successful, fulfilling careers! Best of luck!"
                        </p>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <button 
                            className="btn btn-primary" 
                            style={{ padding: '1rem 3rem', fontSize: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} 
                            onClick={() => setStep('resume')}
                        >
                            Start Your Evaluation <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            )}

            {step === 'resume' && <div style={{ width: '100%', maxWidth: '900px', marginTop: '2rem' }}><ResumeUpload onNext={(score) => nextStep('resumeScore', score)} /></div>}
            {step === 'skills' && <div style={{ width: '100%', maxWidth: '900px', marginTop: '2rem' }}><SkillSelection onNext={(score) => nextStep('skillScore', score)} /></div>}
            {step === 'assessment' && <div style={{ width: '100%', maxWidth: '900px', marginTop: '2rem' }}><Assessment onNext={(score) => nextStep('assessmentScore', score)} /></div>}
            {step === 'communication' && <div style={{ width: '100%', maxWidth: '900px', marginTop: '2rem' }}><CommunicationTest onNext={(score) => nextStep('communicationScore', score)} /></div>}
            {step === 'result' && <div style={{ width: '100%', maxWidth: '1100px', marginTop: '2rem' }}><ReadinessScore data={data} /></div>}
        </div>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div style={{ 
            padding: '1.5rem', 
            borderRadius: '0.5rem', 
            background: 'var(--card-bg)', 
            border: '1px solid var(--card-border)',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}>
            <div style={{ marginBottom: '1rem', background: '#f1f5f9', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem' }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{title}</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{desc}</p>
        </div>
    );
}
