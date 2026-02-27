export const ASSESSMENT_QUESTIONS = [
    {
        id: 1,
        question: "Which of the following sorting algorithms has the best worst-case time complexity?",
        options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
        answer: "Merge Sort",
        domain: "Data Structures & Algorithms"
    },
    {
        id: 2,
        question: "In object-oriented programming, what pattern would you use to ensure only one instance of a configuration manager is created?",
        options: ["Factory Pattern", "Observer Pattern", "Singleton Pattern", "Decorator Pattern"],
        answer: "Singleton Pattern",
        domain: "System Design"
    },
    {
        id: 3,
        question: "Consider a relational database. Which isolation level guarantees that phantom reads will NOT occur?",
        options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
        answer: "Serializable",
        domain: "Database Management"
    },
    {
        id: 4,
        question: "You need to retrieve data from a remote server in a React component and update the UI. What hook should you use for side effects like API fetching?",
        options: ["useMemo", "useContext", "useEffect", "useCallback"],
        answer: "useEffect",
        domain: "Web Development"
    },
    {
        id: 5,
        question: "What is the output of the following JavaScript? `console.log(typeof null);`",
        options: ["'null'", "'object'", "'undefined'", "Throws a TypeError"],
        answer: "'object'",
        domain: "Web Development"
    },
    {
        id: 6,
        question: "A company wants to decouple their microservices so they don't communicate synchronously. Which AWS service is best suited for an asynchronous pub/sub model?",
        options: ["Amazon RDS", "Amazon SQS", "Amazon SNS", "Amazon EC2"],
        answer: "Amazon SNS",
        domain: "Cloud Computing"
    },
    {
        id: 7,
        question: "Which HTTP status code is most appropriate when a resource is successfully created via a POST request?",
        options: ["200 OK", "201 Created", "204 No Content", "400 Bad Request"],
        answer: "201 Created",
        domain: "API Design"
    }
];

export const SKILL_DOMAINS = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Data Science",
    "Cloud Computing",
    "Cybersecurity",
    "Mobile App Development",
    "DevOps"
];

export const COMMUNICATION_QUESTIONS = [
    {
        id: 1,
        question: "You have discovered a critical bug in production on a Friday afternoon. What is your immediate course of action?",
        options: [
            "Fix it quickly and push to production to resolve it before the weekend.",
            "Inform the team lead immediately, assess impact, and follow the emergency rollback/hotfix procedure.",
            "Log off and plan to fix it first thing Monday morning to avoid weekend disruption.",
            "Post the issue on Stack Overflow and wait for an answer."
        ],
        answer: "Inform the team lead immediately, assess impact, and follow the emergency rollback/hotfix procedure.",
        domain: "Crisis Management"
    },
    {
        id: 2,
        question: "During a code review, a senior developer leaves a harsh comment criticizing your approach. How do you respond?",
        options: [
            "Argue back explaining why my way is superior.",
            "Ignore the comment and merge the PR anyway.",
            "Ask clarifying questions objectively and discuss the trade-offs of both approaches without getting defensive.",
            "Complain to the manager about their toxic behavior."
        ],
        answer: "Ask clarifying questions objectively and discuss the trade-offs of both approaches without getting defensive.",
        domain: "Professional Resilience"
    },
    {
        id: 3,
        question: "You are blocked on a task and have spent 30 minutes trying to solve it without progress. What do you do next?",
        options: [
            "Continue struggling for the rest of the day until I solve it.",
            "Immediately ask a colleague to write the code for me.",
            "Document what I've tried, summarize the specific issue, and ask a colleague for guidance or pair programming.",
            "Pick up a different task and hope this one resolves itself."
        ],
        answer: "Document what I've tried, summarize the specific issue, and ask a colleague for guidance or pair programming.",
        domain: "Collaboration"
    }
];
