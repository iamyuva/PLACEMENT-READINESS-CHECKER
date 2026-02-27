import './globals.css';

export const metadata = {
    title: 'Placement Readiness Checker | Evaluate Your Future',
    description: 'Structured readiness score and personalized guidance for students preparing for campus placements.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <nav style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--nav-bg)', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>ReadyCheck</a>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="/" style={{ color: 'var(--text-main)', fontWeight: 500, textDecoration: 'none' }}>Dashboard</a>
                        <a href="/resume-checker" style={{ color: 'var(--text-main)', fontWeight: 500, textDecoration: 'none' }}>Resume Checker</a>
                        <a href="/skill-test" style={{ color: 'var(--text-main)', fontWeight: 500, textDecoration: 'none' }}>Skill Test</a>
                        <a href="/resources" style={{ color: 'var(--text-main)', fontWeight: 500, textDecoration: 'none' }}>Resources</a>
                    </div>
                </nav>
                <main style={{ flex: 1 }}>{children}</main>
                <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--card-border)', background: 'var(--card-bg)' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>&copy; 2026 Placement Readiness Checker. Built for your success.</p>
                </footer>
            </body>
        </html>
    );
}
