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
            <body>
                <nav style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100 }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        ReadyCheck.
                    </div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="/" style={{ color: '#94a3b8', fontWeight: 500 }}>Dashboard</a>
                        <a href="/guide" style={{ color: '#94a3b8', fontWeight: 500 }}>Resources</a>
                    </div>
                </nav>
                <main>{children}</main>
                <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem' }}>
                    <p style={{ color: '#64748b' }}>&copy; 2026 Placement Readiness Checker. Built for student success.</p>
                    <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#475569' }}>
                        Powered by AMD Ryzen™ for fast evaluations.
                    </div>
                </footer>
            </body>
        </html>
    );
}
