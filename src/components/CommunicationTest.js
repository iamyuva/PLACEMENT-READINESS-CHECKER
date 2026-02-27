'use client';
import { useState, useEffect, useRef } from 'react';
import { generateBehavioralQuestions } from '../lib/sllm';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, CheckCircle2, User, Bot } from 'lucide-react';

export default function CommunicationTest({ onNext }) {
    const [questions, setQuestions] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [chatHistory, setChatHistory] = useState([
        { sender: 'ai', text: "Hello! I'm your AI Interviewer. We're going to do a quick behavioral evaluation. Let's start! 🚀" }
    ]);
    const [isThinking, setIsThinking] = useState(false);
    
    // Add first question on mount
    useEffect(() => {
        const generated = generateBehavioralQuestions();
        setQuestions(generated);
        setTimeout(() => {
             setChatHistory(prev => [...prev, { sender: 'ai', text: generated[0].question }]);
        }, 1500);
    }, []);

    const chatRef = useRef(null);
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chatHistory, isThinking]);

    const handleAnswer = (option) => {
        const currentQ = questions[currentStep];
        setAnswers({ ...answers, [currentStep]: option });
        
        // Add user response to chat
        setChatHistory(prev => [...prev, { sender: 'user', text: option }]);
        setIsThinking(true);

        setTimeout(() => {
            let aiReaction = "";
            if (option === currentQ.answer) {
                aiReaction = "Great approach! That shows strong professional maturity. 🌟";
            } else {
                aiReaction = "I see. In a professional setting, we usually want to focus on collaboration and direct communication.";
            }

            setChatHistory(prev => [...prev, { sender: 'ai', text: aiReaction }]);

            setTimeout(() => {
                const nextStepIndex = currentStep + 1;
                if (nextStepIndex < questions.length) {
                    setCurrentStep(nextStepIndex);
                    setChatHistory(prev => [...prev, { sender: 'ai', text: questions[nextStepIndex].question }]);
                    setIsThinking(false);
                } else {
                    setIsThinking(false);
                    setShowResult(true);
                }
            }, 1500);
        }, 1500);
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
                <h2 style={{ fontSize: '2.5rem' }}>HR Round Complete</h2>
                <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '120px', height: '120px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle2 size={64} color="var(--warning)" />
                    </div>
                </div>
                <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                    Thank you. We have analyzed your behavioral responses.
                </p>
                <button
                    className="btn btn-primary"
                    onClick={() => onNext(calculateScore())}
                    style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
                >
                    Generate Full Readiness Report
                </button>
            </motion.div>
        );
    }

    if (questions.length === 0) {
        return <div className="glass-card" style={{ textAlign: 'center', padding: '3rem' }}>Connecting to AI Interviewer...</div>;
    }

    const currentQ = questions[currentStep];

    return (
        <div className="glass-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '650px' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--card-border)', background: 'var(--card-bg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Bot color="white" size={20} />
                    </div>
                    <div>
                        <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)' }}>AI Interviewer</h3>
                        <span style={{ fontSize: '0.8rem', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <div style={{ width: '6px', height: '6px', background: 'var(--success)', borderRadius: '50%' }}></div> Online
                        </span>
                    </div>
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', background: '#f1f5f9', padding: '0.25rem 0.75rem', borderRadius: '1rem' }}>
                    {currentStep + 1} / {questions.length}
                </div>
            </div>

            <div ref={chatRef} style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <AnimatePresence>
                    {chatHistory.map((msg, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ 
                                alignSelf: msg.sender === 'ai' ? 'flex-start' : 'flex-end',
                                background: msg.sender === 'ai' ? '#f1f5f9' : 'var(--primary)',
                                color: msg.sender === 'ai' ? 'var(--text-main)' : 'white',
                                padding: '1rem 1.25rem',
                                borderRadius: msg.sender === 'ai' ? '1rem 1rem 1rem 0' : '1rem 1rem 0 1rem',
                                maxWidth: '80%',
                                lineHeight: '1.5',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                            }}
                        >
                            {msg.text}
                        </motion.div>
                    ))}
                    {isThinking && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ alignSelf: 'flex-start', background: '#f1f5f9', padding: '1rem', borderRadius: '1rem 1rem 1rem 0', color: 'var(--text-main)' }}>
                            <span className="dot-typing">...</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div style={{ padding: '1.5rem', background: '#f8fafc', borderTop: '1px solid var(--card-border)' }}>
                {chatHistory[chatHistory.length - 1]?.sender === 'ai' && !isThinking && chatHistory.length > 1 ? (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'grid', gap: '0.75rem' }}>
                        {currentQ.options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(option)}
                                className="btn btn-outline"
                                style={{
                                    textAlign: 'left',
                                    padding: '1rem 1.25rem',
                                    fontSize: '0.95rem',
                                    borderColor: 'var(--card-border)',
                                    color: 'var(--text-main)',
                                    background: 'var(--card-bg)',
                                    lineHeight: 1.4,
                                    borderRadius: '0.75rem'
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </motion.div>
                ) : (
                    <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic', padding: '0.5rem' }}>
                        {isThinking ? 'Interviewer is typing...' : 'Waiting for interviewer...'}
                    </div>
                )}
            </div>
            
            <style jsx>{`
                .dot-typing {
                    animation: blink 1.4s infinite both;
                    font-weight: bold;
                    letter-spacing: 2px;
                }
                @keyframes blink {
                    0% { opacity: 0.2; }
                    20% { opacity: 1; }
                    100% { opacity: 0.2; }
                }
            `}</style>
        </div>
    );
}
