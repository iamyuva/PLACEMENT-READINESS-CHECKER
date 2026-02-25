'use client';
import { useState } from 'react';
import { ASSESSMENT_QUESTIONS } from '../lib/questions';

export default function Assessment({ onNext }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (option) => {
        setAnswers({ ...answers, [currentStep]: option });
        if (currentStep < ASSESSMENT_QUESTIONS.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResult(true);
        }
    };

    const calculateScore = () => {
        let correct = 0;
        ASSESSMENT_QUESTIONS.forEach((q, idx) => {
            if (answers[idx] === q.answer) correct++;
        });
        return (correct / ASSESSMENT_QUESTIONS.length) * 100;
    };

    if (showResult) {
        return (
            <div className="glass-card animate-fade-in" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Assessment Complete</h2>
                <div style={{ fontSize: '5rem', margin: '2rem 0' }}>🏆</div>
                <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                    Great effort! You've completed the technical evaluation.
                </p>
                <button
                    className="btn btn-primary"
                    onClick={() => onNext(calculateScore())}
                    style={{ width: '100%', padding: '1rem' }}
                >
                    View Final Readiness Score
                </button>
            </div>
        );
    }

    const q = ASSESSMENT_QUESTIONS[currentStep];

    return (
        <div className="glass-card animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <span>Domain: {q.domain}</span>
                <span>Question {currentStep + 1} of {ASSESSMENT_QUESTIONS.length}</span>
            </div>

            <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', marginBottom: '3rem', overflow: 'hidden' }}>
                <div style={{
                    height: '100%',
                    background: 'var(--primary)',
                    width: `${((currentStep + 1) / ASSESSMENT_QUESTIONS.length) * 100}%`,
                    transition: 'width 0.4s ease'
                }}></div>
            </div>

            <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', lineHeight: '1.4' }}>
                {q.question}
            </h2>

            <div style={{ display: 'grid', gap: '1rem' }}>
                {q.options.map(option => (
                    <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        className="btn btn-outline"
                        style={{
                            textAlign: 'left',
                            padding: '1.25rem',
                            fontSize: '1.1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        {option}
                        <span style={{ opacity: 0.3 }}>→</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
