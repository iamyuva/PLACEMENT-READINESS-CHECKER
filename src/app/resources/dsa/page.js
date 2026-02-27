'use client';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Layers, CheckCircle } from 'lucide-react';

export default function DSAPage() {
    return (
        <div className="container" style={{ maxWidth: '1000px', minHeight: '80vh', padding: '2rem 0', fontFamily: 'var(--font-inter)' }}>
            <Link href="/resources" style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontWeight: 500, fontSize: '1.1rem', textDecoration: 'none' }}>
                <ArrowLeft size={18} /> Back to Learning Hub
            </Link>

            <div className="glass-card" style={{ padding: '3rem', borderRadius: '1.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <BookOpen size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 800 }}>
                        The Book of Data Structures & Algorithms
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                        A comprehensive, textbook-level guide designed to demystify the core concepts of computer science. Master these principles to excel in technical assessments and lay the foundation for scalable software development.
                    </p>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>Chapter 1: Asymptotic Analysis (Big O)</h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Before writing algorithms, we must learn to evaluate them. Big O notation describes the limiting behavior of a function when the argument tends towards a particular value or infinity. It allows us to compare the efficiency of different approaches.
                    </p>
                    <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '1rem', borderLeft: '4px solid var(--primary)', marginBottom: '1.5rem' }}>
                        <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Key Time Complexities:</h4>
                        <ul style={{ lineHeight: '2', fontSize: '1.1rem', color: 'var(--text-main)' }}>
                            <li><strong>O(1) - Constant Time:</strong> Execution time is independent of input size (e.g., array lookup).</li>
                            <li><strong>O(log n) - Logarithmic Time:</strong> Execution time grows slowly as input size increases (e.g., binary search).</li>
                            <li><strong>O(n) - Linear Time:</strong> Execution time grows directly proportional to input size (e.g., traversing an array).</li>
                            <li><strong>O(n log n) - Linearithmic Time:</strong> Common in efficient sorting algorithms (e.g., Merge Sort, Quick Sort).</li>
                            <li><strong>O(n²) - Quadratic Time:</strong> Nested loops over the data (e.g., Bubble Sort). Avoid for large datasets.</li>
                        </ul>
                    </div>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>Chapter 2: Fundamental Data Structures</h2>

                    <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>2.1 Arrays & Strings</h3>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Arrays are contiguous blocks of memory containing elements of the same type. Strings are essentially arrays of characters.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                        <div style={{ background: '#eff6ff', padding: '1.5rem', borderRadius: '1rem' }}>
                            <h5 style={{ fontSize: '1.2rem', color: '#1d4ed8', marginBottom: '0.5rem' }}>Strengths</h5>
                            <p style={{ fontSize: '1rem', color: '#1e3a8a', lineHeight: '1.6' }}>O(1) random access. Extremely fast indexing. Cache-friendly due to spatial locality.</p>
                        </div>
                        <div style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '1rem' }}>
                            <h5 style={{ fontSize: '1.2rem', color: '#b91c1c', marginBottom: '0.5rem' }}>Weaknesses</h5>
                            <p style={{ fontSize: '1rem', color: '#7f1d1d', lineHeight: '1.6' }}>Fixed size (in static languages). O(n) insertions and deletions in the middle.</p>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', marginTop: '3rem' }}>2.2 Linked Lists</h3>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Linked lists consist of nodes where each node contains data and a pointer to the next node. They do not require contiguous memory.
                    </p>
                    <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-muted)', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li><strong>Singly Linked:</strong> Forward navigation only.</li>
                        <li><strong>Doubly Linked:</strong> Forward and backward navigation (requires extra memory for 'prev' pointer).</li>
                        <li><strong>Time Complexity:</strong> O(1) insertion/deletion at head, O(n) search and random access.</li>
                    </ul>

                    <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', marginTop: '3rem' }}>2.3 Hash Maps (Dictionaries)</h3>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Hash maps map keys to values using a hash function. The hash function computes an index into an array of buckets or slots.
                    </p>
                    <div style={{ background: '#f0fdf4', padding: '2rem', borderRadius: '1rem', borderLeft: '4px solid var(--success)', marginBottom: '1.5rem' }}>
                        <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#166534' }}>Handling Collisions:</h4>
                        <p style={{ fontSize: '1.1rem', color: '#14532d', lineHeight: '1.6' }}>
                            Collisions occur when two keys hash to the same index. Common resolutions include <strong>Chaining</strong> (using linked lists at each index) and <strong>Open Addressing</strong> (finding the next available slot). The average time complexity for search, insertion, and deletion is O(1).
                        </p>
                    </div>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>Chapter 3: Trees & Graphs</h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        These denote non-linear data structures describing hierarchical or networked connections.
                    </p>
                    <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>3.1 Binary Search Trees (BST)</h3>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        A tree where every node has at most two children. For any node, all elements in the left subtree are smaller, and all elements in the right subtree are larger. Average search time is O(log n), but degrades to O(n) if the tree becomes unbalanced (like a linked list).
                    </p>

                    <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', marginTop: '2rem' }}>3.2 Graph Traversal</h3>
                    <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-muted)', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li><strong>Breadth-First Search (BFS):</strong> Explores layer by layer. Uses a Queue. Excellent for finding the shortest path in unweighted graphs.</li>
                        <li><strong>Depth-First Search (DFS):</strong> Explores as far down a branch as possible before backtracking. Uses a Stack (or recursion). Great for topological sorting and cycle detection.</li>
                    </ul>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem', padding: '3rem', background: 'var(--nav-bg)', borderRadius: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>Chapter 4: Algorithmic Paradigms</h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        Mastering the building block techniques allows you to break down unseen complex problems.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1.5rem' }}>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Two Pointers / Sliding Window</h4>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Optimum for array/string problems requiring a subset or pair analysis to reduce an O(n²) loop to O(n).</p>
                        </div>
                        <div style={{ borderLeft: '3px solid var(--success)', paddingLeft: '1.5rem' }}>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Divide and Conquer</h4>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly (e.g., Merge Sort).</p>
                        </div>
                        <div style={{ borderLeft: '3px solid #f59e0b', paddingLeft: '1.5rem' }}>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Dynamic Programming</h4>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Used optimization where a problem has overlapping subproblems and optimal substructure. We save (memoize) answers to subproblems to avoid re-computation (e.g., Fibonacci sequence efficiently, Knapsack Problem).</p>
                        </div>
                    </div>
                </div>

                <div className="content-section" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>Chapter 5: How To Study (The Blueprint)</h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Blindly doing 500 LeetCode problems is highly inefficient. Follow this specific framework to maximize your return on time invested:
                    </p>

                    <ul style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-muted)', marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li><strong>1. Master by Topic, Not Difficulty:</strong> Spend 3 days strictly doing Array problems. Then 3 days on Linked Lists. Do not mix them until you've mastered the underlying patterns for each.</li>
                        <li><strong>2. The 30-Minute Rule:</strong> If you are completely stuck on a problem for more than 30 minutes, <em>look at the solution</em>. Your goal right now is pattern recognition, not inventing new algorithms.</li>
                        <li><strong>3. Whiteboarding:</strong> Before writing a single line of code, hand-draw the array/tree and trace your logic with a pen. If you cannot solve it on paper, you cannot solve it in code.</li>
                        <li><strong>4. Spaced Repetition:</strong> If you struggled with a problem on Monday, flag it. Do it again on Thursday from scratch without looking at the answer.</li>
                    </ul>
                </div>

                <div className="content-section" style={{ padding: '3rem', background: '#fef2f2', border: '1px solid #fecdd3', borderRadius: '1.5rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#be123c', borderBottom: '2px solid #fda4af', paddingBottom: '1rem', marginBottom: '2rem' }}>Chapter 6: Essential Exercise Problems</h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#9f1239', marginBottom: '2rem' }}>
                        These are the classic, high-ROI problems you absolutely must know. Try solving them in your preferred language.
                    </p>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '0.5rem' }}>1. Two Sum (Arrays / Hash Map)</h3>
                            <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '1rem' }}><strong>Problem:</strong> Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.</p>
                            <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}><strong>Hint:</strong> Don't use nested loops (O(n²)). As you iterate through the array, store `target - current_number` in a Hash Map. Time: O(n).</p>
                        </div>

                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '0.5rem' }}>2. Reverse Linked List (Pointers)</h3>
                            <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '1rem' }}><strong>Problem:</strong> Given the `head` of a singly linked list, reverse the list, and return the reversed list.</p>
                            <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}><strong>Hint:</strong> You need three pointers: `prev`, `current`, and `next_temp`. Keep updating the `next` pointer of `current` to point backwards to `prev`.</p>
                        </div>

                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '0.5rem' }}>3. Valid Parentheses (Stacks)</h3>
                            <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '1rem' }}><strong>Problem:</strong> Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid (every open bracket is closed by the same type in the correct order).</p>
                            <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}><strong>Hint:</strong> Iterate through the string. Push opening brackets to a Stack. If you see a closing bracket, pop from the Stack and check if it matches.</p>
                        </div>

                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '0.5rem' }}>4. Maximum Subarray (Dynamic Programming)</h3>
                            <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '1rem' }}><strong>Problem:</strong> Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.</p>
                            <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}><strong>Hint:</strong> Kadane's Algorithm. Keep a running sum. If the running sum ever drops below 0, reset it to 0. Keep track of the max sum seen so far.</p>
                        </div>

                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '0.5rem' }}>5. Number of Islands (Graphs / DFS)</h3>
                            <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '1rem' }}><strong>Problem:</strong> Given an `m x n` 2D binary grid representing a map of `1`s (land) and `0`s (water), return the number of islands.</p>
                            <p style={{ fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}><strong>Hint:</strong> Iterate through the matrix. Every time you hit a `1`, increment your island count, then trigger a Depth-First Search (DFS) that sinks (turns to `0`) all connected `1`s so you don't count them again.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
