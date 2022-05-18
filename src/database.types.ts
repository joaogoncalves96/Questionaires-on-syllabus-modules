interface Database {
    users: User[];
    questions: Questions[];
}

interface User {
    [x: string]: any;
    id: number;
    name: string;
}

interface Questions {
    id: number;
    questionTitle: string;
    answers: string [];
    // posterId: number
    createdAt: number;
}

export type { Database, User, Questions };
