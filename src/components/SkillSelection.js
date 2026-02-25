'use client';
import { useState } from 'react';
import { SKILL_DOMAINS } from '../lib/questions';

export default function SkillSelection({ onNext }) {
    const [selectedSkills, setSelectedSkills] = useState([]);

    const toggleSkill = (skill) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter(s => s !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    const handleNext = () => {
        // Score based on diversity and count
        const score = Math.min(selectedSkills.length * 15, 100);
        onNext(score);
    };

    return (
        <div className="glass-card animate-fade-in">
            <h2 style={{ fontSize: '2rem' }}>2. Skill Selection</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Select the domains and technologies you are proficient in.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {SKILL_DOMAINS.map(skill => (
                    <div
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        style={{
                            padding: '1rem',
                            borderRadius: '0.75rem',
                            border: `1px solid ${selectedSkills.includes(skill) ? 'var(--primary)' : 'var(--card-border)'}`,
                            background: selectedSkills.includes(skill) ? 'rgba(37, 99, 235, 0.1)' : 'rgba(0,0,0,0.1)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            textAlign: 'center',
                            fontWeight: 500,
                            color: selectedSkills.includes(skill) ? 'var(--primary)' : 'var(--text-main)'
                        }}
                    >
                        {skill}
                    </div>
                ))}
            </div>

            <button
                className="btn btn-primary"
                onClick={handleNext}
                disabled={selectedSkills.length === 0}
                style={{ width: '100%', padding: '1rem' }}
            >
                Continue to Assessment
            </button>
        </div>
    );
}
