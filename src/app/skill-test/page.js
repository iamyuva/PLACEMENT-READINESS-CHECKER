'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Trophy, ArrowRight, BrainCircuit, Play } from 'lucide-react';

const TOPICS = [
    "Data Structures",
    "Algorithms",
    "React.js",
    "Node.js",
    "System Design",
    "Database Management"
];

import { QuestionPools } from './questionsData';

export default function SkillTest() {
    const [selectedTopic, setSelectedTopic] = useState('');
    const [testActive, setTestActive] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);

    const startTest = () => {
        if (!selectedTopic) return;

        // Pick 10 random questions from the 100 questions generated pool
        const pool = [...QuestionPools[selectedTopic]];
        // Shuffle and pick 10
        const shuffled = pool.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 10);

        setQuestions(selected);
        setTestActive(true);
        setCurrentStep(0);
        setAnswers({});
        setShowResult(false);
    };

    const handleAnswer = (option) => {
        setAnswers({ ...answers, [currentStep]: option });
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
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

    if (!testActive) {
        return (
            <div className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
                <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>Targeted Skill Test</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', textAlign: 'center', maxWidth: '800px' }}>
                    Select a topic below. We will draw 10 random questions from a pool of 100 questions specifically crafted to test your true understanding of the domain.
                </p>

                <div className="glass-card" style={{ width: '100%', maxWidth: '600px', padding: '3rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Choose Your Domain</h2>
                    <select
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', borderRadius: '0.5rem', marginBottom: '2rem', border: '1px solid var(--card-border)', outline: 'none' }}
                    >
                        <option value="" disabled>Select a Topic...</option>
                        {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>

                    <button
                        className="btn btn-primary"
                        onClick={startTest}
                        disabled={!selectedTopic}
                        style={{ width: '100%', padding: '1.25rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}
                    >
                        <Play size={24} /> Start 10-Question Test
                    </button>
                    <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        * Pool size: 100 unique questions per domain. Selection: 10 random.
                    </p>
                </div>
            </div>
        );
    }

    if (showResult) {
        const score = calculateScore();
        return (
            <div className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem' }}>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card" style={{ textAlign: 'center', width: '100%', maxWidth: '700px', padding: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem' }}>Test Complete</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>Domain: {selectedTopic}</p>

                    <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '140px', height: '140px', background: score >= 70 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <h1 style={{ fontSize: '3rem', color: score >= 70 ? 'var(--success)' : 'var(--danger)' }}>{score}%</h1>
                        </div>
                    </div>
                    <p style={{ fontSize: '1.25rem', marginBottom: '3rem', color: 'var(--text-main)' }}>
                        {score >= 70 ? "Excellent work! You show strong proficiency in this topic." : "Needs improvement. We recommend checking the Resources page."}
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => setTestActive(false)}
                        style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
                    >
                        Take Another Test
                    </button>
                </motion.div>
            </div>
        );
    }

    const q = questions[currentStep];

    return (
        <div className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
            <div className="glass-card" style={{ width: '100%', maxWidth: '900px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--card-border)' }}>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep) / questions.length) * 100}%` }}
                        style={{ height: '100%', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}
                    />
                </div>

                <div style={{ padding: '2rem 2rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--card-border)', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <BrainCircuit color="var(--primary)" />
                        <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>{selectedTopic} Data Pool Test</span>
                    </div>
                    <span style={{ fontWeight: 600 }}>Question {currentStep + 1} of 10</span>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{ padding: '0 2rem 3rem' }}
                    >
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '2.5rem', lineHeight: '1.4' }}>
                            {q.question}
                        </h2>

                        <div style={{ display: 'grid', gap: '1rem' }}>
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
                                        <span style={{ opacity: 0.6, fontSize: '0.9em', fontWeight: 600 }}>{String.fromCharCode(65 + idx)}.</span>
                                        {option}
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
