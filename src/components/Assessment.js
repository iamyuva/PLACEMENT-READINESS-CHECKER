'use client';
import { useState, useEffect } from 'react';
import { generateTechnicalQuestions } from '../lib/sllm';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Trophy, ArrowRight, BrainCircuit } from 'lucide-react';

export default function Assessment({ onNext }) {
    const [questions, setQuestions] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);

    // Fetch questions from SLLM when component mounts
    useEffect(() => {
        setQuestions(generateTechnicalQuestions());
    }, []);

    useEffect(() => {
        if (showResult || questions.length === 0) return;
        if (timeLeft === 0) {
            handleAnswer(null); // Time up -> wrong/null answer
            return;
        }
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft, showResult]);

    const handleAnswer = (option) => {
        setAnswers({ ...answers, [currentStep]: option });
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
            setTimeLeft(30); // Reset timer
        } else {
            setShowResult(true);
        }
    };

    const calculateScore = () => {
        let correct = 0;
        questions.forEach((q, idx) => {
            if (answers[idx] === q.answer) correct++;
        });
        return (correct / questions.length) * 100;
    };

    if (showResult) {
        return (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Core Engine Test Complete</h2>
                <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '120px', height: '120px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Trophy size={64} color="var(--success)" />
                    </div>
                </div>
                <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                    Your fundamental technical logic has been successfully logged.
                </p>
                <button
                    className="btn btn-primary"
                    onClick={() => onNext(calculateScore())}
                    style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                    Proceed to Behavioral Matrix <ArrowRight />
                </button>
            </motion.div>
        );
    }

    if (questions.length === 0) {
        return <div className="glass-card" style={{ textAlign: 'center', padding: '3rem' }}>Loading dynamic questions...</div>;
    }

    const q = questions[currentStep];

    return (
        <div className="glass-card" style={{ overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--card-border)' }}>
                <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: `${((currentStep) / questions.length) * 100}%` }} 
                    style={{ height: '100%', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} 
                />
            </div>

            <div style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--card-border)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <BrainCircuit color="var(--primary)" />
                    <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Domain: {q.domain}</span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: timeLeft <= 10 ? '#fee2e2' : '#f1f5f9', padding: '0.5rem 1rem', borderRadius: '2rem', color: timeLeft <= 10 ? 'var(--danger)' : 'var(--text-main)' }}>
                    <Timer size={18} />
                    <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>00:{timeLeft.toString().padStart(2, '0')}</span>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '2.5rem', lineHeight: '1.4', padding: '0 1rem' }}>
                        {currentStep + 1}. {q.question}
                    </h2>

                    <div style={{ display: 'grid', gap: '1rem', padding: '0 1rem' }}>
                        {q.options.map((option, idx) => (
                            <motion.button
                                key={option}
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleAnswer(option)}
                                className="btn btn-outline"
                                style={{
                                    textAlign: 'left',
                                    padding: '1.25rem 1.5rem',
                                    fontSize: '1.1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    background: 'var(--card-bg)',
                                    borderColor: 'var(--card-border)',
                                    color: 'var(--text-main)',
                                    borderRadius: '0.75rem'
                                }}
                            >
                                <span style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <span style={{ opacity: 0.5, fontSize: '0.9em' }}>{String.fromCharCode(65 + idx)}.</span>
                                    {option}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
