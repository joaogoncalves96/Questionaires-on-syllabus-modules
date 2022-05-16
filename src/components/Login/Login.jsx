import styles from "./Login.module.css";
import { useState } from "react";
import database from "../../../database.json";
import Router from "next/router";



function Login() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const[sucessLogin, setSucessLogin] = useState(false);


  const handleUsernameChange = (e) => {
    setSucessLogin('');
    setUsernameError(' ');
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setSucessLogin('');
    setPasswordError(' ');
    setPassword(e.target.value);
  };

  async function verifyLogin({ username, password }) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        const user = database.users.find((user) => user.username === username && user.password === password);
       if (!user) {
      reject();
    }
   resolve();
      }, 1000);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    verifyLogin({ username, password })
      .then(() => {
        setSucessLogin(true);
        setTimeout(() => {
        Router.push("/")
        }, 2000);

      }
      )
      .catch(() => {
        setUsernameError("Username or password incorrect");
        setPasswordError("Username or password incorrect");
      }
      );


  };

  return (
    <form onSubmit={handleSubmit} className={styles.login} autoComplete="off">
      <label>Username</label>
      <input
      required
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}/><br></br>
      <label>Password</label>
      <input
      required
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}/><br></br>
       {passwordError&&<div className={styles.error}>{passwordError}</div>}
      <button type="submit" className={styles.submit}>Login
      </button>
      {sucessLogin&& <div className={styles.sucess}>Login Sucess</div>}
    </form>
  );
}
export default Login;
