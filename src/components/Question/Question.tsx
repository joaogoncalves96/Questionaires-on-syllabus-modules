import { useState } from "react";
import { CommentForm } from "../CommentQuestion/CommentForm";
import styles from "./Question.module.css";

interface QuestionProps {
    id: number;
    text: string;
    admin: {
        id: number;
        name: string;
    };
    questions: number[];
}

function Question(props: QuestionProps) {
    const { text, admin } = props;

    const [isReplying, setIsReplying] = useState(false);

    return (
        <article className={styles.wrapper}>
            <p className={styles.text}>{text}</p>
            <button onClick={() => setIsReplying(!isReplying)}>Reply</button>
            <a href={`/user/${admin.id}`}>{admin.name}</a>
            {isReplying && <CommentForm />}
        </article>
    );
}

export { Question };
