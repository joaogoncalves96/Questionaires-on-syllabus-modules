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
    categories: string [];
    type: string;
    title: string;
    answers: {id: number, text: string, isCorrect: boolean} [];
    // posterId: number
    correctAnswers: string [];
   createdAt: number;
}

export type { Database, User, Questions };
