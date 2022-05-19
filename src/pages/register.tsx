/*import { RegisterForm } from "../components/Register/RegisterForm";
import styles from "../components/Register/Register.module.css";

function Register() {
    return (
      <form className={styles.register}>
          <label>
              Choose a username:
              <input type="text" name="username" />
          </label>
          <label>
              Choose a password:
              <input type="password" name="password" />
          </label>
          <input type="submit" value="Submit" />
      </form>
    );
  }
  export default Register;*/


  import { FormEvent, useRef } from "react";
  import styles from "../components/Register/Register.module.css";
  import Router from "next/router"; // I need this to redirect to the login or session.
  
  
  interface User {
      id: number;
      username: string;
      password: string;
  }
  
  function Register(props) {
      const { onSubmit } = props;
      const usernameRef = useRef;
      const passwordRef = useRef;
      
      async function handleSubmit(e: FormEvent<HTMLFormElement>) {
          e.preventDefault();
  
       const response = await fetch(`http://localhost:3000/api/users/`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
               username: usernameRef,
               password: passwordRef,
           }),
              
          });
  
          const register = (await response.json()) as User;
          
          return register;
        }
        
          return (
              <form className={styles.register} onSubmit={handleSubmit}>
                  <label className={styles.label}>
                   Choose your username:
                   <input name="username" type="text" {...usernameRef} />
                </label>
                <label className={styles.label}>
                      Choose your password:
                      <input type="text" name="password" {...passwordRef} />
               </label>
               <button type="submit">Register</button>
           </form>
       );
  
      }
  
  
  export default Register;