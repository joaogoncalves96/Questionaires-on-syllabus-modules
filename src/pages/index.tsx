import { useState } from "react";
import Header from "../components/Header/Header";
import { Question } from "../components/Question/Question";
import { QuestionForm } from "../components/QuestionForm/QuestionForm";
import { SessionContext } from "../components/Auth/SessionContext"
import { Question as DatabaseQuestion, User } from "../database.types";

interface HomepageProps {
    questions: {
        id: number;
        text: string;
        admin: {
            id: number;
            name: string;
        };
        questions: number[];
        category: string;
    }[];
    session: Session;
}

function Homepage(props: HomepageProps) {
    const { session } = props;

    const [questions, setQuestions] = useState(props.questions);

    return (
        <SessionContext.Provider value={session}>
            <Header />
            <main style={{ padding: 10 }}>
                <QuestionForm
                    onSubmit={(question) => {
                        const newQuestion = {
                            ...question,
                            id: questions.length + 1,
                            text: question.text,
                            admin: {
                                id: session.users.id,
                                name: session.users.name
                            },
                            questions: [session.users.id],
                            category: question.category,
                        };

                        setQuestions([newQuestion, ...questions]);
                    }}
                />
                <hr />
                <ul
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                    }}
                >
                    {questions.map((question) => (
                        <li key={question.id}>
                            <Question
                                id={question.id}
                                text={question.text}
                                admin={question.admin}
                                questions={question.questions}
                            />
                        </li>
                    ))}
                </ul>
            </main>
        </SessionContext.Provider>
    );
}

interface Session extends User {
    users: any;
}

async function getServerSideProps(context) {
    const { req } = context;

    const [questions, users, session] = await Promise.all([
        fetch("http://localhost:3000/api/questions").then(
            (res) => res.json() as Promise<DatabaseQuestion[]>
        ),
        fetch("http://localhost:3000/api/users").then(
            (res) => res.json() as Promise<User[]>
        ),
        fetch("http://localhost:3000/api/session", {
            headers: {
                cookie: req.headers.cookie,
            },
        }).then((res) => res.json() as Promise<Session>),
    ]);

    const userById: Record<number, User> = {};
    for (const user of users) {
        userById[user.id] = user;
    }

    const questionsWithAdmin = questions.map((question) => ({
        ...question,
        Admin: { id: question.admin, name: userById[question.admin].name },
    }));

    return {
        props: {
            questions: questionsWithAdmin,
            session,
        },
    };
}

export default Homepage;
export { getServerSideProps };




/*
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
    </div>
  );
}*/
