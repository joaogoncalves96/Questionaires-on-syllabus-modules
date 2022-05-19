import { FormEvent, useRef } from "react";
import styles from "./Register.module.css";
import Router from "next/router"; // I need this to redirect to the login or session.


interface RegisterProps {
    onSubmit: (user: User) => void;
}

interface User {
    id: number;
    username: string;
    password: string;
}

function RegisterForm(props: RegisterProps) {
    const { onSubmit } = props;
    const usernameRef = useRef<HTMLTextAreaElement>(null);
    const passwordRef = useRef<HTMLTextAreaElement>(null);
    
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

     const response = await fetch(`http://localhost:3000/api/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            }),
        });

        const register = (await response.json()) as User;

        

        return (
            <form className={styles.wrapper} onSubmit={handleSubmit}>
                <label className={styles.label}>
                 Choose your username:
                 <textarea ref={usernameRef} name="username" />
              </label>
              <label className={styles.label}>
                    Choose your password:
                    <textarea ref={passwordRef} name="password" />
             </label>
              <button type="submit">Register</button>
         </form>
     );

    }
}


export { RegisterForm };