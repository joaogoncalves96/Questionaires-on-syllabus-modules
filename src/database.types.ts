interface Database {
    users: User[];
    questions: Question[];
}

interface User {
    name: any;
    id: number;
    username: string;
    password: string;

}

interface Question {
    id: number;
    category: string;
    type: string;
    title: string;
    admin: number;
    answers: number[];
    correctAnswer: number[];
    createdAt: number;
}

export type { Database, User, Question };
