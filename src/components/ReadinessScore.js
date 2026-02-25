'use client';
import { useState, useEffect } from 'react';
import { calculateReadinessScore, getRecommendations } from '../lib/scoring';

export default function ReadinessScore({ data }) {
    const score = calculateReadinessScore(data);
    const recommendations = getRecommendations(data);

    const getLabel = (s) => {
        if (s >= 80) return { text: 'Excellent', color: 'var(--success)', badge: 'badge-success' };
        if (s >= 60) return { text: 'Good', color: 'var(--warning)', badge: 'badge-warning' };
        return { text: 'Needs Improvement', color: 'var(--danger)', badge: 'badge-danger' };
    };

    const label = getLabel(score);

    const [history, setHistory] = useState([]);

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('readiness_history') || '[]');
        const newEntry = { score, date: new Date().toLocaleDateString(), id: Date.now() };
        const updatedHistory = [newEntry, ...savedHistory].slice(0, 5);
        localStorage.setItem('readiness_history', JSON.stringify(updatedHistory));
        setHistory(updatedHistory);
    }, [score]);

    return (
        <div className="animate-fade-in">
            <div className="glass-card" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>Your Readiness Score</h2>
                <div style={{
                    fontSize: '6rem',
                    fontWeight: 800,
                    margin: '1rem 0',
                    background: `linear-gradient(to bottom, #fff, ${label.color})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    {score}%
                </div>
                <span className={`badge ${label.badge}`} style={{ fontSize: '1.25rem', padding: '0.5rem 1.5rem' }}>
                    {label.text}
                </span>
            </div>

            <div className="grid">
                <div className="glass-card">
                    <h3 style={{ fontSize: '1.25rem' }}>Breakdown</h3>
                    <div style={{ marginTop: '1.5rem' }}>
                        <ProgressRow label="Resume Quality" value={data.resumeScore} weight="20%" color="#3b82f6" />
                        <ProgressRow label="Skill Selection" value={data.skillScore} weight="20%" color="#8b5cf6" />
                        <ProgressRow label="Assessment" value={data.assessmentScore} weight="40%" color="#10b981" />
                        <ProgressRow label="Communication" value={data.communicationScore} weight="20%" color="#f59e0b" />
                    </div>

                    <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                        <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>Recent History</h4>
                        {history.map(entry => (
                            <div key={entry.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                                <span>{entry.date}</span>
                                <span style={{ fontWeight: 'bold' }}>{entry.score}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card">
                    <h3 style={{ fontSize: '1.25rem' }}>Personalized Recommendations</h3>
                    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {recommendations.map((rec, i) => (
                            <div key={i} style={{ padding: '1rem', borderLeft: '3px solid var(--primary)', background: 'rgba(255,255,255,0.02)' }}>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{rec.text}</p>
                                <button className="btn btn-outline" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>
                                    {rec.action}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <button className="btn btn-primary" onClick={() => window.location.reload()}>
                    Retake Evaluation
                </button>
            </div>
        </div>
    );
}

function ProgressRow({ label, value, weight, color }) {
    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                <span>{label} ({weight})</span>
                <span style={{ color }}>{value}%</span>
            </div>
            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                <div style={{ height: '100%', width: `${value}%`, background: color, borderRadius: '4px' }}></div>
            </div>
        </div>
    );
}
