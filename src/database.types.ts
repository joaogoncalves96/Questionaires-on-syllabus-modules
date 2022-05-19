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
    category: string;
    questionTitle: string;
    answers: {id: number, text: string, isCorrect: boolean} [];
    // posterId: number
   createdAt: number;
}

export type { Database, User, Questions };
