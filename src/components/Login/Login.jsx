import styles from "./Login.module.css";
import { useState } from "react";
import databaseUsers from "../../../databaseUsers.json";

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
        if (username === databaseUsers.username && password === databaseUsers.password) {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    verifyLogin({ username, password })
      .then(() => {
        setSucessLogin(true);
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
     {usernameError&&<div className={styles.error}>{usernameError}</div>}
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
      {sucessLogin&&<div className={styles.sucess}>Login Sucess</div>}
    </form>
  );
}
export default Login;
