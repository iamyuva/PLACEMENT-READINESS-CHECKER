'use client';
import { useState } from 'react';
import ResumeUpload from '../components/ResumeUpload';
import SkillSelection from '../components/SkillSelection';
import Assessment from '../components/Assessment';
import ReadinessScore from '../components/ReadinessScore';

export default function Home() {
    const [step, setStep] = useState('welcome');
    const [data, setData] = useState({
        resumeScore: 0,
        skillScore: 0,
        assessmentScore: 0,
        communicationScore: 75, // Default/Simulated
    });

    const nextStep = (key, value) => {
        const newData = { ...data, [key]: value };
        setData(newData);

        if (key === 'resumeScore') setStep('skills');
        else if (key === 'skillScore') setStep('assessment');
        else if (key === 'assessmentScore') setStep('result');
    };

    return (
        <div className="container">
            {step === 'welcome' && (
                <div className="glass-card animate-fade-in" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                        Are You Ready for <br />
                        <span style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Campus Placements?
                        </span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 3rem' }}>
                        Get a structured readiness score based on your resume, skills, and technical performance.
                        No fake AI, just honest evaluation and clear guidance.
                    </p>

                    <div className="grid" style={{ marginBottom: '3rem', textAlign: 'left' }}>
                        <FeatureCard
                            icon="📄"
                            title="Resume Quality"
                            desc="20% weightage - Evaluates format, layout and impact."
                        />
                        <FeatureCard
                            icon="🛠️"
                            title="Skill Sets"
                            desc="20% weightage - Checks domain proficiency."
                        />
                        <FeatureCard
                            icon="🧠"
                            title="Assessment"
                            desc="40% weightage - Technical and logical evaluation."
                        />
                    </div>

                    <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.25rem' }} onClick={() => setStep('resume')}>
                        Start Evaluation
                    </button>
                </div>
            )}

            {step === 'resume' && <ResumeUpload onNext={(score) => nextStep('resumeScore', score)} />}
            {step === 'skills' && <SkillSelection onNext={(score) => nextStep('skillScore', score)} />}
            {step === 'assessment' && <Assessment onNext={(score) => nextStep('assessmentScore', score)} />}
            {step === 'result' && <ReadinessScore data={data} />}
        </div>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div style={{ padding: '1.5rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--card-border)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{desc}</p>
        </div>
    );
}
