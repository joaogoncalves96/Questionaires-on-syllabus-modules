import { FormEvent, useRef } from "react";

import styles from "./QuestionForm.module.css";

interface QuestionFormProps {
    onSubmit: (question: Question) => void;
}

interface Question {
    category: any;
    id: number;
    text: string;
    admin: number;
    questions: number[];
}

function QuestionForm(props: QuestionFormProps) {
    const { onSubmit } = props;

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const response = await fetch(`http://localhost:3000/api/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: textareaRef.current.value,
            }),
        });

        const question = (await response.json()) as Question;

        if (response.ok) {
            onSubmit(question);
        }
    }

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <label className={styles.label}>
                Text
                <textarea ref={textareaRef} name="text" />
            </label>
            <button type="submit">Add question</button>
        </form>
    );
}

export { QuestionForm };
