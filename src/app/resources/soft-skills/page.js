'use client';
import Link from 'next/link';
import { ArrowLeft, MessagesSquare, CheckCircle, Users, Frown } from 'lucide-react';

export default function SoftSkillsPage() {
    return (
        <div className="container" style={{ maxWidth: '1000px', minHeight: '80vh', padding: '2rem 0', fontFamily: 'var(--font-inter)' }}>
            <Link href="/resources" style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none' }}>
                <ArrowLeft size={18} /> Back to Learning Hub
            </Link>

            <div className="glass-card" style={{ padding: '3rem', borderRadius: '1.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <MessagesSquare size={48} color="var(--success)" style={{ margin: '0 auto 1.5rem' }} />
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 800 }}>
                        The Book of Behavioral Excellence
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                        You won't get far on technical skills alone. This guide details exactly how to navigate complex behavioral rounds (often called 'Culture Fit' or 'HR' rounds) at top technology companies.
                    </p>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Users color="var(--primary)" /> Chapter 1: The STAR Framework
                    </h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        When faced with behavioral questions ("Tell me about a time when..."), the best way to structure your answer is to use the STAR method. It keeps your answer concise, focused, and guarantees you end on a positive impact.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '2rem', marginBottom: '2rem' }}>
                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', borderTop: '4px solid #3b82f6' }}>
                            <h5 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '0.5rem' }}>S - Situation</h5>
                            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.6' }}>Set the scene. Provide the context. What was the project or challenge? (10-15s)</p>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', borderTop: '4px solid #f59e0b' }}>
                            <h5 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '0.5rem' }}>T - Task</h5>
                            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.6' }}>Describe your specific responsibility in that situation. What goal did you need to accomplish? (10-15s)</p>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', borderTop: '4px solid #10b981' }}>
                            <h5 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '0.5rem' }}>A - Action</h5>
                            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.6' }}>The most important part. Describe exactly what YOU did to solve the problem. Say "I" not "We". (30-60s)</p>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', borderTop: '4px solid #8b5cf6' }}>
                            <h5 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '0.5rem' }}>R - Result</h5>
                            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.6' }}>Share the outcome. Quantify it if possible (e.g., "Increased sales by 10%"). What did you learn? (20-30s)</p>
                        </div>
                    </div>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <CheckCircle color="var(--primary)" /> Chapter 2: The 'Tell Me About Yourself' Question
                    </h2>

                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        This is highly likely to be the first question you're asked. Your goal should be an 'Elevator Pitch'. Do not ramble about your childhood. Use the <strong>Past-Present-Future</strong> format.
                    </p>

                    <div style={{ background: '#f0fdf4', padding: '2rem', borderRadius: '1rem', borderLeft: '4px solid var(--success)', marginBottom: '1.5rem' }}>
                        <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#166534' }}>Example Blueprint:</h4>
                        <p style={{ fontSize: '1.1rem', color: '#14532d', lineHeight: '1.6' }}>
                            <strong>Present:</strong> "I'm currently a senior Computer Science student at University X focusing on web development."<br /><br />
                            <strong>Past:</strong> "Over the last few years, I've built multiple SaaS projects using React and Node.js, and completed an internship at Company Y where I optimized their database queries."<br /><br />
                            <strong>Future:</strong> "I'm now looking for a fast-paced environment where I can contribute to a scalable product, which is why I'm excited about this opportunity at your company."
                        </p>
                    </div>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem', padding: '3rem', background: '#fff1f2', borderRadius: '1.5rem', border: '1px solid #fecdd3' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#be123c', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Frown color="#e11d48" /> Chapter 3: How to Talk About Weaknesses
                    </h2>

                    <p style={{ fontSize: '1.1rem', color: '#9f1239', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        The question "What is your biggest weakness?" is a test of self-awareness. Never say "I'm a perfectionist" or "I work too hard." They are cliché and unauthentic.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: '#9f1239', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        <strong>The Best Strategy:</strong> Pick a real weakness that is not a critical hurdle for the role (e.g., public speaking for a junior dev), and immediately follow it up with <em>actionable steps</em> you are taking to improve it.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: '#9f1239', lineHeight: '1.6' }}>
                        <strong>Good Example:</strong> "I sometimes struggle with delegating tasks because I like to have full control over the code. However, recently in my capstone project, I instituted a mandatory code review process so I could trust my peers while still maintaining oversight."
                    </p>
                </div>

                <div className="content-section">
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                        Chapter 4: Non-Verbal Communication
                    </h2>
                    <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-muted)', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li><strong>Eye Contact:</strong> Maintain eye contact 60-70% of the time. Look at the camera if it's an online interview, not the screen.</li>
                        <li><strong>Body Language:</strong> Sit up straight. Lean in slightly when speaking. Keep your hands visible on the desk to demonstrate openness.</li>
                        <li><strong>Voice Tone:</strong> Speak 10% louder and 10% slower than you think you should. It conveys confidence and authority.</li>
                        <li><strong>The Pause:</strong> Don't be afraid to pause to gather your thoughts. Silence is better than "um", "like", or "uh". Saying "That's a great question, let me think for a second" is perfectly acceptable.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
