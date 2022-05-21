import { FormEvent, useRef } from "react";
import styles from "./Register.module.css";
import Router from "next/router"; // I need this to redirect to the login or session.
import database from "../../../database.json";
interface User {
   id: number;
   username: string;
   password: string;
}
//   interface Database {
//     users: User[];
//     questions: Questions[];
// }
function Register(props: any) {
   // const { onSubmit } = props;
   const usernameRef = useRef(null);
   const passwordRef = useRef(null);
   const confirmPasswordRef = useRef(null);
   function validUser() {
      //const invalidUsername = database.users.find((user) => user.username !== usernameRef.current.value);
      const user = database.users.find((user) => user.username === usernameRef.current.value);
      if (user) {
         alert("Username " + user.username + " already exists");
         return false;
      } else {
         return true;
      }
   }
   function checkPassword() {
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
         alert("Passwords do not match");
         return false;
      }
      alert("Successfully registered");
      setTimeout(() => Router.push("/"), 1000);
      return true;
   }
   // function readDatabase() {
   //     return JSON.parse(fs.readFileSync("database.json", "utf8"));
   // }
   //       function checkUser(username: string) {
   //             const database = readDatabase();
   //             const invalidUsername = database.users.find((user) => user.username === username)?.username;
   //             if(invalidUsername) {
   //                 return false;
   //             }
   //             return true;
   //       }
   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      if (!validUser() || !checkPassword()) {
         return;
      }
      e.preventDefault();
      const response = await fetch(`http://localhost:3000/api/users/`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
         }),
      });
      //   checkUser(usernameRef.current.value);
      const register = (await response.json()) as User;
      return register;
   }
   return (
      <form className={styles.register} onSubmit={handleSubmit}>
         <label className={styles.label}>
            Choose your username:
            <input ref={usernameRef} name="username" />
         </label>
         <label className={styles.label}>
            Choose your password:
            <input ref={passwordRef} type="password" name="password" />
         </label>
         <label className={styles.label}>
            Confirm your password:
            <input ref={confirmPasswordRef} type="password" name="password" />
         </label>
         <button type="submit" /*onClick={() => checkUser(usernameRef.current.value) ? "Sucess" : "Unsucess"}*/>
            Register{" "}
         </button>
      </form>
   );
}
export default Register;
