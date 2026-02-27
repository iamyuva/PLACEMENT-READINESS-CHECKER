'use client';
import Link from 'next/link';
import { ArrowLeft, Layers, Server, Database, Activity, Network } from 'lucide-react';

export default function SystemDesignPage() {
    return (
        <div className="container" style={{ maxWidth: '1000px', minHeight: '80vh', padding: '2rem 0', fontFamily: 'var(--font-inter)' }}>
            <Link href="/resources" style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none' }}>
                <ArrowLeft size={18} /> Back to Learning Hub
            </Link>

            <div className="glass-card" style={{ padding: '3rem', borderRadius: '1.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <Layers size={48} color="var(--accent)" style={{ margin: '0 auto 1.5rem' }} />
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 800 }}>
                        The Book of System Design
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                        A full-length masterclass on architecting scalable, reliable, and maintainable software systems. Learn the industry standards for engineering backends that handle millions of users.
                    </p>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Server color="var(--primary)" /> Chapter 1: Scaling Systems
                    </h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        When your application grows from 100 users to 1,000,000 users, a single server will inevitably fail to handle the traffic. Scaling is the method by which we adapt hardware and software to handle increased load.
                    </p>

                    <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>Vertical vs. Horizontal Scaling</h3>
                    <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-muted)', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li><strong>Vertical Scaling (Scale UP):</strong> Buying a bigger server. Adding more RAM, CPU, or Storage to a single machine. It is simple but has a hard limit (you can only buy so much CPU) and introduces a single point of failure.</li>
                        <li><strong>Horizontal Scaling (Scale OUT):</strong> Adding more servers to a pool of resources. This is how modern distributed systems work. It requires software modifications but allows infinite scale and high availability.</li>
                    </ul>

                    <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', marginTop: '2rem' }}>Load Balancers</h3>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        When you have multiple servers (Horizontal Scaling), you need a centralized component to distribute incoming traffic. Load Balancers sit between the client and the servers, distributing requests based on algorithms like <em>Round Robin</em>, <em>Least Connections</em>, or <em>IP Hashing</em>.
                    </p>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Database color="var(--primary)" /> Chapter 2: The Database Layer
                    </h2>

                    <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>SQL vs NoSQL</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', borderTop: '4px solid #3b82f6' }}>
                            <h5 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '0.5rem' }}>SQL (Relational)</h5>
                            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.6' }}>Structured tabular data (MySQL, PostgreSQL). Strict schema. Excellent for relational data and ACID transactions (e.g., Banking systems).</p>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', borderTop: '4px solid #10b981' }}>
                            <h5 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '0.5rem' }}>NoSQL (Non-Relational)</h5>
                            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.6' }}>Document, Key-Value, Graph (MongoDB, Redis). Flexible schema. Excellent for rapid development, unstructured data, and high-volume reads/writes (e.g., Social Media feeds).</p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>CAP Theorem</h3>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        The CAP theorem states that a distributed database system can only guarantee two out of the following three features simultaneously:
                    </p>
                    <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-muted)', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li><strong>Consistency:</strong> Every read receives the most recent write or an error.</li>
                        <li><strong>Availability:</strong> Every request receives a non-error response, without guaranteeing it contains the most recent write.</li>
                        <li><strong>Partition Tolerance:</strong> The system continues to operate despite an arbitrary number of messages being dropped or delayed by the network.</li>
                    </ul>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        <em>Because network partitions (P) are inevitable in distributed systems, modern systems usually choose between CP or AP.</em>
                    </p>

                    <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>Database Scaling (Sharding vs Replication)</h3>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        <strong>Replication</strong> involves copying the database exactly. Usually done in a Master-Slave setup where Master handles writes and Slaves handle reads.
                        <br /><br />
                        <strong>Sharding</strong> involves splitting the database data horizontally into separate databases (e.g., Users A-M go to Server 1, N-Z go to Server 2). It vastly increases scale but increases query complexity.
                    </p>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem', padding: '3rem', background: '#fffbeb', borderRadius: '1.5rem', border: '1px solid #fde68a' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#92400e', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Activity color="#d97706" /> Chapter 3: Performance Optimization
                    </h2>

                    <h4 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem', color: '#b45309' }}>Caching (Redis / Memcached)</h4>
                    <p style={{ fontSize: '1.1rem', color: '#92400e', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        A Cache acts as a high-speed data storage layer that stores a subset of data, typically transient in nature, so that future requests for that data are served up faster than is possible by accessing the data's primary storage location (Database). Caching dramatically reduces database load and latency.
                    </p>

                    <h4 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem', color: '#b45309' }}>Content Delivery Networks (CDNs)</h4>
                    <p style={{ fontSize: '1.1rem', color: '#92400e', lineHeight: '1.6' }}>
                        A CDN is a geographically distributed group of servers which work together to provide fast delivery of Internet content (HTML pages, JS, CSS, Images, Videos). By serving static assets from a server closer to the user geographically, latency is significantly reduced.
                    </p>
                </div>

                <div className="content-section">
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Network color="var(--primary)" /> Chapter 4: Microservices & Event-Driven Architecture
                    </h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Unlike a Monolith where all code runs in one process, Microservices break down applications into their smallest isolated components. Each service (e.g., Billing, Auth, Inventory) is its own independent application, communicating over APIs or Message Broker events (Kafka, RabbitMQ). This allows teams to scale and deploy independently, but introduces complexity in tracing transactions across services.
                    </p>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>Chapter 5: How To Study System Design</h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        System design interviews are open-ended. You are not expected to write code; you are expected to draw architecture diagrams and discuss trade-offs. Use the <strong>PEDALS</strong> framework to study and answer:
                    </p>

                    <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-muted)', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li><strong>1. P - Process Requirements:</strong> Never start drawing immediately. Ask clarifying questions. "Who is the user?", "How many DAUs (Daily Active Users)?", "Are we read-heavy or write-heavy?"</li>
                        <li><strong>2. E - Estimate:</strong> Do back-of-the-envelope math. How much storage do we need per year? How much bandwidth?</li>
                        <li><strong>3. D - Design APIs:</strong> Write down the REST/GraphQL endpoints required. E.g., `POST /tweet`.</li>
                        <li><strong>4. A - Architecture (High Level):</strong> Draw the boxes. Client → Load Balancer → Web Servers → Database.</li>
                        <li><strong>5. L - Look for bottlenecks:</strong> Where is the Single Point of Failure? How do we scale the Database? Add Caching where needed.</li>
                        <li><strong>6. S - Scale:</strong> Suggest Sharding, CDNs, and Async Queues.</li>
                    </ul>
                </div>

                <div className="content-section" style={{ padding: '3rem', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '1.5rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#166534', borderBottom: '2px solid #86efac', paddingBottom: '1rem', marginBottom: '2rem' }}>Chapter 6: Essential Exercise Scenarios</h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#14532d', marginBottom: '2rem' }}>
                        Grab a whiteboard or use an Excalidraw-like tool. Practice drawing the architecture for these exact prompts.
                    </p>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '0.5rem' }}>1. Design a URL Shortener (e.g., Bitly)</h3>
                            <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '1rem' }}><strong>Task:</strong> Given a long URL, return a very short URL. When users visit the short URL, redirect them to the long one.</p>
                            <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}><strong>Hint:</strong> Focus on Hash functions (Base62 encoding) for generating the short string. Use a Key-Value NoSQL database for ultra-fast "Short-to-Long" lookups. Implement heavy caching.</p>
                        </div>

                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '0.5rem' }}>2. Design Twitter / News Feed</h3>
                            <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '1rem' }}><strong>Task:</strong> Users should be able to post messages and see a chronological or algorithmic feed of messages from people they follow.</p>
                            <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}><strong>Hint:</strong> Generating a timeline on-the-fly via SQL JOINs will crash at scale. Explore the concept of "Fanout-on-Write" where pre-computed timelines are stored in Redis queues for fast reading.</p>
                        </div>

                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '0.5rem' }}>3. Design WhatsApp / Chat Application</h3>
                            <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '1rem' }}><strong>Task:</strong> Two users must be able to send real-time text messages to each other across mobile devices.</p>
                            <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}><strong>Hint:</strong> Standard HTTP is too slow (polling). You must use WebSockets for persistent two-way connections. Think about how to route messages if User A is connected to Server 1, but User B is connected to Server 2 (Pub/Sub message queues).</p>
                        </div>

                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '0.5rem' }}>4. Design ticketmaster / Seat Reservation</h3>
                            <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '1rem' }}><strong>Task:</strong> Thousands of people are trying to buy the exact same 50 concert tickets at the exact same second.</p>
                            <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}><strong>Hint:</strong> This tests Database Concurrency. If you don't lock the row, two people will buy the same seat. Discuss ACID transactions, Optimistic vs Pessimistic locking, and distributed locks via Redis/Zookeeper.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
