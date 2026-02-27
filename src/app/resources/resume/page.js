'use client';
import Link from 'next/link';
import { ArrowLeft, BookOpen, UserCheck, Settings, PenTool } from 'lucide-react';

export default function ResumePage() {
    return (
        <div className="container" style={{ maxWidth: '1000px', minHeight: '80vh', padding: '2rem 0', fontFamily: 'var(--font-inter)' }}>
            <Link href="/resources" style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none' }}>
                <ArrowLeft size={18} /> Back to Learning Hub
            </Link>

            <div className="glass-card" style={{ padding: '3rem', borderRadius: '1.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <BookOpen size={48} color="var(--warning)" style={{ margin: '0 auto 1.5rem' }} />
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 800 }}>
                        The Book of Elite Resumes
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                        A resume is a marketing document meant to do one thing: get you an interview. If it doesn't pass the machine screening, human eyes will never see it. Here is the science of a top 1% resume.
                    </p>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Settings color="var(--primary)" /> Chapter 1: The ATS (Applicant Tracking System)
                    </h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        99% of Fortune 500 companies use an ATS. It scans your resume and parses the text into fields. If your resume has confusing formats, two columns, or weird icons, the parser will fail, and you will be auto-rejected.
                    </p>

                    <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '1rem', borderTop: '4px solid #3b82f6', marginBottom: '2rem' }}>
                        <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1e293b' }}>The Golden Rules of Formatting:</h4>
                        <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#475569', marginLeft: '1.5rem' }}>
                            <li><strong>One Column Only:</strong> Two columns confuse parsers reading left-to-right.</li>
                            <li><strong>Standard Fonts:</strong> Arial, Times New Roman, Calibri. No cursive or exotic fonts.</li>
                            <li><strong>Standard Section Titles:</strong> "Experience", "Education", "Projects". Do not use "My Journey" or "Where I've Been".</li>
                            <li><strong>PDF Format:</strong> Always save and submit as .pdf to preserve formatting securely, unless .docx is explicitly requested.</li>
                            <li><strong>No Images/Headshots:</strong> Photos clutter scanners and can sometimes cause biases.</li>
                        </ul>
                    </div>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <PenTool color="var(--primary)" /> Chapter 2: The Action-Result Framework (XYZ)
                    </h2>

                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Created by Laszlo Bock (former SVP of HR at Google), the XYZ format is: <strong>"Accomplished [X] as measured by [Y], by doing [Z]"</strong>. Let's look at the evolution of a bullet point.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '4px solid #ef4444' }}>
                            <p style={{ color: '#b91c1c', fontWeight: 600, marginBottom: '0.5rem' }}>Bad (Duty-based):</p>
                            <p style={{ color: '#7f1d1d' }}>"Worked on the backend database for the application to make it faster."</p>
                        </div>
                        <div style={{ background: '#fffbeb', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '4px solid #f59e0b' }}>
                            <p style={{ color: '#b45309', fontWeight: 600, marginBottom: '0.5rem' }}>Okay (Action-oriented):</p>
                            <p style={{ color: '#92400e' }}>"Optimized the backend database to decrease load times."</p>
                        </div>
                        <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '4px solid #10b981' }}>
                            <p style={{ color: '#166534', fontWeight: 600, marginBottom: '0.5rem' }}>Excellent (XYZ Formula):</p>
                            <p style={{ color: '#14532d' }}>"Decreased server response time by 30% (Y) by rewriting SQL queries (Z) and implementing a caching layer in Redis, serving over 10K active users (X)."</p>
                        </div>
                    </div>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem', padding: '3rem', background: '#eff6ff', borderRadius: '1.5rem', border: '1px solid #bfdbfe' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#1e3a8a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <UserCheck color="#1d4ed8" /> Chapter 3: Master Action Verbs
                    </h2>

                    <p style={{ fontSize: '1.1rem', color: '#1e40af', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        Never start a bullet point with "Responsible for" or "Helped with". Start with strong action verbs.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                        <div>
                            <strong style={{ color: '#1e3a8a' }}>Leading/Managing:</strong>
                            <ul style={{ color: '#1e40af', marginLeft: '1rem', marginTop: '0.5rem' }}>
                                <li>Spearheaded</li>
                                <li>Orchestrated</li>
                                <li>Directed</li>
                            </ul>
                        </div>
                        <div>
                            <strong style={{ color: '#1e3a8a' }}>Development:</strong>
                            <ul style={{ color: '#1e40af', marginLeft: '1rem', marginTop: '0.5rem' }}>
                                <li>Architected</li>
                                <li>Engineered</li>
                                <li>Deployed</li>
                            </ul>
                        </div>
                        <div>
                            <strong style={{ color: '#1e3a8a' }}>Optimization:</strong>
                            <ul style={{ color: '#1e40af', marginLeft: '1rem', marginTop: '0.5rem' }}>
                                <li>Enhanced</li>
                                <li>Accelerated</li>
                                <li>Maximized</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="content-section">
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                        Chapter 4: The Core Sections Order (for Students)
                    </h2>
                    <ol style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-muted)', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li><strong>Header:</strong> Name, Phone, Email, LinkedIn URL, GitHub URL.</li>
                        <li><strong>Education:</strong> University name, Degree, Expected Graduation (Month/Year), GPA (if &gt; 3.0), Relevant Coursework.</li>
                        <li><strong>Technical Skills:</strong> Grouped cleanly by Languages, Frameworks, Developer Tools, Databases.</li>
                        <li><strong>Experience (Internships/Jobs):</strong> Reverse chronological order. Focus on accomplishments, not chores.</li>
                        <li><strong>Projects:</strong> If you lack experience, this is your goldmine. Treat your personal/course projects like jobs. Describe the impact and the tech stack used.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
