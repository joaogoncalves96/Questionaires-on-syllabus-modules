import Router from "next/router";
import { FormEvent, useRef, useState } from "react";
import database from "../../database.json";
function Login() {

    const [successLogin, setSuccessLogin] = useState(false);

    const inputRef1 = useRef<HTMLInputElement>(null);
    const inputRef2 = useRef<HTMLInputElement>(null);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const username = inputRef1.current.value;
        const password = inputRef2.current.value;

        const validUsername = database.users.find((user) => user.username === username).username;
        const validPassword = database.users.find((user) => user.password === password).password;

        if(username === validUsername && password === validPassword) {
            setSuccessLogin(true);
            setTimeout(()=> Router.push("/"), 2000);
        }

        // console.log("username " + username);

        // const json = Buffer.from(JSON.stringify({ username})).toString("base64");

        // console.log("json " + json);

        // document.cookie = `token=${json}; max-age=9000`;

        // console.log("cookie", document.cookie);

        // Router.push("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username
                <input ref={inputRef1} name="admin"></input>
            </label>
            <label>
                Password
                <input ref={inputRef2} name="password"></input>
            </label>
            <button type="submit">Login</button>

            {successLogin && <p>Login Success</p>}

        </form>
    );
}

export default Login;
