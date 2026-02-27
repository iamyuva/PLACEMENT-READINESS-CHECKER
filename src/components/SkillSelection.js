'use client';
import { useState } from 'react';
import { SKILL_DOMAINS } from '../lib/questions';
import { motion } from 'framer-motion';
import { Check, Code2, ArrowRight } from 'lucide-react';

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
        const score = Math.min(selectedSkills.length * 15, 100);
        onNext(score);
    };

    return (
        <div className="glass-card">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                    <Code2 size={36} color="var(--primary)" /> Domain Expertise
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                    Select everything you have practical experience with. Our multi-faceted evaluation adapts to your technology stack.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                {SKILL_DOMAINS.map((skill, idx) => {
                    const isSelected = selectedSkills.includes(skill);
                    return (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleSkill(skill)}
                            style={{
                                padding: '1.25rem',
                                borderRadius: '1rem',
                                border: `2px solid ${isSelected ? 'var(--primary)' : 'var(--card-border)'}`,
                                background: isSelected ? '#eff6ff' : 'var(--card-bg)',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                fontWeight: 500,
                                color: isSelected ? 'var(--primary)' : 'var(--text-main)',
                                boxShadow: isSelected ? '0 10px 20px -5px rgba(37,99,235,0.2)' : 'none'
                            }}
                        >
                            <span>{skill}</span>
                            <div style={{ 
                                width: '24px', height: '24px', borderRadius: '50%', 
                                background: isSelected ? 'var(--primary)' : 'var(--card-border)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'all 0.2s ease'
                            }}>
                                {isSelected && <Check size={14} color="white" strokeWidth={3} />}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: selectedSkills.length > 0 ? 1 : 0.5 }}>
                <button
                    className="btn btn-primary"
                    onClick={handleNext}
                    disabled={selectedSkills.length === 0}
                    style={{ 
                        width: '100%', padding: '1.25rem', fontSize: '1.25rem', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                        borderRadius: '1rem'
                    }}
                >
                    Proceed to Technical Engine <ArrowRight />
                </button>
            </motion.div>
        </div>
    );
}
