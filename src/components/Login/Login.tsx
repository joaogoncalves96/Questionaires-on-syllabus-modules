import Router from "next/router";
import { FormEvent, useRef, useState } from "react";
import database from "../../../database.json";
import styles from "./Login.module.css";
function Login() {
   const [successLogin, setSuccessLogin] = useState(false);
   const [loading, setLoading] = useState(false);

   const inputRef1 = useRef<HTMLInputElement>(null);
   const inputRef2 = useRef<HTMLInputElement>(null);

   function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      // setLoading(true);

      const username = inputRef1.current.value;
      const password = inputRef2.current.value;

      const validUsername = database.users.find((user) => user.username === username).username;
      const validPassword = database.users.find((user) => user.password === password).password;

      if (username === validUsername && password === validPassword) {
         setSuccessLogin(true);

         setTimeout(() => Router.push("/"), 2000);
      }

      // console.log("username " + username);

      // const json = Buffer.from(JSON.stringify({ username})).toString("base64");

      // console.log("json " + json);

      // document.cookie = `token=${json}; max-age=9000`;

      // console.log("cookie", document.cookie);

      // Router.push("/");
   }

   return (
      <div className={styles.cardLogin}>
         <h2 className={styles.text}>LOGIN</h2>
         <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.inputText} placeholder="Username" ref={inputRef1} name="admin"></input>
            <input
               className={styles.inputPass}
               placeholder="Password"
               ref={inputRef2}
               name="password"
               type="password"
            ></input>
            <div className={styles.formActions}>
               <button className={styles.btnLogin} type="submit" disabled={loading}>
                  {loading ? "Loading..." : "Log in"}
               </button>
               <a className={styles.btnSign} href="/signup">
                  {" "}
                  Don't have an account?
               </a>
            </div>
            {successLogin && <h3 className={styles.loginSucess}>Login Sucess! 🎆</h3>}
         </form>
      </div>
   );
}

export default Login;

// {
//    (
//       <form onSubmit={handleSubmit}>
//          <label>
//             Username
//             <input ref={inputRef1} name="admin"></input>
//          </label>
//          <label>
//             Password
//             <input ref={inputRef2} name="password"></input>
//          </label>
//          <button type="submit">Login</button>

//          {successLogin && <p>Login Success</p>}
//       </form>
//    );
// }
