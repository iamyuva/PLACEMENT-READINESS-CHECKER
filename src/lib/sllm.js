export function generateTechnicalQuestions() {
    const templates = [
        {
            domain: "Data Structures",
            options: [
                {
                    q: "Which specific data structure is best for implementing a LRU cache?",
                    opts: ["Linked List", "Doubly Linked List with Hash Map", "Binary Search Tree", "Array"],
                    ans: "Doubly Linked List with Hash Map"
                },
                {
                    q: "What is the worst-case time complexity of accessing an element in a Hash Table?",
                    opts: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                    ans: "O(n)"
                }
            ]
        },
        {
            domain: "System Design",
            options: [
                {
                    q: "In a microservices architecture, how do you handle distributed transactions gracefully?",
                    opts: ["Two-Phase Commit", "Saga Pattern", "Global Lock", "Monolithic DB"],
                    ans: "Saga Pattern"
                },
                {
                    q: "Which caching strategy writes data to cache and database simultaneously?",
                    opts: ["Write-Through", "Write-Behind", "Cache-Aside", "Read-Through"],
                    ans: "Write-Through"
                }
            ]
        },
        {
            domain: "Web Development",
            options: [
                {
                    q: "What happens when you call setState in React?",
                    opts: ["Immediate DOM mutation", "Sync UI update", "Enqueues an update & triggers re-render", "Refreshes page"],
                    ans: "Enqueues an update & triggers re-render"
                },
                {
                    q: "Which attribute ensures scripts are executed asynchronously without blocking HTML parsing?",
                    opts: ["defer", "async", "preload", "sync"],
                    ans: "async"
                }
            ]
        },
        {
            domain: "Cloud & DevOps",
            options: [
                {
                    q: "Which AWS service is specifically designed as a scalable object storage?",
                    opts: ["Amazon EBS", "Amazon RDS", "Amazon S3", "Amazon EC2"],
                    ans: "Amazon S3"
                },
                {
                    q: "What is the main purpose of a Docker container?",
                    opts: ["Run heavy VMs", "Package app & dependencies securely", "Host databases natively", "Manage DNS routing"],
                    ans: "Package app & dependencies securely"
                }
            ]
        }
    ];

    // Simulate LLM randomly constructing a tailored question set
    return templates.map(t => {
        const randomQuestion = t.options[Math.floor(Math.random() * t.options.length)];
        return {
            id: Math.random().toString(36).substr(2, 9),
            domain: t.domain,
            question: randomQuestion.q,
            options: randomQuestion.opts.sort(() => Math.random() - 0.5), // Shuffle options
            answer: randomQuestion.ans
        };
    });
}


export function generateBehavioralQuestions() {
    const scenarios = [
        {
            domain: "Crisis Management",
            options: [
                {
                    q: "You accidentally pushed a severe bug to production and it affects 10,000 users. What do you do immediately?",
                    opts: [
                        "Panic and rewrite the code, then push an untested fix.",
                        "Inform the engineering manager, initiate rollback procedures, and write a post-mortem.",
                        "Deny the bug exists until customer support forces the issue.",
                        "Wait for Monday morning to handle it during normal hours."
                    ],
                    ans: "Inform the engineering manager, initiate rollback procedures, and write a post-mortem."
                },
                {
                    q: "The main server just experienced an outage 15 minutes before a giant product launch. What is the priority?",
                    opts: [
                        "Quickly cancel the launch event entirely.",
                        "Execute the pre-defined disaster recovery / failover plan and communicate with stakeholders.",
                        "Start debugging the code locally to find the error.",
                        "Blame the infrastructure provider on Twitter."
                    ],
                    ans: "Execute the pre-defined disaster recovery / failover plan and communicate with stakeholders."
                }
            ]
        },
        {
            domain: "Collaboration & Conflict",
            options: [
                {
                    q: "A senior team member constantly overrides your design decisions without explanation. What is the professional approach?",
                    opts: [
                        "Start overriding their code when they aren't looking.",
                        "Quit the job.",
                        "Schedule a 1-on-1 to respectfully ask for their reasoning and establish mutual guidelines.",
                        "Publicly call them out in the team Slack channel."
                    ],
                    ans: "Schedule a 1-on-1 to respectfully ask for their reasoning and establish mutual guidelines."
                },
                {
                    q: "You realize you won't meet the deadline for your sprint ticket. What's the best action?",
                    opts: [
                        "Notify the Scrum Master / Product Owner early, explain the blocker, and ask for help.",
                        "Hide the status and hope no one asks.",
                        "Work 80 hours a week silently to get it done.",
                        "Just push incomplete code to pass the review."
                    ],
                    ans: "Notify the Scrum Master / Product Owner early, explain the blocker, and ask for help."
                }
            ]
        },
        {
            domain: "Adaptability",
            options: [
                {
                    q: "Midway through a massive feature build, the client completely changes the requirements. You react by:",
                    opts: [
                        "Throwing a fit and ignoring the client.",
                        "Accepting the pivot gracefully, estimating the new timeline, and halting old work immediately.",
                        "Finishing the old feature anyway because you spent time on it.",
                        "Promising you can do both the old and new feature by the same deadline."
                    ],
                    ans: "Accepting the pivot gracefully, estimating the new timeline, and halting old work immediately."
                }
            ]
        }
    ];

    // Simulate LLM generating random behavioral questions
    return scenarios.map(t => {
        const randomQuestion = t.options[Math.floor(Math.random() * t.options.length)];
        return {
            id: Math.random().toString(36).substr(2, 9),
            domain: t.domain,
            question: randomQuestion.q,
            options: randomQuestion.opts.sort(() => Math.random() - 0.5),
            answer: randomQuestion.ans
        };
    });
}
