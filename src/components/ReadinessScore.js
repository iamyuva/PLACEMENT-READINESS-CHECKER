'use client';
import { useState, useEffect } from 'react';
import { calculateReadinessScore, getRecommendations } from '../lib/scoring';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import confetti from 'canvas-confetti';

export default function ReadinessScore({ data }) {
    const score = calculateReadinessScore(data);
    const recommendations = getRecommendations(data);

    const getLabel = (s) => {
        if (s >= 80) return { text: 'Excellent', color: 'var(--success)', badge: 'badge-success' };
        if (s >= 60) return { text: 'Good', color: 'var(--warning)', badge: 'badge-warning' };
        return { text: 'Needs Improvement', color: 'var(--danger)', badge: 'badge-danger' };
    };

    const label = getLabel(score);

    const chartData = [
        { subject: 'Resume', A: data.resumeScore, fullMark: 100 },
        { subject: 'Skills', A: data.skillScore, fullMark: 100 },
        { subject: 'Assessment', A: data.assessmentScore, fullMark: 100 },
        { subject: 'Communication', A: data.communicationScore, fullMark: 100 },
    ];

    const [history, setHistory] = useState([]);

    useEffect(() => {
        if (score >= 80) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#2563eb', '#38bdf8', '#22c55e']
            });
        }

        const savedHistory = JSON.parse(localStorage.getItem('readiness_history') || '[]');
        const newEntry = { score, date: new Date().toLocaleDateString(), id: Date.now() };
        const updatedHistory = [newEntry, ...savedHistory].slice(0, 5);
        localStorage.setItem('readiness_history', JSON.stringify(updatedHistory));
        setHistory(updatedHistory);
    }, [score]);

    return (
        <div className="animate-fade-in" style={{ paddingBottom: '4rem' }}>
            <div className="glass-card" style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.5, borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--accent)', filter: 'blur(100px)', opacity: 0.4, borderRadius: '50%' }}></div>

                <h2 style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>Comprehensive Readiness Score</h2>
                <div style={{
                    fontSize: '7rem',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    margin: '1.5rem 0',
                    background: `linear-gradient(to bottom, #ffffff, ${label.color})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: `0 10px 30px ${label.color}40`
                }}>
                    {score}%
                </div>
                <span className={`badge ${label.badge}`} style={{ fontSize: '1.25rem', padding: '0.5rem 1.5rem', border: `1px solid ${label.color}50` }}>
                    {label.text}
                </span>
            </div>

            <div className="grid">
                <div className="glass-card">
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        📊 Skill Matrix
                    </h3>
                    <div style={{ width: '100%', height: '300px', marginBottom: '2rem' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-muted)', fontSize: 14 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <RechartsTooltip 
                                    contentStyle={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                                    itemStyle={{ color: 'var(--accent)' }}
                                />
                                <Radar name="Score" dataKey="A" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.5} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Detailed Breakdown</h3>
                    <div>
                        <ProgressRow label="Resume Quality" value={data.resumeScore} weight="20%" color="#3b82f6" />
                        <ProgressRow label="Skill Selection" value={data.skillScore} weight="20%" color="#8b5cf6" />
                        <ProgressRow label="Assessment" value={data.assessmentScore} weight="40%" color="#10b981" />
                        <ProgressRow label="Communication" value={data.communicationScore} weight="20%" color="#f59e0b" />
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="glass-card">
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            🎯 Action Plan
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {recommendations.map((rec, i) => (
                                <div key={i} style={{ padding: '1.25rem', borderLeft: '4px solid var(--primary)', background: 'linear-gradient(90deg, rgba(255,255,255,0.05) 0%, transparent 100%)', borderRadius: '0 0.5rem 0.5rem 0' }}>
                                    <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: 1.6 }}>{rec.text}</p>
                                    <button className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
                                        {rec.action} →
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card">
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>Progress History</h3>
                        {history.map(entry => (
                            <div key={entry.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <span style={{ color: 'var(--text-muted)' }}>{entry.date}</span>
                                <span style={{ fontWeight: 600, color: entry.score >= 80 ? 'var(--success)' : entry.score >= 60 ? 'var(--warning)' : 'var(--danger)' }}>
                                    {entry.score}% Score
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <button className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.25rem', boxShadow: '0 10px 25px rgba(37,99,235,0.3)' }} onClick={() => window.location.reload()}>
                    Start New Evaluation
                </button>
            </div>
        </div>
    );
}

function ProgressRow({ label, value, weight, color }) {
    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <span style={{ fontWeight: 500 }}>{label} <span style={{ opacity: 0.5, fontSize: '0.8rem' }}>({weight})</span></span>
                <span style={{ color, fontWeight: 700 }}>{value}%</span>
            </div>
            <div style={{ height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${value}%`, background: color, borderRadius: '5px', transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)' }}></div>
            </div>
        </div>
    );
}
