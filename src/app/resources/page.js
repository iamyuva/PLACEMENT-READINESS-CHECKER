import Link from 'next/link';
import { BookOpen, Code, Layers, MessagesSquare } from 'lucide-react';

export default function GuideHub() {
    const categories = [
        {
            title: "Data Structures & Algorithms",
            desc: "Learn easy-to-understand basics of Arrays, Trees, Hash Maps, and practice coding exercises.",
            link: "/resources/dsa",
            icon: <Code size={32} color="var(--primary)" />
        },
        {
            title: "System Design Essentials",
            desc: "Learn how large-scale apps work behind the scenes. Covers Load Balancers, Databases, and APIs.",
            link: "/resources/system-design",
            icon: <Layers size={32} color="var(--accent)" />
        },
        {
            title: "Soft Skills & Interviews",
            desc: "Master the behavioral round. How to talk, body language, and crisis management practice.",
            link: "/resources/soft-skills",
            icon: <MessagesSquare size={32} color="var(--success)" />
        },
        {
            title: "Resume Building",
            desc: "How to craft a resume that passes the ATS. Action verbs, formatting rules, and templates.",
            link: "/resources/resume",
            icon: <BookOpen size={32} color="var(--warning)" />
        }
    ];

    return (
        <div className="container" style={{ maxWidth: '1000px', minHeight: '80vh' }}>
            <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center', marginBottom: '3rem', marginTop: '2rem' }}>
                <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>Learning Hub & Exercises</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                    Welcome to the full material center. Choose a domain below to read simple, easy-to-understand study materials and complete practice exercises!
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {categories.map((cat, idx) => (
                    <Link href={cat.link} key={idx}>
                        <div className="glass-card" style={{
                            padding: '2rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            <div style={{ background: '#f8fafc', width: '60px', height: '60px', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {cat.icon}
                            </div>
                            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', margin: 0 }}>{cat.title}</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', flex: 1 }}>{cat.desc}</p>
                            <span style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                                Start Module &rarr;
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
