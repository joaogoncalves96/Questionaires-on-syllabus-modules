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
      <div className={styles.cardRegister}>
         <h2 className={styles.text}>REGISTER</h2>
         <form className={styles.form} onSubmit={handleSubmit}>
            <input
               className={styles.inputText}
               ref={usernameRef}
               name="username"
               placeholder="Choose your username"
               required
            />

            <input
               className={styles.inputPass}
               ref={passwordRef}
               type="password"
               name="password"
               placeholder="Choose your password"
               required
            />

            <input
               className={styles.inputPass}
               ref={confirmPasswordRef}
               type="password"
               name="password"
               placeholder="Confirm your password"
               required
            />
            <div className={styles.formActions}>
               <button
                  type="submit"
                  className={
                     styles.btnRegister
                  } /*onClick={() => checkUser(usernameRef.current.value) ? "Sucess" : "Unsucess"}*/
               >
                  Register{" "}
               </button>
            </div>
         </form>
      </div>
   );
}
export default Register;
