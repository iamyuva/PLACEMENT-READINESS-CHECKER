'use client';

export default function GuidePage() {
    const tips = [
        {
            title: "Master the Fundamentals",
            content: "Ensure you are strong in Data Structures and Algorithms (DSA). Almost every technical interview starts with a DSA problem. Focus on Arrays, Linked Lists, Stacks, Queues, and Trees.",
            icon: "📚"
        },
        {
            title: "Refine Your Resume",
            content: "Use standard fonts and layouts. Quantify your achievements (e.g., 'Improved performance by 30%'). Make sure it is ATS-friendly by using clear headings and consistent formatting.",
            icon: "📄"
        },
        {
            title: "Project Portfolio",
            content: "Build 2-3 significant projects and host them on GitHub. Be prepared to explain every line of code in your projects. Mention the technology stack and the problems you solved.",
            icon: "💻"
        },
        {
            title: "Communication Skills",
            content: "Mock interviews are your best friend. Practice explaining your logic while you code. Work on your 'Tell me about yourself' pitch—keep it concise and professional.",
            icon: "🗣️"
        },
        {
            title: "Core CS Concepts",
            content: "Don't ignore DBMS, Operating Systems, and Networking. For many entry-level roles, these subjects are just as important as coding skills.",
            icon: "⚙️"
        }
    ];

    return (
        <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="glass-card animate-fade-in" style={{ padding: '4rem 2rem', textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3rem' }}>Placement Preparation Guide</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                    Your roadmap to cracking placements in top-tier companies.
                </p>
            </div>

            <div style={{ display: 'grid', gap: '2rem' }}>
                {tips.map((tip, index) => (
                    <div key={index} className="glass-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                        <div style={{ fontSize: '3rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem' }}>
                            {tip.icon}
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>{tip.title}</h2>
                            <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: '1.8' }}>{tip.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <a href="/" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
                    Back to Readiness Test
                </a>
            </div>
        </div>
    );
}
